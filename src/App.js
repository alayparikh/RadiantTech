import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import CeoDesk from './pages/CeoDesk';
import Careers from './pages/Careers';
import ContactUs from './pages/ContactUs';
import Blog from './pages/Blog';
import Sitemap from './pages/Sitemap';
import ControlPanels from './pages/ControlPanels';
import PlcSystemIntegration from './pages/PlcSystemIntegration';
import HmiScadaIntegration from './pages/HmiScadaIntegration';
import FieldService from './pages/FieldService';
import Wastewater from './pages/Wastewater';
import Aggregate from './pages/Aggregate';
import Automobiles from './pages/Automobiles';
import Logistics from './pages/Logistics';
import FoodBeverage from './pages/FoodBeverage';
import PowerPlant from './pages/PowerPlant';
import OilGas from './pages/OilGas';
import Manufacturing from './pages/Manufacturing';
import NewData from './pages/NewData';
import CapabilityStatement from './pages/CapabilityStatement';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/ceo-desk" element={<CeoDesk />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/control-panels" element={<ControlPanels />} />
        <Route path="/plc-system-integration" element={<PlcSystemIntegration />} />
        <Route path="/hmi-scada-integration" element={<HmiScadaIntegration />} />
        <Route path="/field-service" element={<FieldService />} />
        <Route path="/wastewater-treatment" element={<Wastewater />} />
        <Route path="/aggregate" element={<Aggregate />} />
        <Route path="/automobiles" element={<Automobiles />} />
        <Route path="/logistics" element={<Logistics />} />
        <Route path="/food-beverage" element={<FoodBeverage />} />
        <Route path="/power-plant" element={<PowerPlant />} />
        <Route path="/oil-gas" element={<OilGas />} />
        <Route path="/manufacturing" element={<Manufacturing />} />
        <Route path="/new-data" element={<NewData />} />
        <Route path="/capability-statement" element={<CapabilityStatement />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;