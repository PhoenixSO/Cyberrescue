import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import TypesOfAttacks from './pages/TypesOfAttacks';
import GotHacked from './pages/GotHacked';
import Tools from './pages/Tools';
import Reporting from './pages/Reporting';
import Learning from './pages/Learning';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/attacks" element={<TypesOfAttacks />} />
          <Route path="/hacked" element={<GotHacked />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/reporting" element={<Reporting />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
