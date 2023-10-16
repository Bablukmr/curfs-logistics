import { Route, Routes } from "react-router-dom";
// import HeroSection from './heroSection'
import HeroSection from "./HeroSection";
import NotFound from '../notFound';
import ManualTraining from "./Manual_Training/manualTraining";
import News from "./News/news";
import ReportDamage from "./Report_Damage/reportDamage";
import Documents from "./Documents/documents";
import RequestLeave from "./Request_Leave/requestLeave";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HeroSection />}/>
      <Route path="/manual-training" element={<ManualTraining/>}/>
      <Route path="/news" element={<News/>}/>
      <Route path="/report-damage" element={<ReportDamage/>}/>
      <Route path="/documets" element={<Documents/>}/>
      <Route path="/request-leave" element={<RequestLeave/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes