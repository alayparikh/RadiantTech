// Single source of truth for company facts, navigation, and page content.
// Used by components, pages, SEO/JSON-LD, sitemap, and llms.txt generation.

export const COMPANY = {
  name: 'Radiant Control Systems',
  legalName: 'Radiant Control Systems LLC',
  tagline: 'Empowering Industry with Intelligent Control',
  founded: '2018',
  founder: 'Ami Patwa',
  ceo: 'Tejas "TJ" Patwa',
  phone: '(470) 915-0965',
  phoneHref: 'tel:+14709150965',
  email: 'info@radiantcontrolsystems.com',
  address: {
    street: '6340 Sugarloaf Parkway, Suite # 200',
    city: 'Duluth',
    state: 'GA',
    zip: '30097',
    country: 'US',
  },
  mapUrl: 'https://maps.app.goo.gl/5pU7gQYLf63gKn94A',
  areaServed: 'Georgia, the Southeast, and nationwide',
  regions: ['Georgia', 'Metro Atlanta', 'the Southeast United States'],
  social: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/company/radiant-control-systems-llc',
  },
  certs: {
    gdotVendorId: '19325',
    naics: ['541511', '541512', '541330'],
    gmdc: 'AT249607',
    nigp: ['69031', '69032', '03125', '92040'],
    cage: '10NB0',
    uei: 'S5L4B99AGYX3',
    eVerify: '2293567',
  },
  siteUrl: 'https://radiantcontrolsystems.com',
};

// Short factual statements LLMs / answer engines can lift verbatim.
export const KNOWS_ABOUT = [
  'Industrial automation',
  'UL-508A control panel design',
  'PLC programming and integration',
  'HMI and SCADA integration',
  'Allen-Bradley ControlLogix',
  'Siemens S7 / TIA Portal',
  'Wonderware InTouch',
  'FactoryTalk View',
  'Ignition SCADA',
  'Lift station and pump control',
  'Wastewater treatment automation',
  'Motor control centers (MCC)',
  'Variable frequency drives (VFD)',
  'Field service and commissioning',
];

