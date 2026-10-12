import { motion, useReducedMotion } from 'framer-motion';
import { seasons } from '../data/portfolio';

const episodes = seasons.map((season) => ({
  code: `S${String(season.number).padStart(2, '0')} · EPISODE`,
  title: season.title,
  period: season.period,
  role: season.synopsis,
  summary: season.episodes[0]?.description.split('**')[0].trim() ?? season.synopsis,
}));

export default function EpisodeCarousel() {
  const reduced = useReducedMotion();
  const doubled = [...episodes, ...episodes];

  return (
    <section aria-labelledby="episode-rail-title" className="relative isolate overflow-hidden border-y border-white/10 bg-[#08090d] py-12 sm:py-16">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(72,125,255,.16),transparent_60%),linear-gradient(180deg,rgba(255,255,255,.025),transparent_45%,rgba(0,0,0,.6))]" />
      <div className="relative z-10 gutter mb-7 flex flex-wrap items-end justify-between gap-3 sm:mb-10">
        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[.36em] text-[#78c9ff]">The career universe · Season 01–08</p>
          <h2 id="episode-rail-title" className="font-display text-3xl tracking-wide text-bone sm:text-5xl">ALL EPISODES</h2>
          <p className="mt-2 max-w-xl text-sm text-mist sm:text-base">A career told in chapters—from engineering foundations to autonomous quality and AI evaluation.</p>
        </div>
        <span className="hidden rounded-full border border-white/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.22em] text-mist sm:inline-flex">Auto-playing · 3D timeline</span>
      </div>

      <div className="episode-viewport relative" style={{ perspective: '1500px' }}>
        <div className={`episode-track flex w-max gap-4 pl-[5vw] pr-4 ${reduced ? 'episode-track-static' : ''}`} style={{ transformStyle: 'preserve-3d' }}>
          {doubled.map((episode, index) => (
            <motion.article
              key={`${episode.code}-${index}`}
              aria-label={`${episode.code}: ${episode.title}`}
              className="episode-card group relative flex h-[270px] w-[min(78vw,350px)] shrink-0 flex-col overflow-hidden rounded-2xl border border-white/10 p-5 sm:h-[310px] sm:w-[390px] sm:p-6"
              style={{
                background: 'linear-gradient(145deg, rgba(22,31,49,.97), rgba(9,10,16,.98) 58%, rgba(26,8,19,.96))',
                transform: 'rotateY(-9deg) translateZ(0)',
                transformStyle: 'preserve-3d',
                boxShadow: '0 22px 65px rgba(0,0,0,.38), inset 0 1px rgba(255,255,255,.07)',
              }}
              whileHover={reduced ? undefined : { rotateY: 0, translateY: -8, scale: 1.025, z: 28 }}
              transition={{ type: 'spring', stiffness: 180, damping: 22 }}
            >
              <div aria-hidden className="absolute inset-0 opacity-80" style={{ background: 'radial-gradient(ellipse at 100% 0%, rgba(75,156,255,.20), transparent 48%), linear-gradient(135deg, transparent 55%, rgba(255,55,100,.08))' }} />
              <div aria-hidden className="absolute right-4 top-2 select-none font-display text-[7rem] leading-none text-white/[.035] sm:text-[9rem]">{String((index % episodes.length) + 1).padStart(2, '0')}</div>
              <div className="relative flex items-center justify-between gap-2">
                <span className="text-[9px] font-bold uppercase tracking-[.26em] text-[#86d4ff]">{episode.code}</span>
                <span className="rounded-full border border-white/15 px-2.5 py-1 text-[9px] font-semibold text-mist">{episode.period}</span>
              </div>
              <div className="relative mt-auto">
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[.18em] text-[#ff8297]">{episode.role}</p>
                <h3 className="max-w-[17ch] font-display text-2xl leading-tight text-bone sm:text-3xl">{episode.title}</h3>
                <p className="mt-3 line-clamp-3 max-w-[42ch] text-xs leading-relaxed text-mist sm:text-sm">{episode.summary}</p>
                <div className="mt-5 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.2em] text-bone/70"><span className="h-px w-8 bg-[#78c9ff]" />Career archive</div>
              </div>
              <div aria-hidden className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#8bd7ff]/60 to-transparent" />
            </motion.article>
          ))}
        </div>
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-[7vw] bg-gradient-to-r from-[#08090d] to-transparent" />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-[7vw] bg-gradient-to-l from-[#08090d] to-transparent" />
      </div>
      <p className="relative z-10 gutter mt-5 text-[10px] uppercase tracking-[.22em] text-smoke">Move your pointer across the timeline · Swipe to explore on mobile</p>
    </section>
  );
}
