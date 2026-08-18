"use client";

import { useEffect } from "react";

export default function FontLoader() {
  useEffect(() => {
    const href = "https://fonts.cdnfonts.com/css/bleach";
    if (document.querySelector(`link[href="${href}"]`)) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    link.media = "print";
    link.onload = () => { link.media = "all"; };
    document.head.appendChild(link);
    return () => link.remove();
  }, []);

  return null;
}