// ---- Services ------------------------------------------------------------
export const SERVICES = [
  {
    slug: 'control-panels',
    title: 'Control Panels',
    nav: 'Control Panels',
    icon: 'CircuitBoard',
    image: '/img/products/control-panels-banner.jpg',
    tagline: 'UL-508A & NEC-compliant panel design and fabrication.',
    definition:
      'A control panel is an engineered enclosure that houses the electrical components — PLCs, drives, starters, and protection — that run a machine or process. Radiant designs and builds them to UL-508A and NEC standards.',
    intro:
      'We specialize in control panel design and fabrication built to UL-508A and NEC code, engineered for reliability in demanding industrial environments.',
    highlightTitle: 'Precision-engineered control panels for seamless automation',
    bullets: [
      'PLC control panels',
      'Motor starter control panels',
      'VFD panels',
      'Pump control panels',
    ],
    faqs: [
      {
        q: 'Does Radiant build UL-508A listed control panels?',
        a: 'Yes. Radiant Control Systems designs and fabricates control panels to UL-508A and NEC code, including PLC, motor starter, VFD, and pump control panels.',
      },
      {
        q: 'What types of control panels do you build?',
        a: 'PLC control panels, motor starter control panels, VFD (variable frequency drive) panels, and pump control panels for water, power, and manufacturing applications.',
      },
    ],
  },
  {
    slug: 'plc-system-integration',
    title: 'PLC System Integration',
    nav: 'PLC System Integration',
    icon: 'Cpu',
    image: '/img/products/control-panel.jpg',
    imagePlaceholder: 'plc-panel',
    heroImage: '/img/products/instrumentation.jpg',
    tagline: 'Programming, commissioning, and integration of leading PLC platforms.',
    definition:
      'PLC system integration is the seamless incorporation of Programmable Logic Controllers into industrial processes to deliver reliable automation and control — from initial design through programming and commissioning.',
    intro:
      'PLC system integration involves the seamless incorporation of Programmable Logic Controllers into industrial processes, ensuring efficient automation and control. Our expertise spans initial design to programming and commissioning, adhering to industry standards for reliability and safety.',
    highlightTitle: 'Expertise in leading PLC platforms',
    bullets: ['Rockwell Allen-Bradley', 'Siemens S7', 'Modicon', 'Automation Direct'],
    faqs: [
      {
        q: 'Which PLC brands does Radiant program?',
        a: 'Radiant integrates and programs Rockwell Allen-Bradley (ControlLogix, CompactLogix, MicroLogix, SLC 500, PLC5), Siemens S5/S7 and TIA Portal, Schneider/Modicon, GE Intelligent Platforms, Automation Direct, and Mitsubishi.',
      },
      {
        q: 'What does PLC system integration include?',
        a: 'It spans design, programming, commissioning, and startup — customizing PLC logic to optimize functionality, improve safety, and increase operational efficiency.',
      },
    ],
  },
  {
    slug: 'hmi-scada-integration',
    title: 'HMI/SCADA Integration',
    nav: 'HMI/SCADA Integration',
    icon: 'MonitorCog',
    image: '/img/products/control-panel-2.jpg',
    imagePlaceholder: 'hmi-screen',
    heroImage: '/img/products/wastewater-monitor.jpg',
    tagline: 'Real-time monitoring, control, and visualization across your plant.',
    definition:
      'HMI/SCADA integration connects operators to their process through real-time monitoring, control, and data visualization — the interface layer that sits on top of PLCs and field devices.',
    intro:
      'HMI/SCADA integration is pivotal in modern industrial automation, enabling real-time monitoring, control, and visualization of operational data. We design intuitive interfaces that improve operator efficiency and support remote monitoring and data analysis.',
    highlightTitle: 'Comprehensive expertise in leading HMI/SCADA platforms',
    bullets: [
      'Aviva Wonderware / InTouch',
      'GE iFIX',
      'Rockwell FactoryTalk View ME',
      'Ignition',
      'LabVIEW',
      'VTScada',
    ],
    faqs: [
      {
        q: 'What SCADA platforms does Radiant support?',
        a: 'Wonderware InTouch, GE iFIX, Rockwell FactoryTalk View SE/ME, Ignition, LabVIEW, and VTScada.',
      },
      {
        q: 'Can you integrate HMI/SCADA with existing PLCs?',
        a: 'Yes. We customize HMI/SCADA solutions to integrate with existing PLCs and field devices, and can add web-accessible operator interfaces for remote supervision.',
      },
    ],
  },
  {
    slug: 'field-service',
    title: 'Field Service',
    nav: 'Field Service',
    icon: 'Wrench',
    image: '/img/products/field-service.jpg',
    tagline: 'On-site training, commissioning, troubleshooting, and updates.',
    definition:
      'Field service covers the on-site work that keeps automation systems running: commissioning new installations, troubleshooting faults, training operators, and rolling out PLC/SCADA updates.',
    intro:
      'Our on-site services encompass critical tasks that keep industrial automation systems running: training operators and maintenance personnel on PLC and SCADA systems, commissioning newly installed or upgraded systems, and troubleshooting complex issues swiftly.',
    highlightTitle: 'Comprehensive on-site services',
    bullets: [
      'On-site training',
      'Commissioning',
      'Troubleshooting',
      'PLC/SCADA programming updates',
    ],
    faqs: [
      {
        q: 'Does Radiant provide on-site commissioning and support?',
        a: 'Yes. Radiant provides on-site training, commissioning, troubleshooting, and PLC/SCADA programming updates to keep systems reliable and current.',
      },
    ],
  },
];

