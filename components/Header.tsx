import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { BsSunFill, BsSun } from "react-icons/bs";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          className="w-full h-10 text-yellow-500 font-black text-2xl"
          role="button"
          onClick={() => setTheme("light")}
        >
          <BsSun />
        </button>
      );
    } else {
      return (
        <button
          className="w-full h-10 text-gray-900 font-black text-2xl"
          role="button"
          onClick={() => setTheme("dark")}
        >
          <BsSunFill />
        </button>
      );
    }
  };

  return <header className="">{renderThemeChanger()}</header>;
};

export default Header;
