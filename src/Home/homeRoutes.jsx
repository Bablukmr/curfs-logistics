import { Route, Routes } from "react-router-dom";
import HeroSection from './HeroSection'
import NotFound from '../notFound';

function HomeRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HeroSection />}/>
      
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}

export default HomeRoutes