// ---- Industries ----------------------------------------------------------
export const INDUSTRIES = [
  {
    slug: 'wastewater-treatment',
    title: 'Wastewater',
    nav: 'Wastewater',
    icon: 'Waves',
    image: '/img/industries/wastewater.jpg',
    tagline: 'Reliable lift station and pump control for safe, sanitary operation.',
    desc: 'Smart lift-station control and level monitoring for reliable, sanitary operation.',
    blurb:
      'Wastewater systems depend heavily on reliable lift station operation, including pump control. Radiant devices and level sensors deliver consistent performance you can count on.',
    deep: true,
  },
  {
    slug: 'aggregate',
    title: 'Aggregate',
    nav: 'Aggregate',
    icon: 'Mountain',
    image: '/img/industries/aggregate.jpg',
    tagline: 'Automation for crushing, screening, and material handling.',
    desc: 'Automated systems for crushing, screening, and material handling to maximize throughput.',
    blurb:
      'Radiant Control Systems is an industrial electrical OEM contractor. Here to serve, we have history developing products and systems derived from production.',
  },
  {
    slug: 'automobiles',
    title: 'Automobiles',
    nav: 'Automobiles',
    icon: 'Car',
    image: '/img/industries/automobiles.jpg',
    tagline: 'Assembly and process automation for automotive manufacturing.',
    desc: 'Precision automation for modern automotive manufacturing and assembly lines.',
    blurb:
      'Aluminum US has a long history in the automotive industry with numerous customers over our 20-plus-year history. We help our clients realize opportunities on the line.',
  },
  {
    slug: 'logistics',
    title: 'Logistics',
    nav: 'Logistics',
    icon: 'Truck',
    image: '/img/industries/logistics.jpg',
    tagline: 'Conveyor, sortation, and warehouse control systems.',
    desc: 'Intelligent automation for warehousing, sortation, and supply-chain efficiency.',
    blurb:
      'Radiant Control Systems delivers automation solutions for material flow and logistics. Through strategic optimization of warehouse control systems, we keep product moving.',
  },
  {
    slug: 'food-beverage',
    title: 'Food & Beverage',
    nav: 'Food & Beverage',
    icon: 'Wine',
    image: '/img/industries/food-beverage.jpg',
    tagline: 'Sanitary, high-uptime automation for food processing.',
    desc: 'Hygienic, efficient automation for processing, packaging, and quality assurance.',
    blurb:
      'To provide safe and sanitary conditions, food and beverage production meets ever-changing consumer demand. We build automation systems tailored to production workflows.',
  },
  {
    slug: 'power-plant',
    title: 'Power Plant',
    nav: 'Power Plant',
    icon: 'Zap',
    image: '/img/industries/power-plant.jpg',
    tagline: 'Control systems for conventional and renewable energy.',
    desc: 'Reliable control and monitoring for uninterrupted power generation.',
    blurb:
      'Changes in consumer demand and new opportunities in renewable energy production are leading energy companies to invest in alternative sources. We help modernize the plant floor.',
  },
  {
    slug: 'oil-gas',
    title: 'Oil & Gas',
    nav: 'Oil & Gas',
    icon: 'Flame',
    image: '/img/industries/oil-gas.jpg',
    tagline: 'Turnkey automation from upstream to downstream.',
    desc: 'Robust automation for upstream, midstream, and downstream operations.',
    blurb:
      'Radiant provides turnkey automation solutions, project management, and technical services for upstream, midstream, and downstream sectors of the oil and gas industry.',
  },
  {
    slug: 'manufacturing',
    title: 'Manufacturing',
    nav: 'Manufacturing',
    icon: 'Factory',
    image: '/img/industries/manufacturing.jpg',
    tagline: 'Modernizing the plant floor with intelligent control.',
    desc: 'End-to-end automation to improve quality, productivity, and operational agility.',
    blurb:
      'Drawing on decades of experience, Radiant helps manufacturers transform production processes through automation and control system solutions.',
  },
];

// ---- Wastewater deep-dive sections (its own page) ------------------------
export const WASTEWATER_SECTIONS = [
  {
    title: 'Our industrial I/O controllers and data acquisition modules are used for',
    image: '/img/industries/wastewater-1.jpg',
    imageAlt: 'Radiant clarifier drive and control box at a wastewater treatment plant',
    list: [
      'Level measurement',
      'VFD control',
      'Hour metering',
      'Remote data acquisition',
      'Pump control',
      'Pump condition monitoring',
      'Pump alternating',
      'Local and remote alarms',
    ],
  },
  {
    title: 'Lead-lag pump control can be facilitated',
    image: '/img/industries/wastewater-2.jpg',
    imageAlt: 'Wastewater clarifier bridge with telemetry antenna and control panel',
    body:
      'With one or two I/O modules, Radiant Control Systems lets you do all of the above at the cost of hundreds, not thousands. Lead-lag pump control is facilitated with pump alternating logic, run-time data logging, and remote alarms that notify operators of fault conditions — no matter the pump station size (duplex, triplex, or quadplex). Our flexible I/O devices improve your control system and give access to more control at lower budgets.',
  },
  {
    title: 'Sanitary Sewage Overflow (SSO)',
    image: '/img/industries/wastewater.jpg',
    imageAlt: 'Aerial view of a municipal wastewater treatment plant',
    body:
      'Carefully monitoring the lift station is key to proper pump maintenance and seamless operation. Failure to do so can result in a Sanitary Sewage Overflow (SSO). SSOs are dangerous and expensive: hiring a pump truck to bypass the station while it is repaired is costly, EPA fines can be exorbitant, and the natural and human environment is compromised.',
  },
  {
    title: 'A logic builder for a tailor-made solution',
    image: '/img/industries/wastewater-1.jpg',
    imageAlt: 'Wastewater lift-station control equipment',
    body:
      'Our comprehensive suite of products allows engineers and control system integrators to mix and match I/O with an intelligent custom logic builder for a tailor-made, budget-friendly lift station pump controller.',
  },
];

