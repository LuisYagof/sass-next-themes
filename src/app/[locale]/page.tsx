import { useTranslations, useLocale } from "next-intl";
import cssModule from "@/styles/modules/page.module.scss";
import { ThemeButton } from "@/components/themes/ThemeButton";
import { ThemeToggle } from "@/components/themes/ThemeToggle";
import ThemeToggleCounter from "@/components/store/ThemeToggleCounter";
import ToggleLanguage from "@/components/lang/ToggleLanguage";

export default function Home() {
  // I18N
  const t = useTranslations();
  const locale = useLocale();

  return (
    <main className={cssModule["main-wrapper"]}>
      <h1>SASS NEXT-THEMES</h1>
      <div className={cssModule["toggle-wrapper"]}>
        <div className={cssModule["theme-switch-btn"]}>
          <ThemeButton />
        </div>
        <ThemeToggle />
      </div>
      <ThemeToggleCounter />

      <span style={{ margin: "1.5rem 0" }}>
        ___________________________________________________
      </span>

      <h5>{t("lang-selector")}</h5>
      <ToggleLanguage defaultValue={locale} />
    </main>
  );
}
