export type Language = 'es' | 'en';
export interface Project {
  id: string;
  name: string;
  category: 'saas' | 'web';
  type: string;
  headline: string;
  description: string;
  image: string;
  imageAlt: string;
  logo?: string;
  url: string;
  domain: string;
  stack: string[];
  features: string[];
  gallery: { src: string; alt: string }[];
}
const esProjects: Project[] = [
  {
    id: 'doctorchart',
    name: 'DoctorChart',
    category: 'saas',
    type: 'SAAS · GESTIÓN CLÍNICA',
    headline: 'Más tiempo para cuidar.',
    description:
      'Una aplicación para organizar pacientes, fichas clínicas y consultas en un mismo lugar. Configurable por especialidad, con seguimiento pediátrico, vacunas y documentación en PDF.',
    image: 'assets/projects/doctorchart-growth.webp',
    imageAlt: 'DoctorChart: curva de crecimiento pediátrico con referencias de la OMS',
    logo: 'assets/projects/doctorchart-logo.svg',
    url: 'https://bycode.com.ar/doctorchart',
    domain: 'doctorchart.bycode.com.ar',
    stack: ['Go', 'Angular', 'TypeScript', 'PostgreSQL'],
    features: [
      'Fichas y consultas con categorías y campos configurables.',
      'Historia clínica, antecedentes y estudios adjuntos.',
      'Curvas de crecimiento con referencias OMS y registro de vacunación.',
      'Recetas y órdenes de estudios en PDF para imprimir.',
    ],
    gallery: [
      {
        src: 'assets/projects/doctorchart-growth.webp',
        alt: 'Curva de peso para la edad con mediciones y percentiles de referencia',
      },
      {
        src: 'assets/projects/doctorchart-vaccines.webp',
        alt: 'Panel de seguimiento de vacunas de DoctorChart',
      },
    ],
  },
  {
    id: 'pointly',
    name: 'Pointly',
    category: 'saas',
    type: 'SAAS · FIDELIZACIÓN',
    headline: 'Que cada compra sea el comienzo.',
    description:
      'Un sistema de fidelización para comercios: registro de ventas, puntos, rangos y recompensas. Una forma simple de convertir la relación con cada cliente en un vínculo que sigue creciendo.',
    image: 'assets/projects/pointly-clients.webp',
    imageAlt: 'Pointly: gestión de clientes, rangos y saldos de puntos con datos de demostración',
    logo: 'assets/projects/pointly-logo.svg',
    url: 'https://bycode.com.ar/pointly',
    domain: 'pointly.bycode.com.ar',
    stack: ['Go', 'Angular', 'TypeScript', 'PostgreSQL'],
    features: [
      'Puntos calculados al registrar ventas según las reglas del comercio.',
      'Premios, canjes y consulta del historial de puntos.',
      'Promociones con multiplicadores y fechas de vigencia.',
      'Registro de clientes por QR y consulta de saldo con DNI y país.',
    ],
    gallery: [
      {
        src: 'assets/projects/pointly-clients.webp',
        alt: 'Clientes de demostración, rangos y saldos de puntos en Pointly',
      },
      {
        src: 'assets/projects/pointly-rewards.webp',
        alt: 'Catálogo de recompensas y premios de Pointly',
      },
    ],
  },
  {
    id: 'julieta',
    name: 'Julieta Marateo',
    category: 'web',
    type: 'WEB · FOTOGRAFÍA',
    headline: 'Una mirada propia merece su espacio.',
    description:
      'Un portfolio de fotografía donde las imágenes llevan la historia. Diseño editorial, galerías y álbumes, una experiencia adaptable a cada pantalla y un panel para administrar el contenido.',
    image: 'assets/projects/julieta-marateo.jpg',
    imageAlt:
      'Página de Julieta Marateo: Naturaleza sin filtro, con un lago y montañas como portada',
    url: 'https://juli-fotografia-front-oafx.vercel.app/',
    domain: 'Julieta Marateo · Fotografía',
    stack: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'SQLite'],
    features: [
      'Dirección visual centrada en la fotografía y la narrativa de cada proyecto.',
      'Portfolio, galerías y álbumes para explorar el trabajo de Julieta.',
      'Panel de administración y gestión de archivos multimedia.',
      'Backend REST con Spring Boot, autenticación JWT y SQLite.',
    ],
    gallery: [
      {
        src: 'assets/projects/julieta-marateo.jpg',
        alt: 'Captura original de la portada de Julieta Marateo, proporcionada para este portfolio',
      },
    ],
  },
];
const enProjects: Project[] = esProjects.map((p) => ({ ...p }));
Object.assign(enProjects[0], {
  type: 'SAAS · CLINICAL MANAGEMENT',
  headline: 'More time to care.',
  description:
    'A web application that brings patients, clinical records and consultations together. Configurable by specialty, with pediatric growth tracking, vaccinations and printable PDF documents.',
  imageAlt: 'DoctorChart pediatric growth chart with WHO reference curves',
  features: [
    'Configurable categories and fields for patient records and consultations.',
    'Clinical history, background information and attached studies.',
    'Growth charts with WHO references and vaccination records.',
    'Printable prescriptions and study orders in PDF.',
  ],
  gallery: [
    {
      src: 'assets/projects/doctorchart-growth.webp',
      alt: 'Weight-for-age chart with measurements and reference percentiles',
    },
    {
      src: 'assets/projects/doctorchart-vaccines.webp',
      alt: 'DoctorChart vaccination tracking panel',
    },
  ],
});
Object.assign(enProjects[1], {
  type: 'SAAS · CUSTOMER LOYALTY',
  headline: 'Every purchase is a beginning.',
  description:
    'A loyalty system for businesses: sales records, points, tiers and rewards. A simple way to build lasting relationships with every customer.',
  imageAlt: 'Pointly customer management, tiers and points balances with demonstration data',
  features: [
    'Points calculated from recorded sales using business-specific rules.',
    'Rewards, redemptions and points history.',
    'Promotions with multipliers and validity dates.',
    'QR customer registration and points lookup by ID and country.',
  ],
  gallery: [
    {
      src: 'assets/projects/pointly-clients.webp',
      alt: 'Pointly demonstration customers, tiers and points balances',
    },
    { src: 'assets/projects/pointly-rewards.webp', alt: 'Pointly rewards catalog' },
  ],
});
Object.assign(enProjects[2], {
  type: 'WEB · PHOTOGRAPHY',
  headline: 'A unique perspective deserves a space.',
  description:
    'A photography portfolio where images tell the story. Editorial design, galleries and albums, a responsive experience and a content administration panel.',
  imageAlt: 'Julieta Marateo photography homepage with a lake and mountains',
  features: [
    'Visual direction built around photography and project storytelling.',
    'Portfolio, galleries and albums to explore Julieta’s work.',
    'Administration panel and multimedia file management.',
    'Spring Boot REST backend, JWT authentication and SQLite.',
  ],
  gallery: [
    {
      src: 'assets/projects/julieta-marateo.jpg',
      alt: 'Original screenshot of the Julieta Marateo homepage supplied for this portfolio',
    },
  ],
});
export const portfolio = {
  es: {
    meta: 'Soy Dante Rognoni, desarrollador Full Stack y creador de ByCode. Conocé DoctorChart, Pointly y mis proyectos con Go, Angular, Java y PostgreSQL.',
    skip: 'Saltar al contenido',
    menu: 'Abrir navegación',
    close: 'Cerrar',
    language: 'Switch to English',
    nav: [
      { id: 'proyectos', text: 'Proyectos' },
      { id: 'bycode', text: 'ByCode' },
      { id: 'sobre-mi', text: 'Sobre mí' },
      { id: 'stack', text: 'Stack' },
    ],
    talk: 'Hablemos',
    eyebrow: 'DESARROLLADOR FULL STACK & CREADOR DE BYCODE',
    heroLine1: 'Ideas claras.',
    heroLine2: 'Software que',
    heroLine3: 'hace la diferencia.',
    intro:
      'Soy Dante Rognoni. Transformo ideas en productos digitales: desde la primera pantalla hasta la lógica que los hace funcionar.',
    viewWork: 'Explorar proyectos',
    aboutLink: 'Un poco sobre mí',
    based: 'Mar del Plata, Argentina',
    scroll: 'SEGUÍ EXPLORANDO',
    heroCaption: 'DE LA IDEA AL PRODUCTO',
    heroNote: 'Diseño, código y propósito.',
    softwarePurpose: 'SOFTWARE CON PROPÓSITO',
    ribbon: [
      'Desarrollo Full Stack',
      'Productos SaaS',
      'Experiencias web',
      'APIs & bases de datos',
    ],
    workLabel: '01 / TRABAJO SELECCIONADO',
    workTitle: 'Código con un',
    workEmphasis: 'para qué.',
    workIntro:
      'Productos propios y proyectos a medida. Cada uno, una necesidad real convertida en una experiencia digital.',
    filters: [
      { id: 'all', label: 'Todos' },
      { id: 'saas', label: 'Productos SaaS' },
      { id: 'web', label: 'Sitios web' },
    ],
    results: 'proyectos',
    explore: 'Conocer el proyecto',
    visit: 'Visitar sitio',
    inside: 'Dentro del proyecto',
    builtWith: 'CONSTRUIDO CON',
    features: 'QUÉ RESUELVE',
    screenshots: 'El producto en detalle',
    projects: esProjects,
    companyLabel: '02 / MI EMPRESA',
    companyHeadline: 'Construir algo',
    companyEmphasis: 'propio.',
    companyDescription:
      'ByCode es mi empresa de software. Un lugar donde la tecnología se convierte en herramientas para el trabajo diario de comercios y profesionales de la salud.',
    companyDetail:
      'Desarrollo productos web y sus servicios: interfaces, APIs en Go, persistencia de datos e integraciones. DoctorChart y Pointly son parte de ese ecosistema, con aplicaciones especializadas y suscripciones independientes.',
    companyCta: 'Conocer ByCode',
    companySite: 'Software para el día a día.',
    ecosystem: [
      {
        number: '01',
        title: 'Productos especializados',
        description: 'Gestión clínica con DoctorChart. Clientes, puntos y recompensas con Pointly.',
      },
      {
        number: '02',
        title: 'Servicios conectados',
        description: 'APIs, autenticación, suscripciones e integración de pagos con Mercado Pago.',
      },
      {
        number: '03',
        title: 'Una base para seguir creando',
        description:
          'Servicios en Go para imágenes y correo, e integración de inteligencia artificial mediante un API gateway.',
      },
    ],
    aboutLabel: '03 / DETRÁS DEL CÓDIGO',
    aboutTitle: 'Dante,',
    aboutEmphasis: 'mucho gusto.',
    aboutLead:
      'Desarrollador Full Stack, Técnico Universitario en Programación por la UTN y creador de ByCode.',
    aboutBody:
      'Me gusta entender cómo funcionan las cosas y construir soluciones de principio a fin. Trabajo en el frontend, el backend y los datos, conectando decisiones técnicas con lo que necesita la persona que va a usar el producto.',
    aboutExtra:
      'Hoy mi trabajo reúne aplicaciones en Go y Angular, servicios con Java y Spring Boot, bases de datos e interfaces con identidad propia. Siempre con curiosidad por aprender y mejorar lo que construyo.',
    cv: 'Descargar CV',
    profileCaption: 'Entre el código, el mar y nuevas ideas.',
    portraitAlt: 'Dante Rognoni en Mar del Plata',
    journey: 'UN CAMINO EN CONSTRUCCIÓN',
    experience: [
      {
        period: 'ACTUALIDAD',
        title: 'ByCode · Desarrollo de productos',
        description:
          'DoctorChart, Pointly y servicios del ecosistema. Desarrollo Full Stack con Go, Angular y PostgreSQL.',
      },
      {
        period: 'PROYECTO WEB',
        title: 'Julieta Marateo · Fotografía',
        description:
          'Portfolio visual, galerías y gestión de contenido. Angular, Spring Boot y SQLite.',
      },
      {
        period: 'DIC 2025 — MAR 2026',
        title: 'Stock Store · Proyecto final',
        description:
          'Tienda online y back office con Java, Spring Boot y Angular. Autenticación JWT, Mercado Pago y correo SMTP.',
      },
      {
        period: 'FORMACIÓN',
        title: 'UTN · Programación',
        description:
          'Tecnicatura Universitaria en Programación. Bases de programación, estructuras de datos y desarrollo de software.',
      },
    ],
    stackLabel: '04 / HERRAMIENTAS & CONOCIMIENTOS',
    stackTitle: 'El stack detrás',
    stackEmphasis: 'de las ideas.',
    stackIntro:
      'Tecnologías que uso para conectar una buena interfaz con una solución sólida por dentro.',
    skills: [
      {
        index: '01',
        title: 'Lenguajes',
        description: 'La base para construir en distintos entornos.',
        items: ['Go', 'Java', 'TypeScript', 'JavaScript', 'SQL', 'C', 'HTML', 'CSS'],
      },
      {
        index: '02',
        title: 'Frontend & experiencia',
        description: 'Interfaces responsivas con atención al detalle.',
        items: ['Angular', 'RxJS', 'Tailwind CSS', 'SCSS', 'Angular Material', 'Diseño responsive'],
      },
      {
        index: '03',
        title: 'Backend & datos',
        description: 'Servicios, persistencia e integraciones.',
        items: [
          'APIs REST',
          'Spring Boot',
          'Spring Security',
          'JWT',
          'Hibernate / JPA',
          'PostgreSQL',
          'MySQL',
          'SQLite',
          'MongoDB',
        ],
      },
      {
        index: '04',
        title: 'Herramientas & flujo',
        description: 'Del desarrollo a la revisión y la entrega.',
        items: [
          'DBeaver',
          'Git & GitHub',
          'Postman',
          'Maven',
          'Mockito',
          'Scrum',
          'Mercado Pago',
          'Almacenamiento S3',
        ],
      },
      {
        index: '05',
        title: 'IA & análisis',
        description: 'Exploración de datos y nuevas posibilidades.',
        items: ['Ollama', 'LLMs locales', 'Integración de IA', 'Looker Studio', 'Power BI'],
      },
    ],
    archiveLabel: 'TAMBIÉN EN MI RECORRIDO',
    archiveTitle: 'Más proyectos, más aprendizaje.',
    githubCta: 'Explorar mi GitHub',
    archive: [
      {
        name: 'Stock Store',
        type: 'E-commerce & inventario',
        stack: 'Java · Spring Boot · Angular',
      },
      { name: 'Eventify', type: 'Organización de eventos', stack: 'Aplicación web' },
      { name: 'Money Tracker', type: 'Finanzas personales', stack: 'Seguimiento de ahorros' },
      { name: 'Dashboards', type: 'Visualización de datos', stack: 'Looker Studio · Power BI' },
      { name: 'Gestión de gimnasios', type: 'Proyecto UTN', stack: 'Java · JSON' },
      { name: 'Reservas de hotel', type: 'Proyecto UTN', stack: 'C · Archivos binarios' },
    ],
    curiosity: 'MÁS ALLÁ DEL SOFTWARE',
    curiosityTitle: 'La curiosidad también es parte de mi stack.',
    curiosityText:
      'Me interesan la física y las preguntas que abren nuevas formas de mirar el mundo. Esa misma curiosidad es la que me lleva a investigar, aprender y construir.',
    contactLabel: '05 / EL PRÓXIMO PROYECTO',
    contactTitle: '¿Lo hacemos',
    contactEmphasis: 'realidad?',
    contactIntro:
      '¿Tenés una idea, un proyecto o una oportunidad para trabajar juntos? Me gustaría conocerla.',
    emailLabel: 'ESCRIBIME',
    name: 'Tu nombre',
    email: 'Tu email',
    message: 'Contame tu idea',
    namePlaceholder: '¿Cómo te llamás?',
    emailPlaceholder: 'hola@tuempresa.com',
    messagePlaceholder: 'Un poco sobre lo que tenés en mente…',
    send: 'Enviar mensaje',
    sending: 'Enviando…',
    success: '¡Mensaje enviado! Gracias por escribirme.',
    error: 'No se pudo enviar. Podés escribirme directamente a danrognoni@outlook.es.',
    footer: 'Hecho con intención. Construido con código.',
    backTop: 'Volver arriba',
    rights: 'Dante Rognoni',
  },
  en: {
    meta: 'Dante Rognoni, Full Stack Developer and creator of ByCode. Explore DoctorChart, Pointly and projects built with Go, Angular, Java and PostgreSQL.',
    skip: 'Skip to content',
    menu: 'Open navigation',
    close: 'Close',
    language: 'Cambiar a español',
    nav: [
      { id: 'proyectos', text: 'Projects' },
      { id: 'bycode', text: 'ByCode' },
      { id: 'sobre-mi', text: 'About' },
      { id: 'stack', text: 'Stack' },
    ],
    talk: 'Let’s talk',
    eyebrow: 'FULL STACK DEVELOPER & CREATOR OF BYCODE',
    heroLine1: 'Clear ideas.',
    heroLine2: 'Software that',
    heroLine3: 'makes a difference.',
    intro:
      'I’m Dante Rognoni. I turn ideas into digital products, from the first screen to the logic that makes everything work.',
    viewWork: 'Explore projects',
    aboutLink: 'A little about me',
    based: 'Mar del Plata, Argentina',
    scroll: 'KEEP EXPLORING',
    heroCaption: 'FROM IDEA TO PRODUCT',
    heroNote: 'Design, code and purpose.',
    softwarePurpose: 'SOFTWARE WITH PURPOSE',
    ribbon: ['Full Stack development', 'SaaS products', 'Web experiences', 'APIs & databases'],
    workLabel: '01 / SELECTED WORK',
    workTitle: 'Code with',
    workEmphasis: 'a purpose.',
    workIntro:
      'Own products and custom projects. Each one turns a real need into a digital experience.',
    filters: [
      { id: 'all', label: 'All' },
      { id: 'saas', label: 'SaaS products' },
      { id: 'web', label: 'Websites' },
    ],
    results: 'projects',
    explore: 'Explore project',
    visit: 'Visit website',
    inside: 'Inside the project',
    builtWith: 'BUILT WITH',
    features: 'WHAT IT SOLVES',
    screenshots: 'A closer look',
    projects: enProjects,
    companyLabel: '02 / MY COMPANY',
    companyHeadline: 'Building something',
    companyEmphasis: 'of my own.',
    companyDescription:
      'ByCode is my software company. A place where technology becomes tools for the everyday work of businesses and healthcare professionals.',
    companyDetail:
      'I develop web products and their services: interfaces, Go APIs, data persistence and integrations. DoctorChart and Pointly belong to this ecosystem, with specialized applications and independent subscriptions.',
    companyCta: 'Explore ByCode',
    companySite: 'Software for everyday work.',
    ecosystem: [
      {
        number: '01',
        title: 'Specialized products',
        description:
          'Clinical management with DoctorChart. Customers, points and rewards with Pointly.',
      },
      {
        number: '02',
        title: 'Connected services',
        description: 'APIs, authentication, subscriptions and Mercado Pago payment integration.',
      },
      {
        number: '03',
        title: 'A foundation for new ideas',
        description:
          'Go services for images and email, and artificial intelligence integration through an API gateway.',
      },
    ],
    aboutLabel: '03 / BEHIND THE CODE',
    aboutTitle: 'Dante,',
    aboutEmphasis: 'nice to meet you.',
    aboutLead: 'Full Stack Developer, UTN graduate in Programming and creator of ByCode.',
    aboutBody:
      'I like understanding how things work and building solutions from start to finish. I work across frontend, backend and data, connecting technical decisions with the needs of the person using the product.',
    aboutExtra:
      'Today my work spans Go and Angular applications, Java and Spring Boot services, databases and interfaces with their own identity. Always curious to learn and improve what I build.',
    cv: 'Download CV',
    profileCaption: 'Between code, the sea and new ideas.',
    portraitAlt: 'Dante Rognoni in Mar del Plata',
    journey: 'A PATH IN PROGRESS',
    experience: [
      {
        period: 'CURRENT',
        title: 'ByCode · Product development',
        description:
          'DoctorChart, Pointly and ecosystem services. Full Stack development with Go, Angular and PostgreSQL.',
      },
      {
        period: 'WEB PROJECT',
        title: 'Julieta Marateo · Photography',
        description:
          'Visual portfolio, galleries and content management. Angular, Spring Boot and SQLite.',
      },
      {
        period: 'DEC 2025 — MAR 2026',
        title: 'Stock Store · Final project',
        description:
          'Online store and back office with Java, Spring Boot and Angular. JWT authentication, Mercado Pago and SMTP email.',
      },
      {
        period: 'EDUCATION',
        title: 'UTN · Programming',
        description:
          'University technical degree in Programming. Programming fundamentals, data structures and software development.',
      },
    ],
    stackLabel: '04 / TOOLS & KNOWLEDGE',
    stackTitle: 'The stack behind',
    stackEmphasis: 'the ideas.',
    stackIntro: 'Technologies I use to connect thoughtful interfaces with solid foundations.',
    skills: [
      {
        index: '01',
        title: 'Languages',
        description: 'A foundation for building across environments.',
        items: ['Go', 'Java', 'TypeScript', 'JavaScript', 'SQL', 'C', 'HTML', 'CSS'],
      },
      {
        index: '02',
        title: 'Frontend & experience',
        description: 'Responsive interfaces with attention to detail.',
        items: ['Angular', 'RxJS', 'Tailwind CSS', 'SCSS', 'Angular Material', 'Responsive design'],
      },
      {
        index: '03',
        title: 'Backend & data',
        description: 'Services, persistence and integrations.',
        items: [
          'REST APIs',
          'Spring Boot',
          'Spring Security',
          'JWT',
          'Hibernate / JPA',
          'PostgreSQL',
          'MySQL',
          'SQLite',
          'MongoDB',
        ],
      },
      {
        index: '04',
        title: 'Tools & workflow',
        description: 'From development to review and delivery.',
        items: [
          'DBeaver',
          'Git & GitHub',
          'Postman',
          'Maven',
          'Mockito',
          'Scrum',
          'Mercado Pago',
          'S3 storage',
        ],
      },
      {
        index: '05',
        title: 'AI & analytics',
        description: 'Exploring data and new possibilities.',
        items: ['Ollama', 'Local LLMs', 'AI integration', 'Looker Studio', 'Power BI'],
      },
    ],
    archiveLabel: 'ALSO ALONG THE WAY',
    archiveTitle: 'More projects, more learning.',
    githubCta: 'Explore my GitHub',
    archive: [
      {
        name: 'Stock Store',
        type: 'E-commerce & inventory',
        stack: 'Java · Spring Boot · Angular',
      },
      { name: 'Eventify', type: 'Event organization', stack: 'Web application' },
      { name: 'Money Tracker', type: 'Personal finance', stack: 'Savings tracking' },
      { name: 'Dashboards', type: 'Data visualization', stack: 'Looker Studio · Power BI' },
      { name: 'Gym management', type: 'UTN project', stack: 'Java · JSON' },
      { name: 'Hotel reservations', type: 'UTN project', stack: 'C · Binary files' },
    ],
    curiosity: 'BEYOND SOFTWARE',
    curiosityTitle: 'Curiosity is part of my stack, too.',
    curiosityText:
      'I’m interested in physics and questions that open up new ways of seeing the world. That same curiosity drives me to research, learn and build.',
    contactLabel: '05 / THE NEXT PROJECT',
    contactTitle: 'Let’s make',
    contactEmphasis: 'it happen.',
    contactIntro:
      'Have an idea, a project or an opportunity to work together? I’d love to hear about it.',
    emailLabel: 'GET IN TOUCH',
    name: 'Your name',
    email: 'Your email',
    message: 'Tell me about your idea',
    namePlaceholder: 'What’s your name?',
    emailPlaceholder: 'hello@yourcompany.com',
    messagePlaceholder: 'A little about what you have in mind…',
    send: 'Send message',
    sending: 'Sending…',
    success: 'Message sent! Thanks for getting in touch.',
    error: 'Could not send your message. You can email me directly at danrognoni@outlook.es.',
    footer: 'Made with intention. Built with code.',
    backTop: 'Back to top',
    rights: 'Dante Rognoni',
  },
};
