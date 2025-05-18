import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

const layoutStyle = {
  display: 'flex',
  height: '100vh',
  flexDirection: 'column',
};

const contentWrapper = {
  display: 'flex',
  flex: 1,
};

function DashboardLayout() {
  return (
    <div style={layoutStyle}>
      <Navbar />
      <div style={contentWrapper}>
        <Sidebar />
        <main style={{ padding: '20px', flex: 1 }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
