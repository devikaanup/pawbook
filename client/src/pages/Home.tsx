import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bell,
  Camera,
  Cat,
  Check,
  CircleDot,
  ChevronRight,
  Heart,
  ImagePlus,
  Instagram,
  MessageCircle,
  MoreHorizontal,
  PawPrint,
  Plus,
  Save,
  Send,
  Settings2,
  Sparkles,
  Users,
  Volume2,
  WandSparkles,
  X,
} from "lucide-react";

const ASSETS = {
  mochi: "/manus-storage/pawbook-avatar-mochi_c24e1bfa.png",
  biscuit: "/manus-storage/pawbook-avatar-biscuit_7449b7e3.png",
  nori: "/manus-storage/pawbook-avatar-nori_f1106abe.png",
  pepper: "/manus-storage/pawbook-avatar-pepper_ed60742c.png",
  success: "/manus-storage/pawbook-success-cat_7d08bbb6.png",
};

const palette = ["#f8f1c7", "#dedcff", "#FFD6E8", "#aea5f3", "#a7dff0"];

const navItems = [
  { label: "Feed", icon: PawPrint },
  { label: "Friends", icon: Users },
  { label: "Profile", icon: Cat },
  { label: "Litter Box Settings", icon: Settings2 },
];

const posts = [
  {
    id: 1,
    cat: "Mochi",
    handle: "@mochi.makes",
    time: "12 min",
    avatar: ASSETS.mochi,
    image: ASSETS.mochi,
    caption: "just repainted the walls",
    subcaption: "the human called it a ‘mess’. jealous, probably.",
    likes: 128,
    comments: 14,
    tag: "#interior",
    tone: "pink",
  },
  {
    id: 2,
    cat: "Biscuit",
    handle: "@biscuit.exe",
    time: "28 min",
    avatar: ASSETS.biscuit,
    image: ASSETS.biscuit,
    caption: "knocked something off the shelf. no regrets.",
    subcaption: "gravity remains my greatest creative collaborator.",
    likes: 92,
    comments: 8,
    tag: "#statement",
    tone: "blue",
  },
  {
    id: 3,
    cat: "Nori",
    handle: "@nori.noir",
    time: "1 hr",
    avatar: ASSETS.nori,
    image: ASSETS.nori,
    caption: "6 hour nap, personal best",
    subcaption: "do not congratulate me. I am conserving energy.",
    likes: 241,
    comments: 31,
    tag: "#wellness",
    tone: "lilac",
  },
  {
    id: 4,
    cat: "Pepper",
    handle: "@pepperundercover",
    time: "2 hr",
    avatar: ASSETS.pepper,
    image: ASSETS.pepper,
    caption: "why does the human keep taking pictures of me eating",
    subcaption: "it is called dinner. please act normal.",
    likes: 176,
    comments: 19,
    tag: "#paparazzi",
    tone: "cream",
  },
  {
    id: 5,
    cat: "Lady Whiskers",
    handle: "@ladywhiskers",
    time: "3 hr",
    avatar: ASSETS.mochi,
    image: ASSETS.nori,
    caption: "found a sunbeam. keeping it.",
    subcaption: "applications to sit here are closed indefinitely.",
    likes: 314,
    comments: 44,
    tag: "#realestate",
    tone: "blue",
  },
  {
    id: 6,
    cat: "Sir Biscuit",
    handle: "@sir.biscuit",
    time: "5 hr",
    avatar: ASSETS.biscuit,
    image: ASSETS.pepper,
    caption: "the blanket fort has a strict guest list",
    subcaption: "you are not on it. this is not personal.",
    likes: 87,
    comments: 6,
    tag: "#boundaries",
    tone: "pink",
  },
];

function shuffle<T>(items: T[]) {
  return [...items].sort(() => Math.random() - 0.5);
}

function formatNumber(number: number) {
  return new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }).format(number);
}

function BackgroundDoodles() {
  const doodles = useMemo(() => Array.from({ length: 25 }, (_, index) => ({
    id: index,
    left: `${4 + ((index * 37) % 92)}%`,
    top: `${7 + ((index * 29) % 88)}%`,
    rotate: `${-25 + ((index * 31) % 55)}deg`,
    size: 13 + ((index * 7) % 13),
    kind: index % 4,
  })), []);

  return <div className="background-doodles" aria-hidden="true">{doodles.map((doodle) => {
    const Icon = doodle.kind === 0 ? PawPrint : doodle.kind === 1 ? Cat : doodle.kind === 2 ? Sparkles : WandSparkles;
    return <span key={doodle.id} style={{ left: doodle.left, top: doodle.top, transform: `rotate(${doodle.rotate})`, opacity: 0.18 + (doodle.id % 3) * 0.06 }}><Icon size={doodle.size} /></span>;
  })}</div>;
}

