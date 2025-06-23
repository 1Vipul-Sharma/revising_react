// App.jsx
import { UserProvider } from "./UserContext";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Login from "./components/Login";

function App() {
  return (
    <UserProvider>
      <Header />
      <Login />
      <Profile />
    </UserProvider>
  );
}

export default App;
