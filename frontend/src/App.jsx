import Introduction from "./components/introduction/introductionPage/Introduction";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Register from "./components/authentication/register/Register";
import Login from "./components/authentication/login/Login";
import UserPage from "./components/application/userPage/userPage";
import CalendarComponent from "./components/application/calendar/CalendarComponent";
import Performance from "./components/application/performance/Performance";
import Tasks from "./components/application/tasks/Tasks";
import "./App.css";
import Settings from "./components/application/settings/Settings";
import EmailVerify from "./components/authentication/verify/EmailVerify";
import ProtectedRoute from "./components/authentication/protected/ProtectedRoute";
import useCheckAuth from "./hooks/useCheckAuth";

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
          element={isAuthenticated ? <Navigate to="/home" /> : <Login />}
        />

        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<UserPage />} />
          <Route path="/calendar" element={<CalendarComponent />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/settings/*" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