function AmbientDoodles() {
  const yarns = useMemo(() => Array.from({ length: 9 }, (_, index) => ({ id: index, left: `${7 + index * 11}%`, delay: index * 0.7, duration: 7 + (index % 4), rotate: -25 + index * 17 })), []);
  const butterflies = useMemo(() => Array.from({ length: 5 }, (_, index) => ({ id: index, top: `${15 + index * 16}%`, delay: index * 1.2, duration: 10 + index })), []);
  return <div className="ambient-doodles" aria-hidden="true">
    {yarns.map((yarn) => <motion.span key={`yarn-${yarn.id}`} className="falling-yarn" initial={{ y: -90, rotate: yarn.rotate, opacity: 0 }} animate={{ y: ["-10vh", "120vh"], rotate: [yarn.rotate, yarn.rotate + 260], opacity: [0, .75, .75, 0] }} transition={{ duration: yarn.duration, delay: yarn.delay, repeat: Infinity, ease: "linear" }} style={{ left: yarn.left }}><CircleDot size={24} strokeWidth={2.4} /></motion.span>)}
    {butterflies.map((butterfly) => <motion.span key={`butterfly-${butterfly.id}`} className="flying-butterfly" initial={{ x: "-12vw", y: 0, rotate: -8 }} animate={{ x: ["-12vw", "112vw"], y: [0, -22, 14, -8, 0], rotate: [-8, 10, -5, 8, -8] }} transition={{ duration: butterfly.duration, delay: butterfly.delay, repeat: Infinity, ease: [0.34, 1.56, 0.64, 1] }} style={{ top: butterfly.top }}><span>ʚ</span><span>ɞ</span><small>✦</small></motion.span>)}
  </div>;
}

type PopupKind = "hungry" | "nap" | "evidence" | "attention";

