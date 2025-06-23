// components/Header.jsx
import { useContext } from "react";
import { UserContext } from "../UserContext";

const Header = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <header
      style={{
        padding: "10px",
        backgroundColor: "#333",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h3>AuthApp</h3>
      {user ? (
        <div>
          Welcome, {user.name} 👋
          <button onClick={logout} style={{ marginLeft: "10px" }}>
            Logout
          </button>
        </div>
      ) : (
        <span>Not Logged In</span>
      )}
    </header>
  );
};

export default Header;
