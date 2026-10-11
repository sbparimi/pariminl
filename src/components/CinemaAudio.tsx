import { useCallback, useEffect, useRef, useState } from 'react';
import { sectionMeta } from '../data/portfolio';

const labels: Record<string, string> = { top: 'Test Engineering Leadership', ...Object.fromEntries(Object.entries(sectionMeta).map(([id, s]) => [id, s.card])), contact: 'Quality leadership opportunities' };
const ids = Object.keys(labels);

// Natural voiceovers generated specifically for the target role narrative.
// Other chapters retain their existing locally hosted narration.
const voiceoverUrls: Record<string, string> = {
  top: 'https://www.aidocmaker.com/g0/audio?name=e09198abb76042c48c678848905aabfd',
  about: 'https://www.aidocmaker.com/g0/audio?name=e09198abb76042c48c678848905aabfd',
  journey: 'https://www.aidocmaker.com/g0/audio?name=dd735e4c7b9a41f88298d05d95a4e17e',
  moments: 'https://www.aidocmaker.com/g0/audio?name=dd735e4c7b9a41f88298d05d95a4e',
};

export default function CinemaAudio({ active, visible }: { active: boolean; visible: boolean }) {
  const [enabled, setEnabled] = useState(false);
  const [music, setMusic] = useState(true);
  const [voice, setVoice] = useState(true);
  const [topic, setTopic] = useState('top');
  const [status, setStatus] = useState('');
  const [volume, setVolume] = useState(72);
  const score = useRef<HTMLAudioElement | null>(null);
  const narration = useRef<HTMLAudioElement | null>(null);
  const last = useRef('');
  const [speaking, setSpeaking] = useState(false);

  const announce = useCallback((id: string) => {
    narration.current?.pause();
    const clip = new Audio(voiceoverUrls[id] ?? `/audio/${id}.wav`);
    narration.current = clip;
    last.current = id;
    const bed = score.current;
    if (bed) bed.volume = (volume / 100) * 0.045;
    clip.volume = volume / 100;
    const restore = () => { if (bed) bed.volume = (volume / 100) * 0.18; setSpeaking(false); };
    clip.onplaying = () => setSpeaking(true);
    clip.onended = restore;
    clip.onerror = () => { restore(); last.current = ''; setStatus('Narration could not load. Try Replay voice.'); };
    clip.play().catch(() => { restore(); last.current = ''; setStatus('Chrome blocked audio. Click Replay voice to start it.'); });
  }, []);

  const enable = useCallback(() => {
    setStatus('');
    score.current?.play().catch(() => setStatus('Music could not start.'));
    announce('top');
    setEnabled(true);
  }, [announce]);

  useEffect(() => {
    const bed = new Audio('/audio/score.wav');
    bed.loop = true;
    bed.volume = 0.18;
    score.current = bed;
    return () => { bed.pause(); narration.current?.pause(); };
  }, []);

  useEffect(() => {
    if (score.current) score.current.volume = (volume / 100) * (speaking ? 0.045 : 0.18);
    if (narration.current) narration.current.volume = volume / 100;
  }, [volume, speaking]);

  useEffect(() => {
    window.addEventListener('portfolio-enable-audio', enable);
    return () => window.removeEventListener('portfolio-enable-audio', enable);
  }, [enable]);

  // Announce only a section that has settled in view, rather than every section crossed.
  useEffect(() => {
    let timer = 0;
    const update = () => {
      clearTimeout(timer);
      timer = window.setTimeout(() => {
        const anchor = innerHeight * 0.36;
        const found = ids.find(id => {
          const r = document.getElementById(id)?.getBoundingClientRect();
          return r && r.top <= anchor && r.bottom > anchor;
        });
        if (found) setTopic(found);
      }, 650);
    };
    if (visible) update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => { clearTimeout(timer); window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, [visible]);

  useEffect(() => {
    const pause = () => { score.current?.pause(); narration.current?.pause(); };
    const visibility = () => {
      if (document.hidden) pause();
      else if (enabled && active) {
        if (music) score.current?.play().catch(() => setStatus('Tap Sound to resume audio.'));
        if (voice && narration.current && !narration.current.ended) narration.current.play().catch(() => setStatus('Click Replay voice to resume narration.'));
      }
    };
    document.addEventListener('visibilitychange', visibility);
    return () => document.removeEventListener('visibilitychange', visibility);
  }, [enabled, active, music, voice]);

  useEffect(() => {
    const bed = score.current;
    if (enabled && music && active) bed?.play().catch(() => setStatus('Audio could not start. Tap Sound to retry.'));
    else bed?.pause();
    if (!enabled || !voice || !active || document.hidden) {
      narration.current?.pause(); setSpeaking(false); last.current = ''; return;
    }
    if (last.current !== topic) announce(topic);
  }, [enabled, music, voice, topic, active, announce]);

  const toggle = () => {
    if (enabled) { score.current?.pause(); narration.current?.pause(); setEnabled(false); }
    else { setStatus(''); if (music) score.current?.play().catch(() => setStatus('Music could not start.')); if (voice) announce(topic); setEnabled(true); }
  };

  if (!visible) return null;

  return (
    <aside aria-label="Cinematic audio" className="glass fixed bottom-4 right-4 z-[65] max-w-[calc(100vw-32px)] rounded-xl border border-white/15 px-4 py-3 shadow-2xl">
      <div className="flex items-center gap-4">
        <button onClick={toggle} aria-pressed={enabled} className="text-xs font-bold uppercase tracking-widest text-bone">{enabled ? '◼ Sound on' : '♪ Enable sound'}</button>
        {enabled && <>
          <button onClick={() => setMusic(!music)} aria-pressed={music} className={`text-xs ${music ? 'text-crimson-2' : 'text-smoke'}`}>Music</button>
          <button onClick={() => setVoice(!voice)} aria-pressed={voice} className={`text-xs ${voice ? 'text-crimson-2' : 'text-smoke'}`}>Voice</button>
        </>}
      </div>
      {enabled && <div className="mt-3 flex items-center gap-3">
        <label htmlFor="cinema-volume" className="text-[10px] uppercase tracking-widest text-mist">Volume</label>
        <input
          id="cinema-volume"
          aria-label="Master audio volume"
          type="range"
          min="0"
          max="100"
          step="1"
          value={volume}
          onChange={(event) => setVolume(Number(event.currentTarget.value))}
          className="h-1 w-24 cursor-pointer accent-[#ff3d5a]"
        />
        <span className="w-8 text-right text-[10px] tabular-nums text-mist">{volume}%</span>
      </div>}
      {enabled && <button onClick={() => { setVoice(true); announce(topic); }} className="mt-2 text-xs text-bone underline underline-offset-4">Replay voice</button>}
      {enabled && <p className="mt-2 max-w-64 truncate text-[10px] uppercase tracking-widest text-mist">{speaking ? 'Narrating · ' : ''}{labels[topic]}</p>}
      {status && <p role="status" className="mt-2 max-w-64 text-xs text-mist">{status}</p>}
    </aside>
  );
}
