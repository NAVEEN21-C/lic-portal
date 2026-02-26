
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AskExpertChat from './components/AskExpertChat';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Plans from './pages/Plans';
import Claims from './pages/Claims';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/claims" element={<Claims />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <AskExpertChat />
      </div>
    </Router>
  );
};

export default App;
