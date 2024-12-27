import "./App.css";
import Introduction from "./pages/introduction/Introduction";
import { BrowserRouter, Routes, Route } from "react-router";
import Register from "./pages/register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Introduction />} />
        <Route index path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
