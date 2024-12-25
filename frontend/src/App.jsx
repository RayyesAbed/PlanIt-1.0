import "./App.css";
import Introduction from "./pages/introduction/Introduction";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Introduction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
