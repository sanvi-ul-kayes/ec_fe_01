import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "../pages/SignUpPage";
import LogInPage from "./../pages/LogInPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/SignUpPage" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}
