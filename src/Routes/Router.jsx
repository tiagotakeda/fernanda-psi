// import { useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  // Navigate,
  // useNavigate,
} from "react-router-dom";
import { Home } from "../pages/Home";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
