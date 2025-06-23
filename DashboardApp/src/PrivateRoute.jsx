import { AuthContext } from './AuthContext';
import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute() {
  const { user } = useContext(AuthContext);

  if (user) {
    return <Outlet />;
  } else {
    return <Navigate to="/" replace />;
  }
}

export default PrivateRoute;