// ---- Capability Statement data ------------------------------------------
export const CAPABILITY = {
  coreCompetencies: [
    'Control Systems Design',
    'Electrical Engineering',
    'Engineering Management',
    'PLC',
    'SCADA',
    'MCC Engineering and Design',
  ],
  industriesServed: [
    'Waste Water Plants',
    'Clean Water Plants',
    'Aggregate Plants',
    'Oil & Gas Industries',
    'Automobile',
    'Food & Beverage',
    'Power Plants',
    'Sugar Industries',
  ],
  hmiScada: 'Wonderware InTouch, iFIX, FactoryTalk View SE/ME, EZ Automation, Ignition, Optix',
  plcPlatforms: [
    'ControlLogix, CompactLogix, MicroLogix, SLC 500, PLC5',
    'Siemens — S5, S7, TIA Portal',
    'Schneider / Modicon',
    'GE Intelligent Platforms',
    'Automation Direct',
    'Mitsubishi',
  ],
  networks: 'Ethernet TCP/IP, ControlNet, RS232, DeviceNet, Profibus network, Profinet',
  motionControl: 'VFDs, Encoders, Servo Drives and Resolvers',
  extras: [
    'Control Panel & System Design',
    'Control System Integration / Upgrade',
    'Developing Project Scope & Capital Budget',
    'Timely development & smooth implementation of automation systems',
  ],
};

// ---- Careers -------------------------------------------------------------
export const JOBS = [
  { title: 'Sales Engineer', experience: '3 years (Preferred)' },
  { title: 'Personal Assistant', experience: null },
  { title: 'Junior Controls Engineer', experience: null },
];

// ---- Why Radiant (real facts only — no invented claims) ------------------
export const WHY_RADIANT = [
  {
    icon: 'ShieldCheck',
    title: 'DBE & MBE Certified',
    text: 'Georgia DBE and MBE certified with full vendor registration for public and municipal procurement.',
  },
  {
    icon: 'Clock',
    title: '100+ Years Combined',
    text: 'A team with more than a century of combined control-engineering experience.',
  },
  {
    icon: 'Droplets',
    title: 'Water & Wastewater Specialists',
    text: 'Deep expertise in lift stations, pump control, and municipal SCADA systems.',
  },
  {
    icon: 'Cpu',
    title: 'Platform-Agnostic',
    text: 'Allen-Bradley, Siemens, Ignition, Wonderware — we build in your stack, not ours.',
  },
];

// ---- Projects -----------------------------------------------------------
export const PROJECTS = [
  {
    id: 'aditya-birla',
    title: 'Electrical Engineering & Electrical Drawings — Aditya Birla Plant',
    customer: 'Aditya Birla',
    location: 'Dalton, GA',
    category: 'Manufacturing',
    featured: true,
    photo: '/img/projects/aditya-birla.jpg',
    description:
      'Electrical engineering and electrical drawings for the Aditya Birla plant in Dalton, GA. The overall program spans four phases: (1) prepare drawings for the existing electrical systems on the North side of the plant, (2) supply the required parts, (3) develop field wiring drawings for the new layout — consolidating all electrical equipment into a single electrical house, and (4) perform the electrical installation. Radiant is currently delivering Phase 1 (Electrical Engineering); proposals for the remaining phases follow on completion.',
    scopeOfServices: [
      'Identify all electrical devices on the North side of the plant',
      'Document electrical connections and perform reverse engineering',
      'Prepare detailed electrical drawings for the existing electrical devices',
    ],
    scope: ['Electrical engineering', 'Electrical drawings', 'Reverse engineering', 'Single electrical house design'],
    software: [],
    equipment: [],
  },
  {
    id: 'conf-water',
    title: 'Water Treatment SCADA Integration',
    customer: 'Client: Confidential',
    location: 'Georgia',
    category: 'Water Treatment',
    featured: true,
    scope: ['HMI upgrade', 'PLC modernization', 'SCADA integration'],
    software: ['FactoryTalk View'],
    equipment: ['Allen-Bradley ControlLogix'],
    photo: '/img/projects/water-scada.jpg',
  },
  {
    id: 'conf-lift',
    title: 'Lift Station Control Upgrade',
    customer: 'Client: Confidential',
    location: 'Georgia',
    category: 'Wastewater',
    featured: true,
    scope: ['Lift station controls', 'Telemetry / radio', 'Pump alternation'],
    software: ['Ignition SCADA'],
    equipment: ['Allen-Bradley CompactLogix'],
    photo: '/img/projects/lift-station.jpg',
  },
  {
    id: 'conf-panel',
    title: 'Control Panel & MCC Build',
    customer: 'Client: Confidential',
    location: 'Georgia',
    category: 'Manufacturing',
    scope: ['UL-508A panel design', 'Electrical engineering', 'Commissioning'],
    software: ['Studio 5000'],
    equipment: ['VFDs, MCC'],
    photo: '/img/projects/control-panel-mcc.jpg',
  },
];

// ---- Navigation ----------------------------------------------------------
export const NAV = [
  { label: 'Home', to: '/' },
  {
    label: 'About Us',
    to: '/about-us',
    children: [
      { label: 'About Us', to: '/about-us' },
      { label: 'CEO Desk', to: '/ceo-desk' },
    ],
  },
  {
    label: 'Services',
    children: SERVICES.map((s) => ({ label: s.nav, to: `/${s.slug}` })),
  },
  {
    label: 'Industries',
    children: INDUSTRIES.map((i) => ({ label: i.nav, to: `/${i.slug}` })),
  },
  { label: 'Projects', to: '/projects' },
  {
    label: 'Resources',
    children: [
      { label: 'Capability Statement', to: '/capability-statement' },
      { label: 'New Data Features', to: '/new-data' },
      { label: 'Careers', to: '/careers' },
      { label: 'Blog', to: '/blog' },
    ],
  },
];

export const STATS = [
  { value: '100+', label: 'Years combined experience' },
  { value: '2018', label: 'Founded' },
  { value: '8', label: 'Industries served' },
  { value: 'UL-508A', label: 'Panel standard' },
];

// Platform / technology names for the kinetic marquee — reads "engineered"
// and doubles as SEO/GEO keyword surface.
export const PLATFORMS = [
  'Allen-Bradley',
  'ControlLogix',
  'Siemens S7',
  'TIA Portal',
  'Modicon',
  'Wonderware',
  'FactoryTalk View',
  'Ignition',
  'GE iFIX',
  'VTScada',
  'Profibus',
  'EtherNet/IP',
  'UL-508A',
  'VFD Drives',
  'MCC Design',
];

// Client / partner organizations — shown as styled text (not trademarked logos).
export const CLIENTS = [
  'Aditya Birla',
  'SKF',
  'Volkswagen',
  'AMTECH Drives',
  'Fulton County',
];

export const CLIENT_LOGOS = [
  { src: '/img/clients/logo1.jpg', alt: 'Client logo' },
  { src: '/img/clients/logo2.jpg', alt: 'Tesla' },
  { src: '/img/clients/logo3.jpg', alt: 'Fulton County' },
  { src: '/img/clients/logo4.jpg', alt: 'Amtech' },
  { src: '/img/clients/logo5.jpg', alt: 'Client logo' },
];

export const CERTS = [
  { src: '/img/certs/mbe.png', alt: 'MBE Certified' },
  { src: '/img/certs/dbe.jpg', alt: 'DBE Certified' },
  { src: '/img/certs/nmsdc.png', alt: 'NMSDC Minority Business Enterprise' },
  { src: '/img/certs/sbsd.png', alt: 'Georgia SBSD Small Business Certified' },
];

export const getService = (slug) => SERVICES.find((s) => s.slug === slug);
export const getIndustry = (slug) => INDUSTRIES.find((i) => i.slug === slug);
