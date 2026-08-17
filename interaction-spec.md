# Interaction and sound system

## Anime.js effects

1. Use Anime.js `onScroll` with the existing Lenis scroll loop for subtle section-linked motion: chapter labels drift in, section metadata slides into place, and the transmission halo breathes faster near the bottom of the page.
2. Add pointer-linked spirit pressure: the hero red thread and atmospheric glow follow the cursor with damped spring-like motion, while the archive mark rotates a few degrees based on pointer position.
3. Add SVG / CSS variable animation for the archive gate: the seal ring rotates, the signal line pulses, and the entry action receives a short directional sweep on hover.
4. Add pointer enter/leave micro-interactions to relic rows: a red signal bar draws across the active row and the preview image receives a small displacement/scale shift.
5. Add a scanline / chapter pulse when a chapter navigation item is clicked, without disrupting native anchor navigation.

## Sound triggers

Create a small Web Audio API sound layer rather than autoplaying files. The audio context starts only after the visitor explicitly enters the archive. Use generated oscillator/noise envelopes with a restrained analog-digital character:

- archive entry: low soft pulse plus short high harmonic
- relic hover: quiet filtered tick, rate-limited
- relic selection: two-note ascending signal
- menu open: short airy sweep
- transmission CTA: warm low confirmation pulse
- mute toggle: no sound, only visual state change

The sound design must never autoplay before consent, never block navigation, never exceed a comfortable low volume, and include a visible mute button. Store mute preference in localStorage. Respect `prefers-reduced-motion`; if enabled, disable the most intense motion while keeping interaction feedback and controls usable.

## Control design

Add a fixed `SOUND ON / SOUND OFF` control near the lower corner. Include `aria-pressed`, a keyboard-accessible button, and an accessible label explaining that sound is optional. The system should fail silently if Web Audio is unavailable.
