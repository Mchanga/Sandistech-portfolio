import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "./components/SiteLayout";
import {
  AboutPage,
  ContactPage,
  ExperiencePage,
  HomePage,
  NotFoundPage,
  ProjectPage,
  ServicesPage,
  WorkPage,
} from "./pages/PortfolioPages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="work" element={<WorkPage />} />
          <Route path="work/:slug" element={<ProjectPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="experience" element={<ExperiencePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
