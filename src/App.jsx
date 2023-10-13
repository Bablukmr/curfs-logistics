import "./App.css";
import Home from "./Home/Home";
import { BrowserRouter, Routes, Route,useNavigate  } from "react-router-dom";
import AuthLayout from "./Auth/authLayout";
import Protected from "./protected";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AuthLayout />}/>
        <Route path="/" element={<Protected Componet={Home} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;