import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import TypesOfAttacks from './pages/TypesOfAttacks';
import GotHacked from './pages/GotHacked';
import Tools from './pages/Tools';
import Reporting from './pages/Reporting';
import Learning from './pages/Learning';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import TermsAndConditions from './pages/TermsAndConditions';
import Disclaimer from './pages/Disclaimer';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/attacks" element={<TypesOfAttacks />} />
          <Route path="/hacked" element={<GotHacked />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/reporting" element={<Reporting />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:slug" element={<ArticleDetail />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
