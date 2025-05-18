// components/Navbar.jsx
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const Navbar = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      style={{
        backgroundColor: isDark ? "#222" : "#eee",
        color: isDark ? "#fff" : "#000",
        padding: "10px",
      }}
    >
      <h2>🌙 Theme Toggle</h2>
      <button onClick={toggleTheme}>
        Switch to {isDark ? "Light" : "Dark"} Mode
      </button>
    </nav>
  );
};

export default Navbar;
