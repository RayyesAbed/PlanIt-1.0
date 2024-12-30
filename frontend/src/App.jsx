import "./App.css";
import Introduction from "./pages/introduction/Introduction";
import { BrowserRouter, Routes, Route } from "react-router";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import UserPage from "./pages/userPage/userPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Introduction />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
