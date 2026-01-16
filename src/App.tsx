/**
 * Main App Component
 * Redesigned with emotion-driven architecture
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import ProgramDetail from './pages/ProgramDetail';
import News from './pages/News';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import Finance from './pages/Finance';
import Volunteers from './pages/Volunteers';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/:id" element={<ProgramDetail />} />
          <Route path="/volunteers" element={<Volunteers />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/finance" element={<Finance />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
