import { FC } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AppContainer, ContentWrapper } from "./App.styled";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import "./i18n";
import Writings from "./components/Writings/Writings.tsx";
import MainContent from "./components/MainContent/MainContent.tsx";
import Footer from "./components/Footer/Footer.tsx";

const App: FC = () => {
  return (
    <ThemeProvider theme={createTheme()}>
      <AppContainer>
        <Navbar />
        <ContentWrapper>
          <Routes>
            <Route path="/writings" element={<Writings />} />
            <Route path="/" element={<MainContent />} />
          </Routes>
        </ContentWrapper>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
