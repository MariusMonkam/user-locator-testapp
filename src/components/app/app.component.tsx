import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../header/header.component";
import { Paper } from "@mui/material";
import { routes as appRoutes } from "../../routes/routes";
import { Footer } from "../footer/footer.component";
import UserLocation from "../../pages/user-location/user-location.page";
import "./app.component.css";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "rgba(22, 194, 217, 0.81)"
    },
    secondary: {
      main: "#112A46"
    }
  }
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Router>
          <Paper>
            <Header />
          </Paper>

          <Routes>
            {appRoutes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={<route.component />}
              />
            ))}
            <Route
              key="user-location-route"
              path="/user/:id/:lat/:lng"
              element={<UserLocation />}
            />
          </Routes>
          <Footer />
        </Router>
      </Paper>
    </ThemeProvider>
  );
};

export default App;
