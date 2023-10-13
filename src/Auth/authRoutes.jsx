import { Route, Routes } from "react-router-dom";
import LogInEmail from "./LogInEmail";
import LonInPincode from "./LonInPincode";
import LonInRequest from "./LonInRequest";
import NotFound from "../notFound";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LogInEmail />} />
      <Route path="pincode" element={<LonInPincode />} />
      <Route path="password-reset" element={<LonInRequest />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
