import { NavLink } from 'react-router-dom';

const linkStyle = ({ isActive }) => ({
  display: 'block',
  padding: '10px',
  color: isActive ? 'white' : '#aaa',
  background: isActive ? '#555' : 'transparent',
  textDecoration: 'none'
});

function Sidebar() {
  return (
    <aside style={{ width: '200px', background: '#333', padding: '10px' }}>
      <NavLink to="/dashboard" style={linkStyle}>Dashboard</NavLink>
      <NavLink to="/profile" style={linkStyle}>Profile</NavLink>
      <NavLink to="/" style={linkStyle}>Settings</NavLink>
    </aside>
  );
}

export default Sidebar;