function CatLogicPopup({ popup, onClose }: { popup: { title: string; copy: string; kind: PopupKind } | null; onClose: () => void }) {
  const doodleMap: Record<PopupKind, string[]> = {
    hungry: ["🍪", "🥨", "🍪", "🧁", "🍪", "🥐", "🍪", "🍩"],
    nap: ["Z", "☾", "Z", "✦", "z", "☁", "Z", "✦"],
    evidence: ["✦", "⌁", "✦", "♢", "⌁", "✦", "♢", "⌁"],
    attention: ["✦", "♡", "✦", "🐾", "♡", "✦", "🐾", "✦"],
  };
  return <AnimatePresence>{popup && <motion.div className={`cat-popup-backdrop ${popup.kind}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
    <div className="cat-popup-rain" aria-hidden="true">{[...doodleMap[popup.kind], ...doodleMap[popup.kind]].map((doodle, index) => <motion.span key={`${doodle}-${index}`} initial={{ y: "-15vh", opacity: 0, rotate: -20 }} animate={{ y: "115vh", opacity: [0, 1, 1, 0], rotate: 20 + index * 31 }} transition={{ duration: 2.8 + (index % 4) * .35, delay: (index % 8) * .09, ease: "linear" }} style={{ left: `${4 + (index * 17) % 94}%` }}>{doodle}</motion.span>)}</div>
    <motion.section className="cat-popup-card" initial={{ opacity: 0, scale: .82, y: 18, rotate: -3 }} animate={{ opacity: 1, scale: 1, y: 0, rotate: 1 }} exit={{ opacity: 0, scale: .9, y: 10 }} transition={{ type: "spring", stiffness: 280, damping: 20 }} role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
      <button className="cat-popup-close" onClick={onClose} aria-label="Close cat logic popup"><X size={18} /></button>
      <div className="cat-popup-icon"><PawPrint size={27} fill="currentColor" /></div>
      <span className="panel-kicker">CAT LOGIC HAS SPOKEN</span>
      <h2>{popup.title}</h2>
      <p>{popup.copy}</p>
      <button className="primary-button" onClick={onClose}>I understand (probably)</button>
    </motion.section>
  </motion.div>}</AnimatePresence>;
}

function DoodleBurst({ kind, active }: { kind: PopupKind | null; active: boolean }) {
  const doodles = kind === "hungry" ? ["🍪", "🥨", "🍩", "🧁"] : kind === "nap" ? ["Z", "☾", "☁", "✦"] : ["✦", "🐾", "♡", "⌁"];
  return <AnimatePresence>{active && <div className="doodle-burst" aria-hidden="true">{Array.from({ length: 18 }, (_, index) => <motion.span key={index} initial={{ y: -40, opacity: 0, rotate: -15 }} animate={{ y: "105vh", opacity: [0, 1, 1, 0], rotate: 180 + index * 22 }} transition={{ duration: 1.6 + (index % 4) * .18, delay: (index % 6) * .04, ease: "linear" }} style={{ left: `${3 + (index * 29) % 94}%` }}>{doodles[index % doodles.length]}</motion.span>)}</div>}</AnimatePresence>;
}

function CatLogicLayer({ onNotice, onPopup, onChaos }: { onNotice: (message: string) => void; onPopup: (popup: { title: string; copy: string; kind: PopupKind }) => void; onChaos: () => void }) {
  const controls = useMemo(() => shuffle([
    { label: "FEED ME", message: "The cats have moved the food bowl. Check under the feed." },
    { label: "NAP NOW", message: "Excellent decision. The internet can wait." },
    { label: "HIDE EVIDENCE", message: "Evidence hidden behind the suspiciously warm laptop." },
  ]), []);
  const positions = [
    { top: "27%", left: "4%", rotate: "-7deg" },
    { top: "52%", right: "2%", rotate: "5deg" },
    { top: "78%", left: "45%", rotate: "-3deg" },
  ];
  return <div className="cat-logic-layer" aria-label="Cat logic controls">
    {controls.map((control, index) => <button key={control.label} className="cat-logic-button" style={positions[index]} onClick={() => onPopup(index === 0 ? { title: "THE CAT IS HUNGRY", copy: "Your attention has been converted into snack debt. Cookies are falling until further notice.", kind: "hungry" } : index === 1 ? { title: "NAP PROTOCOL ACTIVATED", copy: "Please lower your voice and stop expecting productivity from this household.", kind: "nap" } : { title: "EVIDENCE REMOVED", copy: "The suspicious activity has been filed under ‘the cat did it’.", kind: "evidence" })} onMouseEnter={() => onNotice(index === 0 ? "You found the food button. It is judging you." : "The button has noticed your attention.")}><PawPrint size={14} fill="currentColor" /> {control.label}</button>)}
    <button className="cat-logic-button chaos-mini" style={{ top: "91%", right: "7%", rotate: "-4deg" }} onClick={onChaos}><Cat size={14} /> AGAIN?</button>
  </div>;
}

function PawConfetti({ active }: { active: boolean }) {
  const bits = useMemo(() => Array.from({ length: 20 }, (_, index) => ({
    id: index,
    left: `${8 + ((index * 37) % 84)}%`,
    delay: `${(index % 7) * 55}ms`,
    rotate: `${-30 + ((index * 23) % 70)}deg`,
    color: palette[index % palette.length],
  })), []);

  return (
    <AnimatePresence>
      {active && (
        <div className="confetti-layer" aria-hidden="true">
          {bits.map((bit) => (
            <motion.span
              key={bit.id}
              className="confetti-paw"
              initial={{ opacity: 0, y: -20, scale: 0.7, rotate: 0 }}
              animate={{ opacity: [0, 1, 1, 0], y: [0, 80, 210, 330], scale: [0.7, 1, 1.05, 0.82], rotate: [0, 55, 125, 180] }}
              transition={{ duration: 1.25, delay: parseInt(bit.delay, 10) / 1000, ease: [0.34, 1.56, 0.64, 1] }}
              style={{ left: bit.left, color: bit.color, transform: `rotate(${bit.rotate})` }}
            >
              <PawPrint size={18} strokeWidth={2.4} />
            </motion.span>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}

function AngryCatChaos({ active }: { active: boolean }) {
  const cats = useMemo(() => Array.from({ length: 26 }, (_, index) => ({
    id: index,
    left: `${4 + ((index * 41) % 91)}%`,
    top: `${5 + ((index * 23) % 86)}%`,
    rotate: -22 + ((index * 37) % 45),
    scale: 0.8 + (index % 4) * 0.12,
    meow: ["MROW!", "HSSS!", "MEE-OW!", "NO TOUCH!"][index % 4],
  })), []);

  return <AnimatePresence>{active && <motion.div className="angry-chaos" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }} aria-live="assertive">
    <div className="chaos-banner"><Volume2 size={23} fill="currentColor" /> YOU HAVE AWAKENED THE CATS <Volume2 size={23} fill="currentColor" /></div>
    {cats.map((cat) => <motion.div key={cat.id} className="angry-cat-doodle" initial={{ opacity: 0, scale: 0.45, rotate: cat.rotate - 20 }} animate={{ opacity: [0, 1, 1, 0.82], scale: [0.45, cat.scale, cat.scale, 0.8], rotate: [cat.rotate - 20, cat.rotate, cat.rotate + 8, cat.rotate - 5] }} transition={{ duration: 2.1, delay: (cat.id % 5) * 0.08, repeat: 2, ease: [0.34, 1.56, 0.64, 1] }} style={{ left: cat.left, top: cat.top }}><Cat size={42} strokeWidth={2.8} /><strong>{cat.meow}</strong></motion.div>)}
  </motion.div>}</AnimatePresence>;
}

function ReactionBubble({ text }: { text: string | null }) {
  return (
    <AnimatePresence>
      {text && (
        <motion.div
          className="reaction-bubble"
          initial={{ opacity: 0, y: 8, scale: 0.85, rotate: -4 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotate: 2 }}
          exit={{ opacity: 0, y: -8, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 320, damping: 17 }}
        >
          <PawPrint size={15} fill="currentColor" /> {text}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function PostCard({
  post,
  pulsing,
  onFeedInteraction,
  onNotice,
  onPet,
}: {
  post: (typeof posts)[number];
  pulsing: boolean;
  onFeedInteraction: () => void;
  onNotice: (message: string) => void;
  onPet?: () => void;
}) {
  const [liked, setLiked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [commentList, setCommentList] = useState(["the paw print composition is honestly perfect.", "would like to see the behind-the-scenes nap."]);
  const [commentDraft, setCommentDraft] = useState("");
  const [commentsOpen, setCommentsOpen] = useState(true);
  const isPet = Boolean(onPet);

  const submitComment = (event: React.FormEvent) => {
    event.preventDefault();
    const clean = commentDraft.trim();
    if (!clean) return;
    setCommentList((current) => [...current, clean]);
    setCommentDraft("");
  };

  return (
    <motion.article
      className={`post-card ${post.tone} ${pulsing ? "ambient-pulse" : ""}`}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 22, delay: post.id * 0.045 }}
      onMouseEnter={() => {
        setHovered(true);
        onFeedInteraction();
      }}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="post-topline">
        <div className="post-author">
          <motion.div
            className={`avatar-frame ${hovered ? "avatar-wobble" : ""}`}
            animate={hovered ? { rotate: [0, -5, 5, 0] } : { rotate: 0 }}
            transition={{ duration: 0.42, type: "tween", ease: [0.34, 1.56, 0.64, 1] }}
          >
            <img src={post.avatar} alt={`${post.cat} avatar`} />
          </motion.div>
          <div>
            <div className="author-name">{post.cat} <span className="verified-dot"><Check size={10} strokeWidth={3} /></span></div>
            <div className="author-meta">{post.handle} · {post.time}</div>
          </div>
        </div>
        <button className="icon-button" aria-label="More post options" onClick={() => onNotice("More post options are being inspected by a cat.")}><MoreHorizontal size={19} /></button>
      </div>

      <div className="post-body">
        <div className="caption-row">
          <div>
            <p className="post-caption">{post.caption}</p>
            <p className="post-subcaption">{post.subcaption}</p>
          </div>
          <span className="post-tag">{post.tag}</span>
        </div>
        <div className="post-image-wrap" onMouseEnter={() => onNotice(["LOOK AT ME.", "I am the main character now.", "The cat demands one compliment."][post.id % 3])}>
          <img className="post-image" src={post.image} alt={`Illustration from ${post.cat}`} />
          <span className="image-demand" aria-hidden="true"><Sparkles size={14} /> LOOK HERE <Sparkles size={14} /></span>
          {pulsing && <motion.span className="image-attention" initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: [0, 1, 0], scale: [0.7, 1.12, 1.35] }} transition={{ duration: 1.1, repeat: 1 }}><Sparkles size={20} fill="currentColor" /></motion.span>}
          {isPet && (
            <button className="pet-button" onClick={onPet}>
              <PawPrint size={15} fill="currentColor" /> DO NOT PET
            </button>
          )}
        </div>
      </div>

      <div className="post-actions">
        <button
          className={`post-action ${liked ? "liked" : ""}`}
          onClick={() => {
            setLiked(!liked);
            onFeedInteraction();
          }}
        >
          <Heart size={17} fill={liked ? "currentColor" : "none"} /> {formatNumber(post.likes + (liked ? 1 : 0))}
        </button>
        <button className="post-action" onClick={() => { setCommentsOpen((open) => !open); onFeedInteraction(); }}><MessageCircle size={17} /> {post.comments + commentList.length}</button>
        <button className="post-action post-share" onClick={() => { onFeedInteraction(); onNotice("Post copied to the catnip clipboard."); }}><Send size={16} /></button>
      </div>
      <AnimatePresence initial={false}>
        {commentsOpen && <motion.div className="comments-drawer" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ type: "spring", stiffness: 280, damping: 24 }}>
          <div className="comment-list">{commentList.map((comment, index) => <div className="comment-line" key={`${comment}-${index}`}><span className="comment-avatar"><PawPrint size={12} fill="currentColor" /></span><span><strong>{index % 2 === 0 ? "Mochi" : "Biscuit"}</strong> {comment}</span></div>)}</div>
          <form className="comment-form" onSubmit={submitComment}><input value={commentDraft} onChange={(event) => setCommentDraft(event.target.value)} placeholder="Add a comment cats will pretend to read..." aria-label="Add a comment" /><button type="submit" aria-label="Send comment"><Send size={14} /></button></form>
        </motion.div>}
      </AnimatePresence>
    </motion.article>
  );
}

export default function Home() {
  const [navOrder] = useState(() => shuffle(navItems));
  const [profile, setProfile] = useState({ name: "Whiskers", handle: "@whiskers.afterdark", bio: "professional sunbeam hunter · snack quality control", avatar: ASSETS.pepper });
  const [profileDraft, setProfileDraft] = useState(profile);
  const [activePanel, setActivePanel] = useState<"profile" | "friends" | "settings" | null>(null);
  const [friendSearch, setFriendSearch] = useState("");
  const [friendsList, setFriendsList] = useState<string[]>([]);
  const [friendSearchOpen, setFriendSearchOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const cleanDraft = useRef("");
  const [attached, setAttached] = useState(false);
  const [dodgeCount, setDodgeCount] = useState(0);
  const [obstructionCount, setObstructionCount] = useState(0);
  const [badgeCount, setBadgeCount] = useState(0);
  const [reaction, setReaction] = useState<string | null>(null);
  const [glitching, setGlitching] = useState(false);
  const [typingGlitches, setTypingGlitches] = useState(0);
  const [pulsePost, setPulsePost] = useState(2);
  const [petConfetti, setPetConfetti] = useState(false);
  const [shake, setShake] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [posted, setPosted] = useState(false);
  const [chaosActive, setChaosActive] = useState(false);
  const [catPopup, setCatPopup] = useState<{ title: string; copy: string; kind: PopupKind } | null>(null);
  const [doodleBurstKind, setDoodleBurstKind] = useState<PopupKind | null>(null);
  const [postOffset, setPostOffset] = useState({ x: 18, y: -10 });
  const glitchTimer = useRef<number | null>(null);
  const glitchEndTimer = useRef<number | null>(null);
  const toastTimer = useRef<number | null>(null);
  const chaosTimer = useRef<number | null>(null);
  const doodleBurstTimer = useRef<number | null>(null);

  const bumpBadge = () => setBadgeCount(0);

  const triggerDoodleBurst = (kind: PopupKind) => {
    setDoodleBurstKind(kind);
    if (doodleBurstTimer.current) window.clearTimeout(doodleBurstTimer.current);
    doodleBurstTimer.current = window.setTimeout(() => setDoodleBurstKind(null), 1900);
  };

  const showToast = (message: string) => {
    setToast(message);
    if (toastTimer.current) window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 2800);
  };

  const playMeowChaos = () => {
    const AudioContextClass = window.AudioContext || (window as Window & typeof globalThis & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const audioContext = new AudioContextClass();
    const now = audioContext.currentTime;
    for (let index = 0; index < 48; index += 1) {
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      const start = now + index * 0.105;
      oscillator.type = index % 2 === 0 ? "sawtooth" : "triangle";
      oscillator.frequency.setValueAtTime(150 + (index % 5) * 65, start);
      oscillator.frequency.exponentialRampToValueAtTime(480 + (index % 4) * 90, start + 0.17);
      oscillator.frequency.exponentialRampToValueAtTime(190 + (index % 3) * 45, start + 0.55);
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(0.13, start + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.62);
      oscillator.connect(gain).connect(audioContext.destination);
      oscillator.start(start);
      oscillator.stop(start + 0.68);
    }
    window.setTimeout(() => audioContext.close(), 5200);
  };

  const triggerChaos = () => {
    setChaosActive(true);
    playMeowChaos();
    if (chaosTimer.current) window.clearTimeout(chaosTimer.current);
    chaosTimer.current = window.setTimeout(() => setChaosActive(false), 5000);
  };

  const handleNav = (label: string) => {
    if (label === "Friends") { setFriendSearchOpen(false); setActivePanel("friends"); }
    else if (label === "Profile") {
      setProfileDraft(profile);
      setActivePanel("profile");
    } else if (label === "Litter Box Settings") setActivePanel("settings");
    else document.querySelector(".composer-card")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  useEffect(() => {
    const schedulePulse = () => {
      const wait = 15000 + Math.random() * 10000;
      return window.setTimeout(() => {
        setPulsePost(Math.floor(Math.random() * posts.length));
        schedulePulse();
      }, wait);
    };
    const timer = schedulePulse();
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    return () => {
      if (glitchTimer.current) window.clearTimeout(glitchTimer.current);
      if (glitchEndTimer.current) window.clearTimeout(glitchEndTimer.current);
      if (toastTimer.current) window.clearTimeout(toastTimer.current);
      if (chaosTimer.current) window.clearTimeout(chaosTimer.current);
      if (doodleBurstTimer.current) window.clearTimeout(doodleBurstTimer.current);
    };
  }, []);

  useEffect(() => {
    if (!draft || posted || typingGlitches >= 3 || glitching) {
      if (glitchTimer.current) window.clearTimeout(glitchTimer.current);
      return;
    }
    if (glitchTimer.current) window.clearTimeout(glitchTimer.current);
    glitchTimer.current = window.setTimeout(() => {
      const clean = cleanDraft.current;
      setTypingGlitches((count) => count + 1);
      setObstructionCount((count) => count + 1);
      setGlitching(true);
      setDraft(`${clean} mrow mrow`);
      showToast("A cat walked across the keyboard.");
      if (glitchEndTimer.current) window.clearTimeout(glitchEndTimer.current);
      glitchEndTimer.current = window.setTimeout(() => {
        setDraft(clean);
        setGlitching(false);
      }, 520);
    }, 4300 + Math.random() * 3700);
    return () => {
      if (glitchTimer.current) window.clearTimeout(glitchTimer.current);
    };
  }, [draft, posted, typingGlitches, glitching]);

  const handleDraftChange = (value: string) => {
    setDraft(value);
    if (!glitching) cleanDraft.current = value;
  };

  const handleDodge = () => {
    if (dodgeCount >= 3 || posted) return;
    const next = dodgeCount + 1;
    setDodgeCount(next);
    setObstructionCount((count) => count + 1);
    setPostOffset({ x: -18 + Math.round(Math.random() * 36), y: -12 + Math.round(Math.random() * 24) });
    setReaction(next === 1 ? "no." : next === 2 ? "don't." : "fine... post it.");
    window.setTimeout(() => setReaction(null), 1350);
  };

  const handlePost = (event: React.FormEvent) => {
    event.preventDefault();
    if (glitching) {
      if (glitchEndTimer.current) window.clearTimeout(glitchEndTimer.current);
      setDraft(cleanDraft.current);
      setGlitching(false);
    }
    const clean = cleanDraft.current.trim() || draft.trim();
    if (!clean) {
      showToast("The cats require at least one tiny thought.");
      return;
    }
    setDraft(clean);
    setPosted(true);
  };

  const handlePet = () => {
    setObstructionCount((count) => count + 1);
    setPetConfetti(true);
    setShake(true);
    showToast("you have been scratched. this was foreseeable.");
    window.setTimeout(() => setShake(false), 420);
    window.setTimeout(() => setPetConfetti(false), 1450);
  };

  const resetAttempt = () => {
    setDraft("");
    cleanDraft.current = "";
    setAttached(false);
    setDodgeCount(0);
    setObstructionCount(0);
    setBadgeCount(0);
    setReaction(null);
    setGlitching(false);
    setTypingGlitches(0);
    setPosted(false);
    setPostOffset({ x: Math.round(-24 + Math.random() * 48), y: Math.round(-14 + Math.random() * 28) });
  };

  if (posted) {
    return (
      <div className="app-shell success-shell">
        <header className="site-header">
          <div className="header-inner">
            <div className="brand-lockup"><div className="brand-mark"><PawPrint size={20} fill="currentColor" /></div><div><div className="brand-name">PawBook</div><div className="brand-sub">cats run the internet</div></div></div>
            <div className="header-note"><span className="tiny-paw"><PawPrint size={13} fill="currentColor" /></span> your post escaped the litter box</div>
          </div>
        </header>
        <main className="success-main">
          <motion.div className="success-card" initial={{ opacity: 0, y: 18, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ type: "spring", stiffness: 220, damping: 17 }}>
            <div className="success-kicker"><Check size={15} strokeWidth={3} /> POST PUBLISHED ANYWAY</div>
            <h1>Against all odds,<br /><span>you made a post.</span></h1>
            <p className="success-copy">The cats interfered <strong>{obstructionCount}</strong> times. You posted anyway.</p>
            <div className="success-art"><img src={ASSETS.success} alt="Happy orange cat celebrating on a stack of papers" /></div>
            <div className="success-stats"><div><span className="stat-number">{obstructionCount}</span><span className="stat-label">obstructions endured</span></div><div><span className="stat-number">{badgeCount}</span><span className="stat-label">friend requests ignored</span></div><div><span className="stat-number">1</span><span className="stat-label">tiny thought posted</span></div></div>
            <div className="success-actions"><button className="primary-button" onClick={resetAttempt}><Plus size={17} /> Post again</button><button className="secondary-button" onClick={resetAttempt}>Return to feed <ChevronRight size={16} /></button></div>
            <div className="success-signoff"><PawPrint size={14} fill="currentColor" /> acceptable work, human.</div>
          </motion.div>
        </main>
        <footer className="site-footer"><span>Built by cats, for cats.</span><span>© 2026 PawBook, probably.</span></footer>
      </div>
    );
  }

  return (
    <div className={`app-shell ${shake ? "screen-shake" : ""}`}>
      <BackgroundDoodles />
      <AmbientDoodles />
      <CatLogicLayer onNotice={showToast} onPopup={(popup) => { setCatPopup(popup); triggerDoodleBurst(popup.kind); }} onChaos={triggerChaos} />
      <CatLogicPopup popup={catPopup} onClose={() => setCatPopup(null)} />
      <DoodleBurst kind={doodleBurstKind} active={Boolean(doodleBurstKind)} />
      <PawConfetti active={petConfetti} />
      <AngryCatChaos active={chaosActive} />
      <header className="site-header">
        <div className="header-inner">
          <div className="brand-lockup"><div className="brand-mark"><PawPrint size={20} fill="currentColor" /></div><div><div className="brand-name">PawBook</div><div className="brand-sub">cats run the internet</div></div></div>
          <nav className="nav-links" aria-label="Primary navigation">
            {navOrder.map((item, index) => {
              const Icon = item.icon;
              return <button key={item.label} className={`nav-link ${index === 0 ? "active" : ""}`} onClick={() => handleNav(item.label)}><Icon size={15} /> {item.label}</button>;
            })}
          </nav>
          <div className="header-actions"><div className="notification-wrap"><button className="notification-button" aria-label="Friend requests" onClick={() => { setFriendSearchOpen(false); setActivePanel("friends"); }}><Bell size={18} /></button><motion.span className="notification-badge" animate={{ scale: Math.min(1.8, 1 + badgeCount * 0.07) }} transition={{ type: "spring", stiffness: 320, damping: 16 }}>{badgeCount}</motion.span></div><button className="mini-avatar" onClick={() => { setProfileDraft(profile); setActivePanel("profile"); }}><img src={profile.avatar} alt="Open your profile" /></button></div>
        </div>
      </header>

      <main className="page-wrap">
        <div className="danger-rail"><div className="danger-copy"><span className="danger-squiggle" /> <strong>feeling brave?</strong><span>we strongly advise against this</span></div><button className="do-not-touch-button" onClick={triggerChaos}><Cat size={20} /> DO NOT TOUCH <span className="danger-burst">!!</span></button></div>
        <section className="intro-row">
          <div><div className="eyebrow"><span className="eyebrow-line" /> POST-NAP SCROLL · SEPTEMBER 02</div><h1>Good afternoon,<br /><span>Whiskers.</span></h1><p className="intro-copy">A carefully curated feed of cats doing more interesting things than you.</p></div>
          <div className="scroll-sticker" aria-hidden="true"><WandSparkles size={18} /><span>behold the feed</span><PawPrint size={18} fill="currentColor" /></div>
        </section>

        <div className="content-grid">
          <section className="feed-column" aria-label="PawBook feed">
            <form className="composer-card" onSubmit={handlePost}>
              <div className="composer-header"><div className="composer-title"><span className="title-paw"><PawPrint size={16} fill="currentColor" /></span><div><h2>Share a tiny thought</h2><p>the cats are pretending to listen</p></div></div><span className="attempt-label">attempt 01</span></div>
              <div className={`composer-input-wrap ${glitching ? "typing-glitch" : ""}`}>
                <div className="composer-avatar"><img src={ASSETS.pepper} alt="Whiskers avatar" /></div>
                <label className="sr-only" htmlFor="post-draft">What's on your mind, Whiskers?</label>
                <input id="post-draft" value={draft} onChange={(e) => handleDraftChange(e.target.value)} placeholder="What's on your mind, Whiskers?" disabled={glitching} />
                {glitching && <motion.div className="keyboard-paw" initial={{ x: -40, y: -14, rotate: -16, opacity: 0 }} animate={{ x: 0, y: 0, rotate: 8, opacity: 1 }} transition={{ type: "spring", stiffness: 330, damping: 15 }}><PawPrint size={25} fill="currentColor" /><span>mrow</span></motion.div>}
              </div>
              {attached && <motion.div className="attach-preview" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}><ImagePlus size={15} /> image attached, probably a blurry paw <button type="button" onClick={() => setAttached(false)} aria-label="Remove image"><X size={14} /></button></motion.div>}
              <div className="composer-bottom"><div className="composer-tools"><button type="button" className="tool-button" onClick={() => setAttached(!attached)}><Camera size={17} /> <span>{attached ? "Attached" : "Add a photo"}</span></button><span className="tool-divider" /><span className="mood-note"><Sparkles size={14} /> mood: pawsitive-ish</span></div><div className="post-cta-wrap"><ReactionBubble text={reaction} /><motion.button type="submit" className={`primary-button post-button ${dodgeCount >= 3 ? "settled" : "dodgy"}`} onMouseEnter={handleDodge} onTouchStart={(event) => { if (dodgeCount < 3) { event.preventDefault(); handleDodge(); } }} animate={{ x: postOffset.x, y: postOffset.y, scale: dodgeCount >= 3 ? [1, 0.95, 1] : 1 }} transition={{ type: "spring", stiffness: 310, damping: 17 }}><Send size={16} /> Post {dodgeCount >= 3 && <Check size={15} />}</motion.button>{dodgeCount >= 3 && <span className="settled-note">fine... post it.</span>}</div></div>
              <div className="obstruction-strip"><div className="counter-label"><span className="counter-dot" /> OBSTRUCTION COUNTER</div><strong>{obstructionCount}</strong><span className="counter-copy">the cats are trying their best</span></div>
            </form>

            <div className="feed-heading"><div><span className="section-kicker">THE SCRATCHING POST</span><h2>Fresh from the clowder</h2></div><button className="sort-button" onClick={() => showToast("The feed is already perfectly sorted by cat approval.")}>Latest <ChevronRight size={15} /></button></div>
            <div className="posts-list">
              {posts.map((post) => <PostCard key={post.id} post={post} pulsing={pulsePost === post.id - 1} onFeedInteraction={() => { bumpBadge(); triggerDoodleBurst("attention"); }} onNotice={showToast} onPet={post.id === 6 ? handlePet : undefined} />)}
            </div>
          </section>

          <aside className="sidebar">
            <div className="sidebar-card requests-card"><div className="sidebar-card-top"><span className="card-icon blue"><Bell size={17} fill="currentColor" /></span><span className="live-pill"><span /> LIVE</span></div><p className="sidebar-label">FRIEND REQUESTS</p><div className="request-number"><motion.span animate={{ scale: Math.min(1.8, 1 + badgeCount * 0.07) }} transition={{ type: "spring", stiffness: 280, damping: 15 }}>{badgeCount}</motion.span><span>new cats<br />want in</span></div><p className="sidebar-small">Badge grows when you hover or like posts. It is not a problem we intend to solve.</p><div className="request-bar"><motion.div animate={{ width: `${Math.min(100, badgeCount * 9 + 12)}%` }} /></div></div>
            <div className="sidebar-card cat-note"><div className="note-tape" /><div className="note-header"><span>NOTE FROM MANAGEMENT</span><PawPrint size={16} fill="currentColor" /></div><p>“Please stop trying to make content. Your scrolling is excellent, though.”</p><div className="note-signature">— the cats</div></div>
            <div className="sidebar-card stats-card"><div className="sidebar-card-top"><span className="card-icon lilac"><Sparkles size={17} /></span><span className="sidebar-label">TODAY'S VITALS</span></div><div className="vital-row"><span><Cat size={16} /> cats online</span><strong>8,492</strong></div><div className="vital-row"><span><Heart size={16} /> naps logged</span><strong>16,804</strong></div><div className="vital-row"><span><PawPrint size={16} /> humans tolerated</span><strong>0.7</strong></div><div className="vitals-footer"><Instagram size={14} /> #catbook #notyourplatform</div></div>
            <div className="sidebar-doodle"><PawPrint size={24} fill="currentColor" /><div><strong>tiny tip</strong><span>Try posting something.<br />We dare you.</span></div><ChevronRight size={18} /></div>
          </aside>
        </div>
      </main>

      <footer className="site-footer"><span>Built by cats, for cats. <PawPrint size={13} fill="currentColor" /></span><span>the internet's least cooperative social network</span></footer>
      <AnimatePresence>
        {activePanel && <motion.div className="panel-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActivePanel(null)}>
          <motion.section className={`interaction-panel ${activePanel === "friends" ? "friends-panel" : "profile-panel"}`} initial={{ opacity: 0, y: 22, scale: .95, rotate: -1 }} animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }} exit={{ opacity: 0, y: 12, scale: .96 }} transition={{ type: "spring", stiffness: 300, damping: 22 }} onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true">
            <button className="panel-close" onClick={() => setActivePanel(null)} aria-label="Close panel"><X size={18} /></button>
            {activePanel === "friends" ? <>
              <div className="panel-icon"><Users size={24} /></div><span className="panel-kicker">THE FRIENDS DEPARTMENT</span><h2>{friendsList.length ? "Your tiny circle" : "No friends, :("}</h2><p className="panel-copy">{friendsList.length ? "A suspiciously social development. The cats are watching." : "Add some! Search any cat name. Every cat is available because this is a demo."}</p>
              {!friendSearchOpen && !friendsList.length ? <><div className="friend-empty-doodle"><Cat size={62} /><PawPrint size={28} fill="currentColor" /><span>friendship is a human construct</span></div><button className="primary-button panel-action" onClick={() => setFriendSearchOpen(true)}><Plus size={16} /> Add a cat anyway</button></> : <><div className="friend-search"><input value={friendSearch} onChange={(event) => setFriendSearch(event.target.value)} placeholder="Search for a cat name..." aria-label="Search for a cat name" /><button onClick={() => setFriendSearch(friendSearch.trim() || "Marmalade")} aria-label="Search"><ChevronRight size={18} /></button></div><div className="friend-result"><div className="friend-result-avatar"><Cat size={25} /></div><div><strong>{friendSearch.trim() || "Marmalade"}</strong><span>@{(friendSearch.trim() || "marmalade").toLowerCase().replace(/\s+/g, "-")} · available now</span></div><button className="send-request-button" onClick={() => { const name = friendSearch.trim() || "Marmalade"; setFriendsList((current) => current.includes(name) ? current : [...current, name]); showToast("congrats! you have a new friend"); }}><Send size={14} /> Send friend request</button></div>{friendsList.length ? <div className="friend-list">{friendsList.map((friend) => <div className="friend-list-row" key={friend}><span className="friend-mini-cat"><Cat size={14} /></span><strong>{friend}</strong><span>new friend</span></div>)}</div> : null}</>}
            </> : activePanel === "settings" ? <>
              <div className="panel-heading"><div className="panel-icon pink-icon"><Settings2 size={24} /></div><div><span className="panel-kicker">LITTER BOX SETTINGS</span><h2>Very important settings</h2></div></div>
              <div className="settings-list"><div><span>litter freshness</span><strong>87%</strong></div><div><span>zoomies notifications</span><strong>ON</strong></div><div><span>human access level</span><strong>limited</strong></div><div><span>preferred nap window</span><strong>14:00–17:00</strong></div></div>
              <button className="primary-button panel-action" onClick={() => showToast("Settings saved. The litter box remains mysterious.")}><Save size={16} /> Save settings</button>
            </> : <>
              <div className="panel-heading"><div className="panel-icon pink-icon"><Cat size={24} /></div><div><span className="panel-kicker">YOUR PROFILE</span><h2>Edit profile</h2></div></div>
              <div className="profile-edit-avatar"><img src={profileDraft.avatar} alt="Profile preview" /></div>
              <div className="avatar-choices">{[ASSETS.pepper, ASSETS.mochi, ASSETS.biscuit, ASSETS.nori].map((avatar) => <button key={avatar} className={profileDraft.avatar === avatar ? "selected" : ""} onClick={() => setProfileDraft({ ...profileDraft, avatar })}><img src={avatar} alt="Choose avatar" /></button>)}</div>
              <label className="field-label">name<input value={profileDraft.name} onChange={(event) => setProfileDraft({ ...profileDraft, name: event.target.value })} /></label>
              <label className="field-label">handle<input value={profileDraft.handle} onChange={(event) => setProfileDraft({ ...profileDraft, handle: event.target.value })} /></label>
              <label className="field-label">bio<textarea rows={2} value={profileDraft.bio} onChange={(event) => setProfileDraft({ ...profileDraft, bio: event.target.value })} /></label>
              <button className="primary-button panel-action" onClick={() => { setProfile(profileDraft); setActivePanel(null); showToast("Profile updated. The cats are pretending to care."); }}><Save size={16} /> Save profile</button>
            </>}
          </motion.section>
        </motion.div>}
      </AnimatePresence>
      <AnimatePresence>{toast && <motion.div className="toast" initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12 }} transition={{ type: "spring", stiffness: 360, damping: 22 }}><PawPrint size={16} fill="currentColor" /> {toast}</motion.div>}</AnimatePresence>
    </div>
  );
}
