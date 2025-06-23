// components/Profile.jsx
import { useContext } from "react";
import { UserContext } from "../UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <p style={{ padding: "20px" }}>Please log in to view profile.</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>👤 Profile</h2>
      <p>Name: {user.name}</p>
    </div>
  );
};

export default Profile;
