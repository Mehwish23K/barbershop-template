
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Services from './pages/Services';
import Nav from './components/Nav';
import NotFound from './pages/Notfound';
import Contact from './pages/Contact';
import About from './pages/About';
import Team from './pages/Team';
import Reservations from './pages/Reservations';
import Footer from './components/Footer';
import TeamMember from './pages/TeamMember';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/:id" element={<TeamMember />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
