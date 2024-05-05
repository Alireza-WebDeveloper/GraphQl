import { useTheme } from "../../Config/Theme/index";
import { DarkModeIcon, LightModeIcon } from "../Icon";

export default function ToggleTheme() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <section className="cursor-pointer" onClick={() => toggleTheme()}>
        {theme === "light" ? (
          <DarkModeIcon width="24" height="24" />
        ) : (
          <LightModeIcon width="24" height="24" />
        )}
      </section>
    </>
  );
}
