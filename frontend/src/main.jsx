import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { MantineProvider } from "@mantine/core";
import TaskProvider from "./providers/TaskProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TaskProvider>
          <App />
        </TaskProvider>
      </LocalizationProvider>
    </MantineProvider>
  </StrictMode>
);
