import { useEffect } from "react";
import "./Drawer.css";

/**
 * Props
 *  open   – bool  (drawer visible)
 *  close  – fn    (called on Esc or backdrop click)
 *  hasBackdrop – bool (whether clicking outside should close)
 */
export default function Drawer({ open, close, children, hasBackdrop = true }) {
  /* Esc closes only when backdrop is active */
  useEffect(() => {
    if (!open || !hasBackdrop) return;
    function onKey(e) { if (e.key === "Escape") close(); }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, hasBackdrop, close]);

  /* choose backdrop class depending on prop */
  const backdropClass = hasBackdrop ? "drawer-backdrop" : "drawer-backdrop no-bg";

  return (
    <div
      className={`${backdropClass} ${open ? "show" : ""}`}
      onClick={hasBackdrop ? close : undefined}
    >
      <aside
        className={`drawer-panel ${open ? "slide-in" : "slide-out"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {hasBackdrop && (
          <button className="drawer-close" onClick={close}>
            ×
          </button>
        )}
        <div className="drawer-content">{children}</div>
      </aside>
    </div>
  );
}
