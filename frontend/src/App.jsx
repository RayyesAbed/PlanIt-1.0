import "@mantine/dates/styles.css";
import "@mantine/core/styles/global.css";
import { lazy } from "react";
const Introduction = lazy(() =>
  import("./components/introduction/introductionPage/Introduction")
);
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
const Register = lazy(() =>
  import("./components/authentication/register/Register")
);
const Login = lazy(() => import("./components/authentication/login/Login"));
const Store = lazy(() => import("./components/application/store/Store"));
const CalendarComponent = lazy(() =>
  import("./components/application/calendar/CalendarComponent")
);
const Performance = lazy(() =>
  import("./components/application/performance/Performance")
);
const Tasks = lazy(() => import("./components/application/tasks/Tasks"));
import "./App.css";
const Settings = lazy(() =>
  import("./components/application/settings/Settings")
);
const EmailVerify = lazy(() =>
  import("./components/authentication/verify/EmailVerify")
);
import ProtectedRoute from "./components/authentication/protected/ProtectedRoute";
import useCheckAuth from "./hooks/useCheckAuth";
import ResetPassword from "./components/authentication/resetPassword/ResetPassword";

function App() {
  const isAuthenticated = useCheckAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Introduction />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-email" element={<EmailVerify />} />
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/tasks" /> : <Login />}
        />
        <Route path="reset_password" element={<ResetPassword />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/store" element={<Store />} />
          <Route path="/calendar" element={<CalendarComponent />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/tasks/*" element={<Tasks />} />
          <Route path="/settings/*" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
