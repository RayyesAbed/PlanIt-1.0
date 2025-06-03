import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MantineProvider } from "@mantine/core";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import UserDataProvider from "./providers/UserDataProvider.jsx";

export const client = new ApolloClient({
  uri: `${import.meta.env.VITE_BACKEND_URL}/graphql`,
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <MantineProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <UserDataProvider>
            <App />
          </UserDataProvider>
        </LocalizationProvider>
      </MantineProvider>
    </ApolloProvider>
  </StrictMode>
);
