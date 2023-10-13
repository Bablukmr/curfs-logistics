import "./App.css";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import AuthLayout from "./Auth/authLayout";
import Protected from "./protected";
import AppLayout from "./App/appLayout";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth/*" element={<AuthLayout />}/>
        <Route path="/*" element={<Protected Componet={AppLayout} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;