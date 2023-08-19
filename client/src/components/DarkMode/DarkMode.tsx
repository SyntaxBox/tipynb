import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useDarkMode, ICON_SIZE } from "../../shared";

function DarkModeButton() {
  const [colorTheme, setTheme] = useDarkMode();
  const [isDarkMode, setDarkMode] = useState(colorTheme === "light");
  const toggleDarkMode = (checked: boolean) => {
    const newTheme = checked ? "dark" : "light";
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    setTheme(newTheme);
    setDarkMode(checked);
  };

  return (
    <div data-testid="dark-mode-button">
      <DarkModeSwitch
        moonColor="#14b8a6"
        sunColor="#14b8a6"
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={ICON_SIZE}
      />
    </div>
  );
}

export default DarkModeButton;
