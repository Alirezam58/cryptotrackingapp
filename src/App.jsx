import Footer from "./components/ui/Footer";
import Navbar from "./components/ui/Navbar";
import {Routes , Route} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Coin from "./pages/Coin";

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Wrapper */}
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:id" element={<Coin />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
