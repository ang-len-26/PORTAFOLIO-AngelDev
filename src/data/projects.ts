import ecommerceMain from '../assets/ecommerce-main.jpg';
import ecommerceHover from '../assets/ecommerce-hover.jpg';
import cryptoMain from '../assets/crypto-main.jpg';
import cryptoHover from '../assets/crypto-hover.jpg';
import analyticsMain from '../assets/analytics-main.jpg';
import analyticsHover from '../assets/analytics-hover.jpg';
import containerMain from '../assets/container-main.jpg';
import containerHover from '../assets/container-hover.jpg';

export const projects = [
	{
	  title: "Ecommerce Mascotas",
	  description: "Tienda online para productos de mascotas, con React y Node.js.",
	  technologies: ["React", "Node.js", "MongoDB", "Express"],
	  category: "Fullstack",
	  demoUrl: "https://tudemo.com",
	  repoUrl: "https://github.com/tuusuario/ecommerce-mascotas",
	  image: ecommerceMain,
      hoverImage: ecommerceHover
	},
	{
	  title: "Crypto Dashboard",
	  description: "Dashboard con datos de criptomonedas en tiempo real usando CoinGecko API.",
	  technologies: ["React", "TypeScript", "Chart.js"],
	  category: "Fullstack",
	  demoUrl: "https://tudashboard.com",
	  repoUrl: "https://github.com/tuusuario/crypto-dashboard",
	  image: cryptoMain,
      hoverImage: cryptoHover
	},
	{
	  title: "Analisis de datos",
	  description: "Seguimiento de los usuarios.",
	  technologies: ["MySQL", "Express", "Java"],
	  category: "Fullstack",
	  demoUrl: "https://tuanalisis.com",
	  repoUrl: "https://github.com/tuusuario/data-analytics",
	  image: analyticsMain,
	  hoverImage: analyticsHover
	},
	{
	  title: "Contenedor",
	  description: "Administración de imágenes de proyectos.",
	  technologies: ["Docker", "AWS", "Java"],
	  category: "Fullstack",
	  demoUrl: "https://tucontendor.com",
	  repoUrl: "https://github.com/tuusuario/contenedor",
	  image: containerMain,
	  hoverImage: containerHover
	}
  ];
  