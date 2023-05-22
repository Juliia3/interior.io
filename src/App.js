import "./assets/styles/index.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import StudioPage from "./pages/StudioPage";
import ProjectsPage from "./pages/ProjectsPage";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />

        <Route path="studio" element={<StudioPage />} />
        <Route path="projects" element={<ProjectsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
