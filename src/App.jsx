import "./App.css";
import Home from "./Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./notFound";
import AuthLayout from "./Auth/authLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AuthLayout />}>
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
