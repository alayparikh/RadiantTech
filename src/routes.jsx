import Layout from './components/Layout';
import { SERVICES, INDUSTRIES } from './data/site';

import Home from './pages/Home';
import About from './pages/About';
import CeoDesk from './pages/CeoDesk';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Sitemap from './pages/Sitemap';
import CapabilityStatement from './pages/CapabilityStatement';
import NewData from './pages/NewData';
import Projects from './pages/Projects';
import ServicePage from './pages/ServicePage';
import IndustryPage from './pages/IndustryPage';
import NotFound from './pages/NotFound';

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about-us', element: <About /> },
      { path: 'ceo-desk', element: <CeoDesk /> },
      { path: 'careers', element: <Careers /> },
      { path: 'contact-us', element: <Contact /> },
      { path: 'blog', element: <Blog /> },
      { path: 'sitemap', element: <Sitemap /> },
      { path: 'capability-statement', element: <CapabilityStatement /> },
      { path: 'new-data', element: <NewData /> },
      { path: 'projects', element: <Projects /> },
      ...SERVICES.map((s) => ({
        path: s.slug,
        element: <ServicePage service={s} />,
      })),
      ...INDUSTRIES.map((i) => ({
        path: i.slug,
        element: <IndustryPage industry={i} />,
      })),
      { path: '404', element: <NotFound /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];
