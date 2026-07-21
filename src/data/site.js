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
  areaServed: 'Metro Atlanta and the United States',
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
    image: '/img/products/control-panel-2.png',
    imagePlaceholder: 'hmi-screen',
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
    image: '/img/industries/manufacturing.jpg',
    imagePlaceholder: 'field-service',
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
    image: '/img/industries/power-plant.jpg',
    imagePlaceholder: 'wastewater',
    tagline: 'Reliable lift station and pump control for safe, sanitary operation.',
    blurb:
      'Wastewater systems depend heavily on reliable lift station operation, including pump control. Radiant devices and level sensors deliver consistent performance you can count on.',
    deep: true,
  },
  {
    slug: 'aggregate',
    title: 'Aggregate',
    nav: 'Aggregate',
    image: '/img/industries/aggregate.jpg',
    tagline: 'Automation for crushing, screening, and material handling.',
    blurb:
      'Radiant Control Systems is an industrial electrical OEM contractor. Here to serve, we have history developing products and systems derived from production.',
  },
  {
    slug: 'automobiles',
    title: 'Automobiles',
    nav: 'Automobiles',
    image: '/img/industries/automobiles.jpg',
    tagline: 'Assembly and process automation for automotive manufacturing.',
    blurb:
      'Aluminum US has a long history in the automotive industry with numerous customers over our 20-plus-year history. We help our clients realize opportunities on the line.',
  },
  {
    slug: 'logistics',
    title: 'Logistics',
    nav: 'Logistics',
    image: '/img/industries/logistics.jpg',
    tagline: 'Conveyor, sortation, and warehouse control systems.',
    blurb:
      'Radiant Control Systems delivers automation solutions for material flow and logistics. Through strategic optimization of warehouse control systems, we keep product moving.',
  },
  {
    slug: 'food-beverage',
    title: 'Food & Beverage',
    nav: 'Food & Beverage',
    image: '/img/industries/food-beverage.jpg',
    tagline: 'Sanitary, high-uptime automation for food processing.',
    blurb:
      'To provide safe and sanitary conditions, food and beverage production meets ever-changing consumer demand. We build automation systems tailored to production workflows.',
  },
  {
    slug: 'power-plant',
    title: 'Power Plant',
    nav: 'Power Plant',
    image: '/img/industries/power-plant.jpg',
    tagline: 'Control systems for conventional and renewable energy.',
    blurb:
      'Changes in consumer demand and new opportunities in renewable energy production are leading energy companies to invest in alternative sources. We help modernize the plant floor.',
  },
  {
    slug: 'oil-gas',
    title: 'Oil & Gas',
    nav: 'Oil & Gas',
    image: '/img/industries/oil-gas.jpg',
    tagline: 'Turnkey automation from upstream to downstream.',
    blurb:
      'Radiant provides turnkey automation solutions, project management, and technical services for upstream, midstream, and downstream sectors of the oil and gas industry.',
  },
  {
    slug: 'manufacturing',
    title: 'Manufacturing',
    nav: 'Manufacturing',
    image: '/img/industries/manufacturing.jpg',
    tagline: 'Modernizing the plant floor with intelligent control.',
    blurb:
      'Drawing on decades of experience, Radiant helps manufacturers transform production processes through automation and control system solutions.',
  },
];

// ---- Wastewater deep-dive sections (its own page) ------------------------
export const WASTEWATER_SECTIONS = [
  {
    title: 'Our industrial I/O controllers and data acquisition modules are used for',
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
    body:
      'With one or two I/O modules, Radiant Control Systems lets you do all of the above at the cost of hundreds, not thousands. Lead-lag pump control is facilitated with pump alternating logic, run-time data logging, and remote alarms that notify operators of fault conditions — no matter the pump station size (duplex, triplex, or quadplex). Our flexible I/O devices improve your control system and give access to more control at lower budgets.',
  },
  {
    title: 'Sanitary Sewage Overflow (SSO)',
    body:
      'Carefully monitoring the lift station is key to proper pump maintenance and seamless operation. Failure to do so can result in a Sanitary Sewage Overflow (SSO). SSOs are dangerous and expensive: hiring a pump truck to bypass the station while it is repaired is costly, EPA fines can be exorbitant, and the natural and human environment is compromised.',
  },
  {
    title: 'A logic builder for a tailor-made solution',
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
    label: 'Industries We Serve',
    children: INDUSTRIES.map((i) => ({ label: i.nav, to: `/${i.slug}` })),
  },
  { label: 'New Data Features', to: '/new-data' },
  { label: 'Capability Statement', to: '/capability-statement' },
  { label: 'Careers', to: '/careers' },
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
];

export const getService = (slug) => SERVICES.find((s) => s.slug === slug);
export const getIndustry = (slug) => INDUSTRIES.find((i) => i.slug === slug);
