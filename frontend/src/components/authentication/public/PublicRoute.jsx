import { Outlet, useNavigate } from "react-router-dom";
import useCheckAuth from "../../../hooks/useCheckAuth";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";

const PublicRoute = () => {
  const isAuthenticated = useCheckAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks", { replace: true }); // or your home route
    }
  }, [isAuthenticated, navigate]);

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

  if (!isAuthenticated) {
    return <Outlet />;
  }

  return null;
};

export default PublicRoute;
