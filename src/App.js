import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Do not import BrowserRouter here
import HomePage from './pages/HomePage';
import SIPPage from './pages/SIPPage';
import SSYPage from './pages/SSYPage';
import RDPage from './pages/RDPage';
import LumpsumPage from './pages/LumpsumPage';
import PPFPage from './pages/PPFPage';
import NPSPage from './pages/NPSPage';
import SWPPage from './pages/SWPPage';
import EPFPage from './pages/EPFPage';
import HRAPage from './pages/HRAPage';
import MFPage from './pages/MFPage';
import FDPage from './pages/FDPage';
import RetirementPage from './pages/RetirementPage';
import HomeLoanPage from './pages/HomeLoanPage';
import SearchResultsPage from './pages/SearchResultsPage'; // Import the search results page
import './styles/global.css';

function App() {
  return (
    <Routes> {/* Use Routes directly without BrowserRouter */}
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchResultsPage />} /> {/* Add search route */}
      <Route path="/sip" element={<SIPPage />} />
      <Route path="/home-loan" element={<HomeLoanPage />} />
      <Route path="/ssy" element={<SSYPage />} />
      <Route path="/rd" element={<RDPage />} />
      <Route path="/lumpsum" element={<LumpsumPage />} />
      <Route path="/ppf" element={<PPFPage />} />
      <Route path="/nps" element={<NPSPage />} />
      <Route path="/swp" element={<SWPPage />} />
      <Route path="/epf" element={<EPFPage />} />
      <Route path="/hra" element={<HRAPage />} />
      <Route path="/mf" element={<MFPage />} />
      <Route path="/fd" element={<FDPage />} />
      <Route path="/retirement" element={<RetirementPage />} />
    </Routes>
  );
}

export default App;