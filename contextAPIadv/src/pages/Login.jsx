import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

const Login = () => {
  const [name, setName] = useState("");
  const { login, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login(name);
    navigate("/profile");
  };

  if (user) return <p>You are already logged in.</p>;

  return (
    <div>
      <h2>🔐 Login</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
      <button onClick={handleLogin} disabled={!name}>
        Login
      </button>
    </div>
  );
};

export default Login;
