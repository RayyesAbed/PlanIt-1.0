import { Navigate, Outlet } from "react-router-dom";
import useCheckAuth from "../../../hooks/useCheckAuth";

const ProtectedRoute = () => {
  const isAuthenticated = useCheckAuth();

  if (isAuthenticated === null) {
    return <p>Loading...</p>; // to be changed later
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
