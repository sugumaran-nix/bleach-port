"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

type Cue = "entry" | "hover" | "select" | "menu" | "transmission" | "bankai" | "mask";

function dispatchCue(cue: Cue) {
  if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("archive:sound", { detail: cue }));
}

export function playArchiveCue(cue: Cue) {
  dispatchCue(cue);
}

export default function Soundboard() {
  const [muted, setMuted] = useState(true);
  const contextRef = useRef<AudioContext | null>(null);
  const lastHoverRef = useRef(0);

  useEffect(() => {
    const stored = window.localStorage.getItem("archive-sound-muted");
    if (stored === "false") setMuted(false);
    const onCue = (event: Event) => {
      const cue = (event as CustomEvent<Cue>).detail;
      if (muted || cue === "hover" && performance.now() - lastHoverRef.current < 90) return;
      if (cue === "hover") lastHoverRef.current = performance.now();
      const AudioCtor = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtor) return;
      const context = contextRef.current ?? new AudioCtor();
      contextRef.current = context;
      if (context.state === "suspended") void context.resume();
      const now = context.currentTime;
      const output = context.createGain();
      output.gain.setValueAtTime(0.0001, now);
      output.gain.exponentialRampToValueAtTime(cue === "transmission" || cue === "bankai" || cue === "mask" ? 0.05 : 0.028, now + 0.012);
      output.gain.exponentialRampToValueAtTime(0.0001, now + (cue === "entry" ? 0.55 : 0.18));
      output.connect(context.destination);
      const oscillator = context.createOscillator();
      oscillator.type = cue === "hover" ? "sine" : "triangle";
      const base = cue === "entry" ? 130 : cue === "select" ? 280 : cue === "transmission" ? 92 : cue === "bankai" ? 54 : cue === "mask" ? 360 : cue === "menu" ? 190 : 420;
      oscillator.frequency.setValueAtTime(base, now);
      oscillator.frequency.exponentialRampToValueAtTime(base * (cue === "entry" || cue === "bankai" || cue === "mask" ? 1.8 : 0.75), now + (cue === "entry" || cue === "bankai" || cue === "mask" ? 0.42 : 0.14));
      oscillator.connect(output);
      oscillator.start(now);
      oscillator.stop(now + (cue === "entry" || cue === "bankai" || cue === "mask" ? 0.58 : 0.2));
      if (cue === "entry" || cue === "select" || cue === "bankai" || cue === "mask") {
        const overtone = context.createOscillator();
        overtone.type = "sine";
        overtone.frequency.value = base * 2.02;
        overtone.connect(output);
        overtone.start(now + 0.03);
        overtone.stop(now + 0.18);
      }
    };
    window.addEventListener("archive:sound", onCue);
    return () => {
      window.removeEventListener("archive:sound", onCue);
      void contextRef.current?.close();
    };
  }, [muted]);

  const toggle = () => {
    const next = !muted;
    setMuted(next);
    window.localStorage.setItem("archive-sound-muted", String(next));
    if (!next) dispatchCue("menu");
  };

  return <button className="sound-toggle" type="button" onClick={toggle} aria-pressed={!muted} aria-label={muted ? "Enable archive sounds" : "Mute archive sounds"}>{muted ? <VolumeX size={14} /> : <Volume2 size={14} />}<span>{muted ? "SOUND OFF" : "SOUND ON"}</span></button>;
}
