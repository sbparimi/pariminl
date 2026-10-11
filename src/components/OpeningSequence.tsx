import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useReducedMotionPref } from '../hooks/useMedia';
import { EASE, Magnetic } from './fx';

/**
 * The signature moment:
 * black → studio card → SURESH → THE SERIES → portrait reveal → role → ▶ PLAY
 */
const TIMELINE = [
  { at: 250, beat: 1 }, // studio card
  { at: 1000, beat: 2 }, // name
  { at: 1800, beat: 3 }, // THE SERIES
  { at: 2600, beat: 4 }, // portrait and origin story
  { at: 5600, beat: 5 }, // engineering foundation
  { at: 8200, beat: 6 }, // first software testing role
  { at: 10800, beat: 7 }, // career evolution
  { at: 13800, beat: 8 }, // role and enter button
];

export default function OpeningSequence({ onDone }: { onDone: (sound?: boolean) => void }) {
  const reduced = useReducedMotionPref();
  const [beat, setBeat] = useState(reduced ? 8 : 0);
  useEffect(() => {
    if (reduced) return;
    const timers = TIMELINE.map(({ at, beat }) => window.setTimeout(() => setBeat(beat), at));
    return () => timers.forEach(clearTimeout);
  }, [reduced]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onDone(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[120] overflow-hidden bg-black"
      onWheel={(event) => { if (Math.abs(event.deltaY) > 8) onDone(false); }}
      onTouchStart={(event) => { (event.currentTarget as HTMLDivElement).dataset.touchY = String(event.touches[0]?.clientY ?? 0); }}
      onTouchEnd={(event) => { const start = Number((event.currentTarget as HTMLDivElement).dataset.touchY ?? 0); const end = event.changedTouches[0]?.clientY ?? start; if (start - end > 36) onDone(false); }}
      exit={{ opacity: 0, scale: 1.04, filter: 'blur(12px)' }}
      transition={{ duration: 0.9, ease: EASE }}
      role="dialog"
      aria-label="Opening titles"
    >
      {/* letterbox bars */}
      <motion.div className="absolute inset-x-0 top-0 z-30 h-[7vh] bg-black" initial={{ y: 0 }} animate={{ y: beat >= 8 ? '-100%' : 0 }} transition={{ duration: 1.2, ease: EASE }} />
      <motion.div className="absolute inset-x-0 bottom-0 z-30 h-[7vh] bg-black" initial={{ y: 0 }} animate={{ y: beat >= 8 ? '100%' : 0 }} transition={{ duration: 1.2, ease: EASE }} />

      {/* projector flicker light */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{ background: 'radial-gradient(60% 50% at 50% 55%, rgba(102,217,255,0.18), transparent 70%)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: beat >= 2 ? [0, 0.9, 0.5, 1] : 0 }}
        transition={{ duration: 1.4 }}
      />

      {/* studio card */}
      <AnimatePresence>
        {beat === 1 && (
          <motion.div
            key="studio"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: 'blur(6px)' }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              className="font-sans text-xs font-semibold text-mist sm:text-sm"
              initial={{ letterSpacing: '0.2em', opacity: 0 }}
              animate={{ letterSpacing: '0.6em', opacity: 1 }}
              transition={{ duration: 1.6, ease: EASE }}
            >
              {profile.originalLabel}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* portrait */}
      <motion.div
        className="absolute inset-x-0 bottom-0 z-0 mx-auto flex h-[68vh] max-w-[900px] items-end justify-center"
        initial={{ opacity: 0, scale: 1.12, filter: 'blur(18px) brightness(0.3)' }}
        animate={beat >= 4 ? { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1)' } : {}}
        transition={{ duration: 1.6, ease: EASE }}
      >
        <img
          src={profile.portrait.src}
          srcSet={profile.portrait.srcSet}
          sizes="(max-width: 768px) 100vw, 900px"
          alt={profile.portrait.alt}
          className="h-full w-auto max-w-none object-contain object-bottom [mask-image:linear-gradient(to_bottom,black_55%,transparent_98%)]"

        />
      </motion.div>
      <div aria-hidden className="absolute inset-0 z-[1] bg-[radial-gradient(70%_60%_at_50%_40%,transparent_30%,rgba(0,0,0,0.85)_100%)]" />

      {/* title */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center">
        <motion.h1
          className="font-display leading-[0.82] text-bone drop-shadow-[0_8px_40px_rgba(0,0,0,0.8)]"
          style={{ fontSize: 'clamp(4.6rem, 20vw, 15rem)' }}
          initial={{ opacity: 0, scale: 1.3, filter: 'blur(20px)', letterSpacing: '0.5em' }}
          animate={beat >= 2 ? { opacity: 1, scale: 1, filter: 'blur(0px)', letterSpacing: '0.04em', y: beat >= 4 ? '-30vh' : 0 } : {}}
          transition={{ duration: 1.3, ease: EASE }}
        >
          {profile.firstName}
        </motion.h1>
        <motion.p
          className="font-sans text-sm font-bold text-crimson-2 [text-shadow:0_2px_20px_rgba(0,0,0,0.9)] sm:text-lg"
          initial={{ opacity: 0, letterSpacing: '1.4em' }}
          animate={beat >= 3 ? { opacity: 1, letterSpacing: '0.7em', y: beat >= 4 ? '-32vh' : 0 } : {}}
          transition={{ duration: 1.1, ease: EASE }}
        >
          {profile.seriesTag}
        </motion.p>
      </div>

      {/* origin story: the human narrative behind the career */}
      <div className="absolute inset-x-0 top-[47%] z-20 mx-auto flex w-full max-w-3xl -translate-y-1/2 flex-col items-center px-6 text-center sm:top-[48%]">
        <AnimatePresence mode="wait">
          {beat >= 4 && beat < 8 && (
            <motion.div
              key={beat < 5 ? 'village' : beat < 6 ? 'engineering' : beat < 7 ? 'testing' : 'evolution'}
              initial={{ opacity: 0, y: 22, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -16, filter: 'blur(6px)' }}
              transition={{ duration: 0.65, ease: EASE }}
              className="max-w-2xl rounded-2xl border border-white/10 bg-black/45 px-5 py-4 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-md sm:px-8 sm:py-5"
            >
              <p className="mb-2 font-sans text-[9px] font-bold uppercase tracking-[0.35em] text-cyan-200 sm:text-[10px]">
                {beat < 5 ? 'THE BEGINNING' : beat < 6 ? 'THE FOUNDATION' : beat < 7 ? 'THE FIRST TURN' : 'THE JOURNEY FORWARD'}
              </p>
              <p className="font-sans text-sm leading-relaxed text-white/90 sm:text-lg sm:leading-relaxed">
                {beat < 5
                  ? 'Every journey has a beginning. Mine started in a small village in India, with a big ambition to build a future through learning.'
                  : beat < 6
                    ? 'I completed my Electrical & Electronics Engineering degree. It taught me to think in systems, trace a problem to its source, and look for evidence—not assumptions.'
                    : beat < 7
                      ? 'My first turn into software was software testing. What began as a way to understand whether technology worked became a craft: finding what could fail before it mattered to someone.'
                      : 'Over 18+ years, that craft grew into automation architecture, release leadership, global team mentoring and AI quality engineering—helping teams ship with stronger evidence and confidence.'}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* role + play */}
      <div className="absolute inset-x-0 bottom-[9vh] z-20 flex flex-col items-center gap-6 px-4 text-center">
        <motion.p
          className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-bone/90 sm:text-sm sm:tracking-[0.4em]"
          initial={{ opacity: 0, y: 14 }}
          animate={beat >= 8 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
        >
          {profile.tagline.join('  •  ')}
        </motion.p>
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={beat >= 8 ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.7, ease: EASE }}>
          <Magnetic>
            <button
              type="button"
              data-cursor="play"
              onClick={() => onDone(true)}
              tabIndex={beat >= 8 ? 0 : -1}
              className="group flex items-center gap-3 rounded-full bg-bone px-9 py-4 font-sans text-base font-bold tracking-wide text-ink shadow-[0_0_60px_rgba(229,19,43,0.45)] transition hover:bg-white"
            >
              <span className="text-lg transition-transform group-hover:scale-125">▶</span> ENTER &amp; HEAR MY STORY
            </button>
          </Magnetic>
        </motion.div>
      </div>

      <button
        type="button"
        onClick={() => onDone(false)}
        className="absolute right-4 top-[calc(7vh+12px)] z-40 rounded-full border border-white/20 px-4 py-2 font-sans text-[11px] font-semibold tracking-[0.2em] text-mist transition hover:border-white/60 hover:text-bone"
      >
        SKIP INTRO · SCROLL TO EXPLORE
      </button>
    </motion.div>
  );
}
