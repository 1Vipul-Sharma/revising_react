// components/Home.jsx
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const Home = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: isDark ? "#111" : "#fff",
        color: isDark ? "#ccc" : "#000",
        padding: "20px",
        minHeight: "200px",
      }}
    >
      <h2>Home Component</h2>
      <p>Current theme: {isDark ? "Dark 🌑" : "Light 🌞"}</p>
    </div>
  );
};

export default Home;
