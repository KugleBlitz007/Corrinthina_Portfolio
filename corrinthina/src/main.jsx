import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Brand1 from './pages/brand1.jsx'
import Brand2 from './pages/brand2.jsx'
import Brand3 from './pages/brand3.jsx'
import Contact from './pages/contact.jsx'
import {
  HashRouter,
  Routes,
  Route,
} from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/brand1" element={<Brand1 />} />
        <Route path="/brand2" element={<Brand2 />} />
        <Route path="/brand3" element={<Brand3 />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
