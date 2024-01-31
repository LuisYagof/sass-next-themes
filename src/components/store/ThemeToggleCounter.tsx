"use client";

import { useTranslations } from "next-intl";
import { useToggleCounter } from "@/store/toggleCounter.store";

export default function ThemeToggleCounter() {
  // STORE
  const { timesToggled } = useToggleCounter();

  // I18N
  const t = useTranslations();

  return (
    <>
      <h3>
        <span>{t("number-of-theme-switches")}: </span>
        <span style={{ color: "var(--theme-icon-bg)" }}>{timesToggled}</span>
      </h3>
    </>
  );
}
