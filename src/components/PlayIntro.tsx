import OpeningSequence from './OpeningSequence';
import { useScrollLock } from '../hooks/smoothScroll';

/** Replay the exact same mastered film as the landing-page introduction. */
export default function PlayIntro({ onClose }: { onClose: () => void }) {
  useScrollLock(true);
  return <OpeningSequence onDone={onClose} />;
}
