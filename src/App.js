import NavBar from './components/NavBar/NavBar';
import './index.css'
import Hero from './components/Hero/Hero';
import AboutMe from './components/AboutMe/AboutMe';
import Project from './components/Project/Project';
import Service from './components/Services/Service';
import Contact from './components/ContactForm/Contact';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
      <NavBar />
      <ToastContainer/>
      <Hero/>
      <AboutMe/>
      <Service/>
      <Project/>
      <Contact/>
    </div>

  );
}

export default App
