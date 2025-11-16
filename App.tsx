
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import HomePage from './pages/HomePage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import ServicesPage from './pages/ServicesPage.tsx';
import FAQPage from './pages/FAQPage.tsx';

const App: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;