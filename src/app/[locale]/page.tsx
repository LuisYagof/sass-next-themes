import { useTranslations, useLocale } from "next-intl";
import cssModule from "@/styles/modules/page.module.scss";
// import ThemeSwitch from "@/components/themes/_ThemeSwitch";
import { ThemeSwitch } from "@/components/themes/ThemeSwitchNT";
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
      {/* <ThemeSwitch /> */}
      <div className={cssModule["toggle-wrapper"]}>
        <div className={cssModule["theme-switch-btn"]}>
          <ThemeSwitch />
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
