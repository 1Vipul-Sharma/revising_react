import { useContext } from "react";
import { AuthContext } from "../AuthContext";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h2>👤 Profile</h2>
      <p>Name: {user.name}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;
