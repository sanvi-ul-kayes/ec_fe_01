import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "../pages/SignUpPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}
