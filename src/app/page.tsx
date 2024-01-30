// import ThemeSwitch from "@/components/themes/_ThemeSwitch";
import { ThemeSwitch } from "@/components/themes/ThemeSwitchNT";
import { ThemeToggle } from "@/components/themes/ThemeToggle";
import ThemeToggleCounter from "@/components/store/ThemeToggleCounter";
import cssModule from "@/styles/modules/page.module.scss";

export default function Home() {
  return (
    <main>
      <h1>SASS NEXT-THEMES</h1>

      {/* <ThemeSwitch /> */}

      <div className={cssModule["toggle-wrapper"]}>
        <div className={cssModule["theme-switch-btn"]}>
          <ThemeSwitch />
        </div>
        <ThemeToggle />
      </div>

      <ThemeToggleCounter />
    </main>
  );
}
