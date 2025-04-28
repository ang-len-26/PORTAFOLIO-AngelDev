import { useEffect, useState } from "react";

const images = [
  { src: "/src/assets/project1.jpg", alt: "Proyecto 1" },
  { src: "/src/assets/project2.jpg", alt: "Proyecto 2" },
  { src: "/src/assets/project3.jpg", alt: "Proyecto 3" },
];

const Header = () => {
  const [current, setCurrent] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 w-full overflow-hidden transition-all duration-700 z-40 ${
        scrolled ? " h-16 bg-gray-900 shadow-md" : "h-40"
      }`}
    >
      {/* Fondo con imágenes */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
              scrolled
                ? "opacity-0"
                : index === current
                ? "opacity-100"
                : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Indicadores o título */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-700">
        {scrolled ? (
          <h1 className="text-2xl font-bold text-gray-600">Portafolio</h1>
        ) : (
          <div className="flex gap-2 justify-center">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2.5 h-2.5 rounded-full ${
                  current === index ? "bg-green-600" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
