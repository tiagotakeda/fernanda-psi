// import { useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  // Navigate,
  // useNavigate,
} from "react-router-dom";
import { Home } from "../pages/Home";
import { Services } from "../pages/Services";
import { AboutMe } from "../pages/AboutMe";
import { HowItWorks } from "../pages/HowItWorks";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/howitworks" element={<HowItWorks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
