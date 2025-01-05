import "./App.css";
import Introduction from "./pages/introduction/Introduction";
import { BrowserRouter, Routes, Route } from "react-router";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import UserPage from "./pages/userPage/UserPage";
import CalendarComponent from "./pages/calendar/CalendarComponent";
import Performance from "./pages/performance/Performance";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Introduction />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<UserPage />} />
        <Route path="/calendar" element={<CalendarComponent />} />
        <Route path="/performance" element={<Performance />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
