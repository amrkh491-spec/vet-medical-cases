import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Cases } from '@/pages/Cases';
import { CaseDetail } from '@/pages/CaseDetail';
import { Categories } from '@/pages/Categories';
import { Articles } from '@/pages/Articles';
import { Contact } from '@/pages/Contact';
import { ScrollToTop } from '@/components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/cases/:id" element={<CaseDetail />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
