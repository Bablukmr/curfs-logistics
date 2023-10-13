import "./App.css";
import Home from "./Home/Home";
import LogIn from "./LogIn/LogIn";
import { BrowserRouter,Routes, Route } from "react-router-dom";

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/:name" element={<LogIn />} />
      <Route path="/home" element={<Home />} />

    </Routes>
  </BrowserRouter>
     
     );
}

export default App;
