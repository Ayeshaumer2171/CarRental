import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/services/Services';
import CarList from './components/CarList/CarList';
import Testimonals from './components/Testimonals/Testimonals';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
  <Navbar />
  <Hero />
  <About />
  <Services />
<CarList />
<Testimonals />
<Contact />
<Footer />
  </div>
  );
}

export default App;
