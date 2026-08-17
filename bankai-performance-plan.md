# Bankai and performance plan

## Bankai state

Bankai is a page-wide release state, not a single animation. Trigger it with a clearly labeled `RELEASE BANKAI` control and the keyboard shortcut `B`. The entire UI transitions from the restrained archive palette into a charged midnight-indigo state with electric blue, violet, and white accents. The hero gains a stronger spectral filter, section borders become luminous, the chapter rail becomes an energized signal, cards gain blue/violet edge light, and the transmission halo expands. A full-screen release overlay briefly announces `BANKAI / ARCHIVE RELEASED` and then lets the site remain in the released theme.

The transition should be reversible through `SEAL BANKAI`, should not trap focus, and should respect reduced motion by switching instantly without intense effects. The existing soundboard receives a dedicated Bankai cue, but audio remains optional and muted by default.

## Performance work

The current visual assets are large JPEGs totaling roughly 19 MB. Generate WebP versions with sensible quality, update all image references, and remove the original JPEG payloads from the public directory. Replace the blocking Google Fonts import with local Geist and Geist Mono font faces already present in the repository. Preserve `font-display: swap`. Add image loading hints so the hero is eager and supporting seal/relic images are lazy.

Audit the production build, run lint/build, verify no runtime errors, inspect repository status, and commit/push only the intended source, optimized assets, and documentation changes.
