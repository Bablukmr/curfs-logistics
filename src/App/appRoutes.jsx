import { Route, Routes } from "react-router-dom";
// import HeroSection from './heroSection'
import HeroSection from "./HeroSection";
import NotFound from '../notFound';
import ManualTraining from "./Manual_Training/manualTraining";
import News from "./News/news";
import ReportDamage from "./Report_Damage/reportDamage";
import Documents from "./Documents/documents";
import RequestLeave from "./Request_Leave/requestLeave";
import Manualoffice from "./Manual_Training/details/manualOffice";
import ExamplChapter from "./Manual_Training/details/exampleChapter";
import ProofLicense from "./Documents/Proof_License/proofLicense";
import GeneralDocuments from "./Documents/General_Documents/generalDocuments";
import Logistics from "./Report_Damage/Logistics/logistics";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HeroSection />}/>
      <Route path="/manual-training" element={<ManualTraining/>}/>

      <Route path="manual-training/:name/:id" element={<Manualoffice/>}/>

      <Route path="manual-training/:name/:id/:ids" element={<ExamplChapter/>}/>
      <Route path="/news" element={<News/>}/>
      <Route path="/report-damage" element={<ReportDamage/>}/>
      <Route path="/report-damage/logistics" element={<Logistics/>}/>
      <Route path="/documents" element={<Documents/>}/>
      <Route path="/documents/proof-license" element={<ProofLicense/>}/>
      <Route path="/documents/general-documents" element={<GeneralDocuments/>}/>
      <Route path="/request-leave" element={<RequestLeave/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes