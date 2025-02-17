import { Navigate, Outlet } from "react-router-dom";
import { lazy } from "react";
const TaskProvider = lazy(() => import("../../../providers/TaskProvider"));
import useCheckAuth from "../../../hooks/useCheckAuth";

const ProtectedRoute = () => {
  const isAuthenticated = useCheckAuth();

  if (isAuthenticated === null) {
    return <p>Loading...</p>; // to be changed later
  }

  return isAuthenticated ? (
    <TaskProvider>
      <Outlet />
    </TaskProvider>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
