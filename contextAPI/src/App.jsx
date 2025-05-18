// App.jsx
import { ThemeProvider } from "./ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Home />
    </ThemeProvider>
  );
}

export default App;
