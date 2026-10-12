import { useEffect, useRef, useState } from 'react';
import { profile } from '../data/portfolio';

export default function BusinessCard() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const emailLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    emailLink.current?.focus({ preventScroll: true });
    const dismiss = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    const dismissOnFocusOutside = (event: FocusEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        event.stopImmediatePropagation();
        setOpen(false);
        trigger.current?.focus({ preventScroll: true });
      }
    };
    document.addEventListener('pointerdown', dismiss);
    document.addEventListener('focusin', dismissOnFocusOutside);
    window.addEventListener('keydown', escape, true);
    return () => {
      document.removeEventListener('pointerdown', dismiss);
      document.removeEventListener('focusin', dismissOnFocusOutside);
      window.removeEventListener('keydown', escape, true);
    };
  }, [open]);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2500);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const saveContact = () => {
    const escape = (value: string) => value.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/;/g, '\\;').replace(/,/g, '\\,');
    const card = ['BEGIN:VCARD', 'VERSION:3.0', 'N:Parimi;Suresh;;;', `FN:${escape(profile.fullName)}`, `TITLE:${escape(profile.role)}`, `EMAIL;TYPE=INTERNET:${profile.email}`, `URL:${profile.links.linkedin}`, `NOTE:${escape(profile.location)}`, 'END:VCARD', ''].join('\r\n');
    const url = URL.createObjectURL(new Blob([card], { type: 'text/vcard;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Suresh_Parimi.vcf';
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  return (
    <div ref={root} className="fixed right-[var(--gutter)] top-3 z-[130] sm:top-4">
      <button ref={trigger} type="button" aria-expanded={open} aria-controls="business-card" onClick={() => setOpen(!open)} className="flex min-h-11 items-center gap-2 rounded-full border border-white/20 bg-ink/95 px-4 text-xs font-semibold text-bone shadow-lg backdrop-blur-xl transition hover:border-crimson-2">
        <span aria-hidden className="flex h-6 w-6 items-center justify-center rounded-full bg-crimson text-[10px]">SP</span>
        Contact card <span aria-hidden>{open ? '−' : '↗'}</span>
      </button>
      {open && (
        <section id="business-card" aria-label="Suresh Parimi business card" data-lenis-prevent className="absolute right-0 top-full mt-3 max-h-[calc(100dvh-88px)] w-[min(360px,calc(100vw-2*var(--gutter)))] overflow-y-auto rounded-2xl border border-white/15 bg-ink-2 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.65)]">
          <div className="mb-5 flex items-start justify-between gap-3">
            <img src={profile.portrait.src} alt="" className="h-14 w-14 rounded-xl border border-white/10" />
            <button type="button" aria-label="Close contact card" onClick={() => { setOpen(false); trigger.current?.focus(); }} className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 hover:bg-white/10">✕</button>
          </div>
          <h2 className="text-2xl font-semibold tracking-tight">{profile.fullName}</h2>
          <p className="mt-2 text-sm text-crimson-2">{profile.role}</p>
          <p className="mt-2 text-xs text-mist">{profile.location}</p>
          <div className="mt-6 grid gap-2">
            <a ref={emailLink} href={`mailto:${profile.email}`} className="rounded-lg bg-bone px-4 py-3 text-sm font-semibold text-ink hover:bg-white">Email me <span className="mt-1 block break-all text-xs font-normal">{profile.email}</span></a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="rounded-lg border border-white/15 px-4 py-3 text-sm hover:bg-white/5">Connect on LinkedIn ↗</a>
            <a href={profile.resumePdf} download="Suresh_Parimi_Resume.pdf" className="rounded-lg border border-white/15 px-4 py-3 text-sm hover:bg-white/5">Download résumé ↓</a>
            <button type="button" onClick={saveContact} className="rounded-lg border border-white/15 px-4 py-3 text-left text-sm hover:bg-white/5">Save contact (.vcf) ↓</button>
            <button type="button" onClick={async () => {
              try { await navigator.clipboard.writeText(profile.email); setCopied(true); }
              catch { emailLink.current?.focus(); }
            }} className="min-h-11 text-xs text-mist hover:text-bone">Copy email address</button>
            <span role="status" className="text-center text-xs text-mist">{copied ? 'Email copied.' : ''}</span>
          </div>
        </section>
      )}
    </div>
  );
}
