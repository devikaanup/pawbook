# 🐾 PawBook — Cats Run the Internet

**PawBook** is a playful, intentionally unpredictable cat social-feed experience. It rejects conventional interface behavior in favor of **cat logic**: important controls move around, images demand attention, hover states cause unexpected reactions, and every interaction may produce a different kind of mischief.

> **Design Principle:** *The interface is usable, but never fully obedient. Users should understand what an action does while still feeling that the cats are in charge.*

---

## 📖 Experience Overview

The main page presents an afternoon **"post-nap scroll"** feed filled with cat posts, comments, reactions, profile controls, friends, litter-box settings, falling yarn, and flying butterflies. The visual language uses a warm scrapbook palette, hand-drawn typography, irregular borders, paper-like textures, and animated doodles.

The page is a static React frontend. Profile edits, comments, friend additions, and other interactions are intentionally demo-only and live in client-side state.

---

## 😼 Cat Logic: Random Buttons & Surprises

Floating cat-logic buttons are deliberately randomized on every page load. Their order changes, and their locations are scattered around the page instead of being placed in a conventional toolbar. Users must explore the interface to find them.

Clicking a random button does not simply perform a predictable utility action. Each button opens a prominent popup in the middle of the screen and releases a themed shower of doodles from the top of the page to the bottom:

| Random Control | Surprise Popup | Falling Doodles & Reaction |
| :--- | :--- | :--- |
| **FEED ME** | `THE CAT IS HUNGRY` | Cookies, pretzels, cupcakes, croissants, and doughnuts fall across the screen. The popup explains that the user has incurred snack debt. |
| **NAP NOW** | `NAP PROTOCOL ACTIVATED` | Sleep-related doodles such as `Z`, moons, clouds, and stars drift downward. The popup instructs the user to stop expecting productivity. |
| **HIDE EVIDENCE** | `EVIDENCE REMOVED` | Sparkles, diamonds, and scribble-like marks fall across the page. The popup claims that suspicious activity has been filed under *"the cat did it."* |
| **AGAIN?** | `Chaos Replay` | Replays the angry-cat chaos sequence with a full-screen interruption and synthesized meows. |

> **Note:** The popup can be dismissed by clicking its close button, clicking the acknowledgement button, or clicking outside the popup. The themed doodle shower continues briefly even if the popup is dismissed, because the cats do not respond immediately to human requests.

---

## 🎯 Unexpected Hover Reactions

Hovering is treated as an invitation for the cats to interfere:

- **Judging Controls:** Hovering over floating controls produces a toast indicating that the button is judging the user or has noticed their attention.
- **Wobbly Avatars:** Hovering over a post makes the post avatar wobble and can increase the feed's cat-activity feedback.
- **LOOK HERE Attention:** Hovering over a post image reveals a `LOOK HERE` attention label and triggers messages like *"LOOK AT ME"* or *"I am the main character now."*
- **Chaotic Bursts:** Hovering over or interacting with posts triggers a falling doodle burst containing paw prints, hearts, stars, and attention marks.
- **Ambient Demand:** The feed periodically makes one image pulse so that a cat can demand attention even when the user is not hovering over it.
- **Irregular Alignment:** Buttons use irregular rotations, drop shadows, and offset movements so that no control feels rigidly aligned.

---

## ⚡ Major Interactive Behaviors

### 🚫 "Do Not Touch" Trap
The red **DO NOT TOUCH !!** button is intentionally prominent. Clicking it opens a 5-second full-screen angry-cat overlay filling the viewport with angry cat doodles and warning labels such as `MROW!`, `HSSS!`, `MEE-OW!`, and `NO TOUCH!`.
- **Synthesized Audio:** Plays a synthesized, chaotic meow sequence for the 5-second duration generated natively in the browser via the **Web Audio API** (triggered only after direct user interaction).

### 📝 Feed and Posting
- The composer accepts short posts. The cats may walk across the keyboard and temporarily insert `mrow mrow` to the draft.
- The **Post** button dodges the pointer several times before eventually settling down.
- A successful post displays a celebratory result screen with obstruction statistics.
- Posts include working like, comment, share, and more-options controls. Comments are visible by default, include dummy comments, and accept new entries through the composer.

### 👥 Friends
- The Friends panel initially displays an empty state: *"No friends, :("*
- Selecting **Add a cat anyway** reveals a search field.
- Any searched name resolves to a dummy available cat. Selecting **Send friend request** displays *"congrats! you have a new friend"* and adds that exact name to the active list.

### 👤 Profile
- Contains dummy profile data and an edit flow.
- Users can change the display name, handle, bio, and avatar.
- Saving updates the profile preview and header avatar in client-side state.

### 📦 Litter Box Settings
Contains demo values for feline configuration:

| Setting | Demo Value |
| :--- | :--- |
| **Litter Freshness** | `87%` |
| **Zoomies Notifications** | `ON` |
| **Human Access Level** | `limited` |
| **Preferred Nap Window** | `14:00–17:00` |

*The "Save settings" action provides confirmation feedback without connecting to an external backend.*

### 🔔 Notifications
The notification and friend-request indicators are intentionally fixed at `0`. Post interactions do not increase this number, keeping the notification state calm even while the rest of the interface behaves chaotically.

---

## 🛠️ Technology Stack

- **Core**: React 19, TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: Wouter
- **Feedback**: Sonner-compatible toast primitives
- **Audio**: Native Web Audio API

---

## 📁 Project Structure

```
pawbook/
├── client/
│   ├── index.html
│   └── src/
│       ├── App.tsx
│       ├── index.css
│       ├── main.tsx
│       ├── pages/
│       │   └── Home.tsx
│       ├── components/
│       ├── contexts/
│       ├── hooks/
│       └── lib/
├── server/
└── shared/
```

> **Note:** The implementation is frontend-only. The `server/` and `shared/` directories are template compatibility scaffolding and are not used for application data or persistence.

---

## 🚀 Local Development

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Start Development Server
```bash
pnpm run dev
```

The development server will run on the Vite host URL displayed in your terminal.

---

## 🧪 Validation & Build

```bash
# Type check
pnpm run check

# Production build
pnpm run build
```

The production build generates optimized static browser assets in `dist/public` and bundles the template server entrypoint into `dist/index.js`.

---

## ♿ Accessibility & Interaction Notes

- **Keyboard Reachability:** All primary interactive controls remain keyboard-navigable, with distinct and visible focus rings.
- **Semantic Dialogs:** Popup and modal surfaces implement accessible dialog semantics.
- **Explicit Action Labels:** Because the site uses surprise interactions, action labels remain clear and descriptive so users understand control intent prior to interaction.
- **Reduced Motion:** Animated behaviors are decorative and can be minimized through standard reduced-motion preferences.

---

## 🔮 Future Improvements

- Global chaos-intensity slider setting
- Master mute toggle for synthesized Web Audio meows
- LocalStorage persistence for user profile edits and friend additions
- Automated browser end-to-end testing for popup and falling doodle sequences

---

## 📚 References

- React Documentation
- Vite Documentation
- Framer Motion Documentation
- Tailwind CSS Documentation

---

## 📄 License

This project is a demonstration frontend created for the PawBook experience.

*Built by cats, for cats. © 2026 PawBook, probably.*
