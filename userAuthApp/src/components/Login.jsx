// components/Login.jsx
import { useContext, useState } from "react";
import { UserContext } from "../UserContext";

const Login = () => {
  const { user, login } = useContext(UserContext);
  const [input, setInput] = useState("");

  if (user) return null; // Already logged in

  return (
    <div style={{ padding: "20px" }}>
      <input
        placeholder="Enter your name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => login(input)} disabled={!input}>
        Login
      </button>
    </div>
  );
};

export default Login;
