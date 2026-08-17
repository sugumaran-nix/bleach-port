# The Archive of a Living Blade

## Core premise
The portfolio is not presented as a resume. It is an interactive spiritual archive that visitors enter, scan, and unlock. The author is represented as a living blade: work, skills, and experience appear as evidence collected from different realms rather than as standard page sections.

## Primary interaction model
The page is a single continuous world with chapters revealed through scroll and cursor movement. A vertical archive rail shows the current realm and acts as navigation. Visitors can choose a realm, but the default experience is a cinematic sequence.

### 1. The Gate
The loader is an ink seal that cracks open. Instead of a percentage, it shows a short transmission: `ARCHIVE // SIGNAL FOUND`. The first click or scroll wakes the world. The hero is a dark void with a floating red spirit thread, a huge statement such as `I BUILD WORLDS THAT ANSWER BACK`, and a single command: `ENTER THE ARCHIVE`.

### 2. The Signal
A reactive field of particles and brush strokes follows the cursor. A rotating identity mark and small metadata reveal the author’s role, location, and current signal. This replaces a typical hero introduction.

### 3. The Memory Vault
Work is discovered as large floating memory shards, not project cards. Each shard has a title, a visual fragment, a problem solved, and a signal strength. Hovering bends the shard with displacement, reveals a short transmission, and draws an ink line toward the next shard. Clicking opens a full-screen case-file overlay.

### 4. The Ranks
Experience is represented as a vertical spiritual-rank timeline. Each rank is an authored moment: what changed, what was built, and what capability was gained. The timeline should feel like a measuring instrument, not a resume list.

### 5. The Arsenal
Skills become techniques grouped by intent: `Release`, `Control`, `Perception`, and `Construction`. Each technique is an interactive seal. Hovering causes a pulse, a short description appears, and related work shards illuminate. This creates a connected knowledge map instead of a skill grid.

### 6. The Unfinished Transmission
The contact experience is an open channel rather than a contact section. A large statement invites the visitor to send a transmission. The form is minimal and styled like a message entering the archive. Include copy such as `If the idea has pressure, send it.`

### 7. The Afterimage
The footer is a quiet final state with a looping afterimage of the red spirit thread, the author mark, social links, and a small `return to gate` control.

## Visual system
Use black void, bone white, muted ash, reiatsu crimson, and restrained spirit gold. Typography should contrast a condensed technical face, a high-contrast serif/display face, and small mono metadata. Use thick editorial type, asymmetrical margins, oversized numbers, thin measurement lines, paper grain, and occasional calligraphic brush strokes.

## Motion system
Use a cinematic entrance, masked text reveals, cursor-reactive spirit particles, scroll-linked chapter progress, slow parallax on atmospheric layers, hover displacement on memory shards, SVG brush-stroke drawing, and directional transitions for overlays. Motion must have hierarchy: atmosphere is slow, content is sharp, and interaction feedback is immediate. Respect `prefers-reduced-motion`.

## Implementation constraints
Reuse the existing Next.js App Router and current animation dependencies where possible. Prefer Framer Motion for component transitions, GSAP/Lenis for scroll orchestration, and CSS/SVG for lightweight atmospheric effects. Avoid adding a second animation library unless necessary. Build the experience responsively, with touch-friendly alternatives for hover interactions and a reduced-motion mode.
