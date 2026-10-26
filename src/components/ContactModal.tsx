"use client";

import { X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { createPortal } from "react-dom";
import ContactForm from "./ContactForm";

type Ctx = { open: () => void; close: () => void };

const ContactModalContext = createContext<Ctx | null>(null);

const noopSubscribe = () => () => {};

export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx) throw new Error("useContactModal must be used inside ContactModalProvider");
  return ctx;
}

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

function Modal({ onClose }: { onClose: () => void }) {
  const t = useTranslations("CtaComponent");
  const reduce = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);

  // Scroll bloki, birinchi maydonga fokus, yopilganda fokusni qaytarish
  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("input, textarea")?.focus();

    return () => {
      document.body.style.overflow = prevOverflow;
      prevFocus?.focus();
    };
  }, []);

  // Esc bilan yopish va Tab fokusini modal ichida ushlab turish
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return onClose();
      if (e.key !== "Tab" || !panelRef.current) return;
      const items = Array.from(panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <motion.div
      className="fixed inset-0 z-100 flex items-end sm:items-center justify-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease }}
    >
      <div aria-hidden className="absolute inset-0 bg-black/70" onClick={onClose} />

      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={t("modalLabel")}
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 32, scale: 0.98 }}
        animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
        exit={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.35, ease }}
        className="relative w-full sm:max-w-xl max-h-[92dvh] overflow-y-auto scrollnone rounded-t-[30px] sm:rounded-[30px]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={t("close")}
          className="absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--button-bg)"
        >
          <X className="size-5" />
        </button>
        <ContactForm className="rounded-t-[30px] sm:rounded-[30px] h-auto" />
      </motion.div>
    </motion.div>
  );
}

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  // Serverda false, brauzerda true — portal faqat clientda chiziladi
  const mounted = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );

  return (
    <ContactModalContext.Provider value={{ open, close }}>
      {children}
      {mounted &&
        createPortal(
          <AnimatePresence>{isOpen && <Modal onClose={close} />}</AnimatePresence>,
          document.body,
        )}
    </ContactModalContext.Provider>
  );
}
