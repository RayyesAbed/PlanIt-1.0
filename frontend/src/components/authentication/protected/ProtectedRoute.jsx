import { Navigate, Outlet } from "react-router-dom";
import { lazy } from "react";
const TaskProvider = lazy(() => import("../../../providers/TaskProvider"));
import useCheckAuth from "../../../hooks/useCheckAuth";
import { CircularProgress } from "@mui/material";

const ProtectedRoute = () => {
  const isAuthenticated = useCheckAuth();

  if (isAuthenticated === null) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress style={{ marginRight: "20px" }} />
        Loading...
      </div>
    );
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
