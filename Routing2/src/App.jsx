import { Routes, Route } from 'react-router-dom';
import DashboardLayout from './layout/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route index  element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
