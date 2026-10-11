import { motion } from 'framer-motion';
import { EASE, RevealText } from './fx';

const pillars = [
  { code: '01', title: 'Deterministic', detail: 'Rules, contracts and tool-call checks' },
  { code: '02', title: 'Semantic', detail: 'Faithfulness and answer relevance' },
  { code: '03', title: 'Orchestration', detail: 'Intent routing and agent hand-offs' },
  { code: '04', title: 'Observability', detail: 'Conversation traces and failure evidence' },
];

const signals = ['RAG quality', 'MCP tool calls', 'Agent routing', 'LLM-as-a-Judge', 'Human review'];

export default function PostNLSpotlight() {
  return (
    <section aria-labelledby="postnl-title" className="relative isolate overflow-hidden border-y border-white/10 bg-[#080d13] py-16 sm:py-24 lg:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(102,217,255,0.16),transparent_68%)] blur-2xl" />
        <div className="absolute -bottom-32 left-[-5rem] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(212,180,119,0.10),transparent_70%)] blur-2xl" />
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(102,217,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(102,217,255,0.14)_1px,transparent_1px)] [background-size:54px_54px] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
      </div>

      <div className="gutter relative mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-8% 0px' }}
          transition={{ duration: 0.85, ease: EASE }}
        >
          <p className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.34em] text-crimson-2">
            <span className="h-px w-8 bg-crimson-2" /> Featured work · PostNL
          </p>
          <RevealText as="h2" text="AI QUALITY, WITH EVIDENCE." className="max-w-2xl font-display text-[clamp(3rem,6.4vw,6.6rem)] leading-[0.88] text-bone" />
          <p className="mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
            Building a quality approach for production conversational AI and multi-agent journeys—checking not only what an assistant says, but how it routes, uses tools and reaches an outcome.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {signals.map((signal) => (
              <span key={signal} className="rounded-full border border-white/12 bg-white/[0.035] px-3 py-2 text-xs text-bone/80">{signal}</span>
            ))}
          </div>
          <p className="mt-8 max-w-lg border-l border-crimson-2/70 pl-4 text-sm leading-relaxed text-mist">
            Focus: measurable quality signals, traceable failures and release confidence across the full conversation—not a single answer score.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-8% 0px' }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.08 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-cyan-300/[0.035] blur-2xl" />
          <div className="glass relative overflow-hidden rounded-2xl p-4 sm:p-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-crimson-2">Evaluation architecture</p>
                <h3 id="postnl-title" className="mt-1 text-lg font-semibold text-bone sm:text-xl">Conversational AI assurance</h3>
              </div>
              <span className="rounded-full border border-cyan-200/25 bg-cyan-200/[0.08] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-100">Quality signals</span>
            </div>

            <div className="my-5 rounded-xl border border-cyan-200/20 bg-cyan-200/[0.045] p-4 text-center">
              <p className="text-[10px] uppercase tracking-[0.25em] text-mist">Conversation under test</p>
              <p className="mt-1 text-sm font-semibold text-bone sm:text-base">User intent → Agent → Answer / action</p>
              <div className="mx-auto mt-3 h-6 w-px bg-gradient-to-b from-cyan-200/80 to-cyan-200/10" />
              <div className="mx-auto h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(102,217,255,0.8)]" />
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.code}
                  whileHover={{ y: -3, borderColor: 'rgba(102,217,255,0.42)' }}
                  transition={{ duration: 0.25 }}
                  className="rounded-xl border border-white/10 bg-black/25 p-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-crimson-2">{pillar.code} / SIGNAL</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-200/80" />
                  </div>
                  <h4 className="mt-3 text-base font-semibold text-bone">{pillar.title}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-mist">{pillar.detail}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 rounded-lg border border-white/8 px-3 py-3">
              <span className="text-xs text-mist">Outcome</span>
              <span className="text-xs font-semibold text-bone">Evidence · Confidence · Verdict</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
