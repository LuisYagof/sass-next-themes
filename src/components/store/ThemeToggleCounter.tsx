"use client";

import { useToggleCounter } from "@/store/toggleCounter.store";

export default function ThemeToggleCounter() {
  // STORE
  const { timesToggled } = useToggleCounter();

  return (
    <>
      <h3>
        Times toggled:
        <span style={{ color: "var(--theme-icon-bg)" }}>{timesToggled}</span>
      </h3>
    </>
  );
}
