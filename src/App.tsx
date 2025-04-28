import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import AppRoutes from "./routes/Routes";
import Navbar from "./pages/Navbar";
import "./styles/global.css";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="font-sans min-w-[350px]">
          <Navbar />
          <AppRoutes />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
