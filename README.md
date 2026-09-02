# PawBook — Cats Run the Internet

PawBook is a playful, intentionally unpredictable cat social-feed experience. It rejects conventional interface behavior in favor of **cat logic**: important controls move around, images demand attention, hover states cause unexpected reactions, and every interaction may produce a different kind of mischief.

> **Design principle:** The interface is usable, but never fully obedient. Users should understand what an action does while still feeling that the cats are in charge.

## Experience Overview

The main page presents an afternoon “post-nap scroll” feed filled with cat posts, comments, reactions, profile controls, friends, litter-box settings, falling yarn, and flying butterflies. The visual language uses a warm scrapbook palette, hand-drawn typography, irregular borders, paper-like textures, and animated doodles.

The page is a static React frontend. Profile edits, comments, friend additions, and other interactions are intentionally demo-only and live in client-side state.

## Cat Logic: Random Buttons and Different Surprises

The floating cat-logic buttons are deliberately randomized on every page load. Their order changes, and their locations are scattered around the page instead of being placed in a conventional toolbar. Users must explore the interface to find them.

Clicking a random button does not simply perform a predictable utility action. Each button opens a prominent popup in the middle of the screen and releases a themed shower of doodles from the top of the page to the bottom.

| Random control | Surprise popup | Falling doodles and reaction |
| --- | --- | --- |
| **FEED ME** | **THE CAT IS HUNGRY** | Cookies, pretzels, cupcakes, croissants, and doughnuts fall across the screen. The popup explains that the user has incurred snack debt. |
| **NAP NOW** | **NAP PROTOCOL ACTIVATED** | Sleep-related doodles such as `Z`, moons, clouds, and stars drift downward. The popup instructs the user to stop expecting productivity. |
| **HIDE EVIDENCE** | **EVIDENCE REMOVED** | Sparkles, diamonds, and scribble-like marks fall across the page. The popup claims that suspicious activity has been filed under “the cat did it.” |
| **AGAIN?** | **Chaos replay** | Replays the angry-cat chaos sequence with a full-screen interruption and synthesized meows. |

The popup can be dismissed by clicking its close button, clicking the acknowledgement button, or clicking outside the popup. The themed doodle shower continues briefly even if the popup is dismissed, because the cats do not respond immediately to human requests.

## Unexpected Hover Reactions

Hovering is treated as an invitation for the cats to interfere.

- Hovering over the floating controls produces a toast. The message may say that the button is judging the user or has noticed their attention.
- Hovering over a post makes the post avatar wobble and can increase the feed’s cat-activity feedback.
- Hovering over a post image reveals a **LOOK HERE** attention label and produces a message such as “LOOK AT ME” or “I am the main character now.”
- Hovering over or interacting with posts triggers a chaotic falling doodle burst containing paw prints, hearts, stars, and other attention marks.
- The feed periodically makes one image pulse so that a cat can demand attention even when the user is not hovering over it.
- Buttons use irregular rotations, shadows, and movement so that no control feels perfectly aligned.

## Major Interactive Behaviors

### Do Not Touch

The red **DO NOT TOUCH !!** button is intentionally prominent. Clicking it opens a five-second full-screen angry-cat overlay. The overlay fills the viewport with angry cat doodles and warning labels such as `MROW!`, `HSSS!`, `MEE-OW!`, and `NO TOUCH!`.

The sequence also plays a synthesized, chaotic meow bed for the entire five-second duration. The audio is generated in the browser with the Web Audio API and is only started after the user clicks the control.

### Feed and Posting

The composer accepts a short post. The cats may walk across the keyboard and temporarily add `mrow mrow` to the draft. The Post button can dodge the pointer several times before eventually settling down. A successful post displays a celebratory result screen with obstruction statistics.

Each post includes working like, comment, share, and more-options controls. Comments are visible by default, include dummy comments, and accept new user comments through the comment composer.

### Friends

The Friends panel initially shows an empty state with the message **“No friends, :(”**. Selecting **Add a cat anyway** reveals a search field.

Any searched name resolves to a dummy available cat. Selecting **Send friend request** displays **“congrats! you have a new friend”** and adds that exact name to the Friends list in the panel.

### Profile

The Profile panel contains dummy profile data and an edit flow. Users can change the display name, handle, bio, and avatar. Saving the form updates the profile preview and the header avatar in client-side state.

### Litter Box Settings

The Litter Box Settings panel contains demo values for:

| Setting | Demo value |
| --- | --- |
| Litter freshness | 87% |
| Zoomies notifications | ON |
| Human access level | limited |
| Preferred nap window | 14:00–17:00 |

The Save settings action provides confirmation feedback without connecting to a backend.

### Notifications

The notification and friend-request indicators are intentionally set to **0**. Post interactions do not increase the number. This keeps the notification state calm even when the rest of the interface behaves chaotically.

## Technology

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Framer Motion
- Lucide React icons
- Wouter
- Sonner-compatible toast primitives from the project template

## Project Structure

```text
client/
  index.html
  src/
    App.tsx
    index.css
    main.tsx
    pages/
      Home.tsx
    components/
    contexts/
    hooks/
    lib/
server/
shared/
```

The implementation is frontend-only. The `server/` and `shared/` directories are template compatibility directories and are not used for application data or persistence.

## Local Development

From the project directory:

```bash
pnpm install
pnpm dev
```

The development server runs on the Vite host URL shown in the terminal.

## Validation

Run the TypeScript check and production build with:

```bash
pnpm check
pnpm build
```

The production build generates the browser assets in `dist/public` and bundles the template server entrypoint into `dist/index.js`.

## Accessibility and Interaction Notes

All important controls remain keyboard reachable, and visible focus styles are preserved. The popup and modal surfaces expose dialog semantics. Animated behavior is decorative and should be reduced or disabled through a future reduced-motion preference if the experience is expanded for production use.

Because the site intentionally uses surprise interactions, action labels remain explicit. A user can identify the purpose of a button before clicking it, even when the result is deliberately theatrical.

## Future Improvements

The next practical improvements would be a global chaos-intensity setting, a mute control for generated meows, local-storage persistence for profile and friend changes, and automated browser tests for the popup and doodle sequences.

## References

[1]: https://react.dev/ "React documentation"
[2]: https://vite.dev/ "Vite documentation"
[3]: https://motion.dev/ "Motion documentation"
[4]: https://tailwindcss.com/ "Tailwind CSS documentation"

PawBook’s implementation uses the technologies documented in [1] [2] [3] [4].

## License

This project is a demonstration frontend created for the PawBook experience.

**Built by cats, for cats.**
