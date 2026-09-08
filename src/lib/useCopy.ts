import { useCallback } from "react";

/**
 * Copy text to the clipboard, with a fallback for contexts where the async
 * Clipboard API is unavailable (non-HTTPS origins, older browsers) — otherwise
 * the copy fails silently and the visitor gets no feedback at all.
 *
 * Returns true on success so the caller can show the right toast.
 */
export function useCopy() {
  return useCallback(async (text: string): Promise<boolean> => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch {
      // fall through to the legacy path below
    }

    try {
      const el = document.createElement("textarea");
      el.value = text;
      el.setAttribute("readonly", "");
      el.style.position = "fixed";
      el.style.opacity = "0";
      el.style.pointerEvents = "none";
      document.body.appendChild(el);
      el.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(el);
      return ok;
    } catch {
      return false;
    }
  }, []);
}
