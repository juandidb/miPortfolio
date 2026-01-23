export const projects = [
  {
    id: 'deli-app',
    title: {
      en: 'deli.app - WebApp',
      es: 'deli.app - WebApp'
    },
    description: {
      en: 'A delivery webapp for ordering and tracking food and items, built with modern web technologies.',
      es: 'Webapp de delivery para pedir y rastrear comidas y envíos, construida con tecnologías web modernas.'
    },
    tech: ['React', 'Node.js', 'Tailwind CSS', 'TypeScript', 'SQL', 'API Integrations'],
    category: { en: 'Web Development', es: 'Desarrollo Web' },
    image: `${import.meta.env.BASE_URL}assets/proyectos/del.app.png`,
    github: '',
    live: ''
  },
  {
    id: 'divdev-landing',
    title: {
      en: 'divstudio - Landing Page',
      es: 'divstudio - Landing Page'
    },
    description: {
      en: 'A modern and responsive landing page created for div.dev, focused on clear communication and conversion.',
      es: 'Landing page moderna y responsiva creada para divstudio, enfocada en comunicación clara y conversión.'
    },
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    category: { en: 'Web Development', es: 'Desarrollo Web' },
    image: `${import.meta.env.BASE_URL}assets/proyectos/divdev.png`,
    github: '',
    live: 'https://divstudio.me/'
  },
  {
    id: 'carmax',
    title: {
      en: 'CarMax - Inventory Dashboard',
      es: 'CarMax - Panel de Inventario'
    },
    description: {
      en: 'Full-featured web application with an admin dashboard that allows CarMax staff to add and manage vehicles, apply filters and view analytics. Includes inventory management, responsive UI and admin CRUD operations.',
      es: 'Aplicación web completa con panel de administración que permite al personal de CarMax agregar y gestionar vehículos, aplicar filtros y ver analíticas. Incluye gestión de inventario, interfaz responsiva y operaciones CRUD para administradores.'
    },
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    category: { en: 'Web Development', es: 'Desarrollo Web' },
    image: `${import.meta.env.BASE_URL}assets/proyectos/carmax.png`,
    github: '',
    live: 'https://carmax-3eq2pvlim-carmax9dj.vercel.app/'
  },
  {
    id: 'rInfoDarkMode',
    title: {
      en: 'rInfo - Dark Mode Update',
      es: 'rInfo - Actualización Modo Oscuro'
    },
    description: {
      en: 'An Update of the CMRE environment (used by the National University of La Plata) with improvements to the UX/UI interface.',
      es: 'Actualización del entorno CMRE (usado por la Universidad Nacional de La Plata) con mejoras en la interfaz UX/UI.'
    },
    tech: ['JAVA', 'UX Design'],
    category: { en: 'JAVA Development', es: 'Desarrollo JAVA' },
    image: `${import.meta.env.BASE_URL}assets/proyectos/rinfo-darkmode.png`,
    github: 'https://github.com/juandidb/rInfo-3.2',
    live: ''
  },
  {
    id: 'tasks-api',
    title: {
      en: 'Task Manager API',
      es: 'API de Gestión de Tareas'
    },
    description: {
      en: 'A RESTful API for managing tasks built with Node.js, Express and PostgreSQL. Includes authentication and CRUD endpoints.',
      es: 'API REST para gestionar tareas construida con Node.js, Express y PostgreSQL. Incluye autenticación y endpoints CRUD.'
    },
    tech: ['Node.js', 'Express', 'PostgreSQL', 'TypeScript'],
    image: `${import.meta.env.BASE_URL}assets/proyectos/tasks-api.svg`,
    github: 'https://github.com/juandidb/tasks-api',
    live: ''
  }
  ,
  {
    id: 'landing-surveyor',
    title: {
      en: 'Landing Surveyor',
      es: 'Landing page para Ingeniero Agrimensor'
    },
    description: {
      en: 'Landing page for Surveyor with responsive design and conversion-focused layout.',
      es: 'Landing page para Ingeniero Agrimensor con diseño responsivo y foco en conversión.'
    },
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: `${import.meta.env.BASE_URL}assets/proyectos/landingsurveyor.png`,
    github: '',
    live: 'https://juandidb.github.io/landinglucho'
  }
]
