import { Route, Routes } from "react-router-dom";
// import HeroSection from './heroSection'
import HeroSection from "./HeroSection";
import NotFound from '../notFound';
import ManualTraining from "./Manual_Training/manualTraining";
import News from "./News/news";
import ReportDamage from "./Report_Damage/reportDamage";
import Documents from "./Documents/documents";
import RequestLeave from "./Request_Leave/requestLeave";
import Manualoffice from "./Manual_Training/details/manualList";
import ExamplChapter from "./Manual_Training/details/ManualChapter";
import ProofLicense from "./Documents/Proof_License/proofLicense";
import GeneralDocuments from "./Documents/General_Documents/generalDocuments";
import Logistics from "./Report_Damage/Logistics/logistics";
import TrainigList from "./Manual_Training/details/trainigList";
import TrainingQuestion from "./Manual_Training/details/trainingQuestion";
import DetailedNews from "./News/detailedNews";
import ReportNewDamage from "./Report_Damage/Logistics/ReportNewDamage";
import Warehouse from "./Report_Damage/warehouse/warehouse";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HeroSection />}/>
      <Route path="/manual-training" element={<ManualTraining/>}/>

      <Route path="manual-training/manuallist/:id" element={<Manualoffice/>}/>
      <Route path="manual-training/traininglist/:id" element={<TrainigList/>}/>

      <Route path="manual-training/manuallist/:id/:ids" element={<ExamplChapter/>}/>
      <Route path="manual-training/traininglist/:id/:ids" element={<TrainingQuestion/>}/>

      <Route path="/news" element={<News/>}/>
      <Route path="/news/:id" element={<DetailedNews/>}/>
      <Route path="/report-damage" element={<ReportDamage/>}/>
      <Route path="/report-damage/logistics" element={<Logistics/>}/>
      <Route path="/report-damage/warehouse" element={<Warehouse/>}/>
      <Route path="/report-damage/logistics/:name" element={<ReportNewDamage/>}/>
      <Route path="/documents" element={<Documents/>}/>
      <Route path="/documents/proof-license" element={<ProofLicense/>}/>
      <Route path="/documents/general-documents" element={<GeneralDocuments/>}/>
      <Route path="/request-leave" element={<RequestLeave/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes