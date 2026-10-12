import { useEffect, useRef } from 'react';

/** Native modal behavior keeps focus and assistive technology inside the overlay. */
export function useModalDialog() {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const dialog = ref.current;
    dialog?.showModal();
    dialog?.querySelector<HTMLElement>('[data-modal-initial-focus]')?.focus({ preventScroll: true });
    const cycleFocus = (event: KeyboardEvent) => {
      if (event.key !== 'Tab' || !dialog) return;
      const controls = Array.from(dialog.querySelectorAll<HTMLElement>(
        'a[href], button, input, select, textarea, iframe, [tabindex]',
      )).filter((element) => element.tabIndex >= 0 && !element.matches(':disabled') && element.getClientRects().length > 0);
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    dialog?.addEventListener('keydown', cycleFocus);
    return () => {
      dialog?.removeEventListener('keydown', cycleFocus);
      dialog?.close();
      if (previous?.isConnected) previous.focus({ preventScroll: true });
    };
  }, []);
  return ref;
}
