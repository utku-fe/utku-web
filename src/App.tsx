import { FC } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AppContainer } from "./App.styled";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import "./i18n";
import Writings from "./components/Writings/Writings.tsx";
import Contact from "./components/Contact/Contact.tsx";
const App: FC = () => {
  return (
    <ThemeProvider theme={createTheme()}>
      <AppContainer>
        <Navbar />
        <Routes>
          <Route path="/writings" element={<Writings />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AppContainer>
    </ThemeProvider>
  );
};
export default App;
