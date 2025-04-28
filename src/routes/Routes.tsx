import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import AboutMe from "../pages/Abaut/AboutMe";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/aboutme" element={<AboutMe />} />
  </Routes>
);

export default AppRoutes;
