import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import {ProjectCard} from "./ProjectCard"
import colorSharp2 from "../assets/img/color-sharp2.png"
import SiguiendolaLuna from "../assets/img/SiguiendolaLuna.png"
import Mapa from "../assets/img/Mapa.PNG"
import GeneradorQR from "../assets/img/GenerardorQR.PNG"
import Desarrolloi from "../assets/img/Desarrollo i.PNG"
import BuenasTintas from "../assets/img/BuentasTintas.PNG"
import LolaEnBarracas from "../assets/img/LolaEnBarracas.PNG"
import LaVidaDelTripulante from "../assets/img/LaVidaDelTripulante.PNG"
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {
  const projects = [
    {
      title: "Siguiendo la Luna",
      description: "Diseño y desarrollo",
      imgUrl: SiguiendolaLuna,
      language: "React.js",
      web: "https://www.siguiendolaluna.com.ar"
    },
    {
      title: "La Vida del Tripulante",
      description: "Desarrollo y diseño ",
      imgUrl: LaVidaDelTripulante,
      language: "React.js"
    },
    {
      title: "Mapa interactivo - Desarrollo i",
      description: "Desarrollo, diseño y recolección de datos",
      imgUrl: Mapa,
      language: "JavaScript",
      web: "https://mapa.desarrolloi.org"
    },

    {
      title: "Buenas tintas",
      description:"e-commerce desarrollado para trabajo integrador ",
      imgUrl: BuenasTintas,
      language: "JavaScript"
    },
    {
      title: "Generador de QR",
      description: "App simple para generar QR",
      imgUrl: GeneradorQR,
      language: "JavaScript",
      web: "https://qr.divisioncode.net.ar/"
    },
    {
      title: "Lola en Barracas app para gestión de stock",
      description: "Diseño y desarrollo con Electron.js",
      imgUrl: LolaEnBarracas,
      language: "JavaScript"
    },
    // {
    //   title: "Sentiment Analisys",
    //   description:"Modelo predictor de sentimientos de tweets para trabajo integrador (Python)",
    //   imgUrl: SiguiendolaLuna,
    //   language: "Otro"
    // },
    {
      title: "Desarrollo i",
      description: "Desarrollo y diseño (wordpress)",
      imgUrl: Desarrolloi,
      language: "Otro",
      web: "https://www.desarrolloi.org"
    },
  ]

  return (
    <section className="proyect" id="projects">
      <Container>
        <Row>
          <Col size={12}>
          <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
            <h2>Proyectos</h2>
            <Tab.Container id="projects-tabs" defaultActiveKey="React">
              <Nav fill variant="tabs" defaultActiveKey="React">
                <Nav.Item>
                  <Nav.Link eventKey="React">React</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="JavaScript">JavaScript</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Otros">Otros proyectos</Nav.Link>
                </Nav.Item>
              </Nav>
              <br />
              <Tab.Content>
                <Tab.Pane eventKey="React">
                    <Row>
                        {
                            projects.map((project, index)=>{
                                if(project.language ==="React.js")
                                return(
                                    <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                            })
                        }
                    </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="JavaScript">
                <Row>
                        {
                            projects.map((project, index)=>{
                                if(project.language ==="JavaScript")
                                return(
                                    <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                            })
                        }
                    </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="Otros">
                <Row>
                        {
                            projects.map((project, index)=>{
                                if(project.language ==="Otro")
                                return(
                                    <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                            })
                        }
                    </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
            </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};
