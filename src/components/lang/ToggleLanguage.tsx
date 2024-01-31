"use client";

import { useTransition } from "react";
import { useRouter, usePathname } from "@/locales/config/navigation";
import AppToggleButton from "@/components/core/AppToggleButton";

interface ToggleLanguagePropsType {
  defaultValue: string;
}

export default function ToggleLanguage({
  defaultValue,
}: ToggleLanguagePropsType) {
  // ROUTER
  const router = useRouter();
  const pathname = usePathname();

  // HOOKS
  const [isPending, startTransition] = useTransition();

  // FUNCTIONS
  function toggleLanguage(isChecked: boolean) {
    const nextLocale = isChecked ? "en" : "es";
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
      <span>Español</span>
      <AppToggleButton
        uniqueId="toggle-language"
        previousValue={defaultValue === "en"}
        toggleFn={toggleLanguage}
        // disabled={isPending}
      />
      <span>English</span>
    </div>
  );
}
