import openDataMain from '../assets/OpenData-main.jpg';
import openDataHover from '../assets/OpenData-hover.jpg';
import dashboardMain from '../assets/DashboardMf-main.jpg';
import dashboardHover from '../assets/DashboardMf-hover.jpg';
import financeMain from '../assets/FinanceSimulador-main.jpg';
import financeHover from '../assets/FinanceSimulador-hover.jpg';

export const projects = [
  {
    title: "Go Open Data API",
    description: "🌐 API RESTful en Go para explorar datos públicos de países, ciudades, idiomas, monedas y regiones. Incluye frontend informativo en React.",
    technologies: ["Go", "PostgreSQL", "React", "JavaScript", "HTML"],
    category: "Backend",
    demoUrl: "https://go-open-data-demo.vercel.app",
    repoUrl: "https://github.com/ang-len-26/Go-Open-Data",
    image: openDataMain,
    hoverImage: openDataHover
  },
  {
    title: "Dashboard Modular con Micro-Frontends",
    description: "🧩 Contenedor principal (shell) de una arquitectura basada en Micro-Frontends utilizando React, TypeScript, Webpack 5 y Module Federation.",
    technologies: ["React", "TypeScript", "HTML", "CSS", "Webpack", "JWT"],
    category: "Frontend",
    demoUrl: "https://dashboard-mf-demo.vercel.app",
    repoUrl: "https://github.com/ang-len-26/dashboard-mf",
    image: dashboardMain,
    hoverImage: dashboardHover
  },
  {
    title: "Simulador de Finanzas Personales",
    description: "📊 Aplicación interactiva para gestionar ingresos, egresos y visualizar reportes financieros personales. Hecha con React, Django REST y PostgreSQL.",
    technologies: ["React", "TypeScript", "HTML", "CSS", "PostgreSQL", "Python"],
    category: "Fullstack",
    demoUrl: "https://finance-simulator-demo.vercel.app",
    repoUrl: "https://github.com/ang-len-26/finance-simulator",
    image: financeMain,
    hoverImage: financeHover
  }
];
