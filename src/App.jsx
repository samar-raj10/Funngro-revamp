import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import TeenPage from './pages/TeenPage';
import CompanyPage from './pages/CompanyPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<TeenPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="*" element={<TeenPage />} />
      </Routes>
    </>
  );
}
