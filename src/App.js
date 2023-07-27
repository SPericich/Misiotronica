import "./App.css";
import Navegacion from "./components/Nav";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Venta from "./pages/Venta";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

function App() {
   return (
      <div>
         <Router>
            <Navegacion />
            <Routes >
               <Route exact path="/" element={<Home />} />
               <Route exact path="/About" element={<About />} />
               <Route exact path="/Venta" element={<Venta />} />
               <Route exact path="/Contacto" element={<Contacto />} />
               <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
            <Copyright />
         </Router>
      </div>
   );
}

export default App;
