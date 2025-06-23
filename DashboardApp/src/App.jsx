import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import PrivateRoute from './PrivateRoute';
import Header from './components/Header';

function App() {
  return (
    <>
      <AuthProvider>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route element={<PrivateRoute/>}>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/reports" element={<Reports/>}/>
          <Route path="/settings" element={<Settings/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
