import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';
import { useMedia } from '../hooks/useMedia';
import { EASE } from './fx';
import { ResumeSheet } from './ResumeViewer';
import { useModalDialog } from '../hooks/useModalDialog';

/** Full-screen PDF viewer. On phones (where inline PDFs are unreliable) it offers open/download instead. */
export default function ResumeModal({ onClose }: { onClose: () => void }) {
  useScrollLock(true);
  const dialog = useModalDialog();
  const small = useMedia('(max-width: 767px)');


  return (
    <motion.dialog
      ref={dialog}
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      className="cinema-dialog fixed inset-0 z-[140] flex flex-col bg-black/90 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label="Resume"
    >
      <div className="gutter flex h-16 shrink-0 items-center justify-between gap-3 pt-[env(safe-area-inset-top)]">
        <p className="truncate font-display text-2xl tracking-wide text-bone">The Full Story</p>
        <div className="flex items-center gap-2">
          <a href={profile.resumePdf} download="Suresh_Parimi_Resume.pdf" className="rounded-md bg-bone px-4 py-2 text-xs font-bold text-ink">
            ⤓ Download
          </a>
          <button type="button" data-modal-initial-focus onClick={onClose} aria-label="Close resume" data-cursor="close" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-bone hover:bg-white/20">
            ✕
          </button>
        </div>
      </div>
      <motion.div
        className="gutter flex-1 pb-6"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        {small ? (
          <div data-lenis-prevent className="h-full overflow-y-auto">
            <ResumeSheet />
            <a href={profile.resumePdf} target="_blank" rel="noreferrer" className="glass mt-4 flex min-h-12 items-center justify-center rounded-md text-sm font-semibold text-bone">
              Open original PDF ↗
            </a>
          </div>
        ) : (
          <iframe title="Suresh Parimi resume (PDF)" src={`${profile.resumePdf}#view=FitH`} className="h-full w-full rounded-xl bg-white" />
        )}
      </motion.div>
    </motion.dialog>
  );
}
