# Bleach-style font research

## FontBolt

FontBolt’s anime catalog lists a Bleach Font entry at https://www.fontbolt.com/font/bleach-font/. Its page states that the original Bleach logo font was custom made and that the recreation is credited to Danilo Belardinelli. FontBolt labels the font as free for personal use and links a direct TTF download through FontGet. The visual is a high-contrast italic display face with sharp wedge terminals and a strong manga-logo silhouette.

## CDNFonts

CDNFonts’ Bleach page is https://www.cdnfonts.com/bleach.font. It provides a hosted stylesheet at `https://fonts.cdnfonts.com/css/bleach` with `font-family: 'Bleach', sans-serif;`. The page attributes the family to Kong font and says it is free for personal use; the full version and commercial license are available from FontKong. CDNFonts also advises researching the license before use.

## Implementation decision

Because both references explicitly indicate personal-use-only licensing or a separate commercial license, do not bundle or ship either font as a production website asset without the user confirming a commercial license. Use a safe original/local typography treatment instead: local Geist for body/UI text, a sharp italic display fallback stack for large titles, tighter tracking, skew/transform accents, and orange/black Ichigo-inspired color treatment. If the user owns a commercial license, the hosted CDNFonts CSS can be enabled later behind a documented opt-in.

## Motion research direction

The portfolio’s smoothness work should avoid creating many independent per-frame animations. Prefer one requestAnimationFrame pointer loop, transform/opacity-only effects, stable `will-change` targets, scroll-linked transforms with passive listeners, short spring easing, and `prefers-reduced-motion` fallbacks. Avoid animating layout properties such as width, height, top, left, margin, and box-shadow on high-frequency paths.

## Sources

1. https://www.fontbolt.com/famous/anime/
2. https://www.fontbolt.com/font/bleach-font/
3. https://www.cdnfonts.com/bleach.font
4. https://fonts.cdnfonts.com/css/bleach
