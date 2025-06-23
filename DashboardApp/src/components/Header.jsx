import { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

function Header() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header style={{ padding: '10px', background: '#eee', display: 'flex', justifyContent: 'space-between' }}>
      <h2>My App</h2>
      {user && (
        <div>
          <span style={{ marginRight: '10px' }}>Hello, {user}</span>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </header>
  );
}

export default Header;
