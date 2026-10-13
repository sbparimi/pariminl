import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useModalDialog } from '../hooks/useModalDialog';

/** The edited existing moving life-story film, shown in its full frame. */
export default function OpeningSequence({ onDone }: { onDone: (sound?: boolean) => void }) {
  const dialog = useModalDialog();
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const film = video.current;
    return () => { film?.pause(); };
  }, []);

  const finish = () => {
    video.current?.pause();
    onDone(false);
  };
  const togglePlayback = () => {
    const film = video.current;
    if (!film) return;
    if (!film.paused) { film.pause(); return; }
    if (film.ended) film.currentTime = 0;
    setStatus('');
    void film.play().catch(() => setStatus('Playback could not start. Try the video controls or continue to the website.'));
  };

  return (
    <motion.dialog
      ref={dialog}
      onCancel={(event) => { event.preventDefault(); finish(); }}
      className="cinema-dialog intro-film-dialog bg-black"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      aria-labelledby="intro-film-title"
      aria-describedby="intro-film-description"
    >
      <div className="intro-film-layout" data-lenis-prevent>
        <header className="intro-film-heading">
          <h2 id="intro-film-title">THE QUALITY SERIES</h2>
          <p id="intro-film-description">Suresh Parimi · A 44-second life story · From village dreams to quality engineering</p>
        </header>
        <video
          ref={video}
          className="intro-film-video"
          src="/video/suresh-parimi-life-story.mp4"
          poster="/video/suresh-parimi-life-story-poster.jpg"
          controls
          playsInline
          preload="auto"
          tabIndex={0}
          aria-label="Suresh Parimi — The Quality Series cinematic introduction"
          onPlay={() => { setPlaying(true); setStarted(true); setStatus(''); }}
          onPause={() => setPlaying(false)}
          onEnded={finish}
          onError={() => setStatus('The introduction could not load. You can still continue to the website.')}
        >
          <track kind="captions" src="/video/suresh-parimi-life-story.vtt" srcLang="en" label="English" default />
          Your browser does not support this video. You can continue to the website below.
        </video>
        <div className="intro-film-actions">
          <button type="button" data-modal-initial-focus onClick={togglePlayback} className="intro-film-play">{playing ? 'Pause intro' : started ? 'Resume intro' : 'Play my story with sound'}</button>
          <button type="button" onClick={finish} className="intro-film-skip">SKIP INTRO · CONTINUE TO WEBSITE</button>
        </div>
        <p role="status" className="intro-film-status">{status || 'Cinematic edit of your selected moving film. Play with sound, or continue to the portfolio.'}</p>
      </div>
    </motion.dialog>
  );
}
