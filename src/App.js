import './App.css';
import { NavBar } from'./components/NavBar';
import { Banner } from'./components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import FloatingWhatsApp from 'react-floating-whatsapp'
import logo from "./assets/img/Isotipo.png"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects />
      <FloatingWhatsApp 
        phoneNumber="5491153796531"
        accountName="The Division Code"
        avatar={logo}
        statusMessage=""
        chatMessage="Hola 👋🏽 ¿En que podemos ayudarte?"
        placeholder="Escriba su mensaje"
        darkMode="true"
        allowClickAway="true"
        allowEsc= "true"
        />
      <Footer/>
    </div>
  );
}

export default App;
