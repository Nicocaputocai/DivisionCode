import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import {ProjectCard} from "./ProjectCard"
import colorSharp2 from "../assets/img/color-sharp2.png"
import SiguiendolaLuna from "../assets/img/SiguiendolaLuna.png"
import Mapa from "../assets/img/Mapa.PNG"
import projImg3 from "../assets/img/project-img3.png"
import Desarrolloi from "../assets/img/Desarrollo i.PNG"
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
      imgUrl: Mapa,
      language: "React.js"
    },
    {
      title: "Mapa interactivo - Desarrollo i",
      description: "Desarrollo, diseño y recolección de datos",
      imgUrl: Mapa,
      language: "JavaScript"
    },

    {
      title: "Buenas tintas",
      description:
        "e-commerce desarrollado para trabajo integrador ",
      imgUrl: SiguiendolaLuna,
      language: "JavaScript"
    },
    {
      title: "Generador de QR",
      description: "App simple para generar QR",
      imgUrl: Mapa,
      language: "JavaScript"
    },
    {
      title: "Lola en Barracas app para gestión de stock",
      description: "Diseño y desarrollo con Electron.js",
      imgUrl: projImg3,
      language: "JavaScript"
    },
    {
      title: "Sentiment Analisys",
      description:
        "Modelo predictor de sentimientos de tweets para trabajo integrador (Python)",
      imgUrl: SiguiendolaLuna,
      language: "Otro"
    },
    {
      title: "Desarrollo i",
      description: "Desarrollo y diseño (wordpress)",
      imgUrl: Desarrolloi,
      language: "Otro"
    },
  ];

  return (
    <section className="proyect" id="projects">
      <Container>
        <Row>
          <Col size={12}>
          <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
            <h2>Proyectos</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
              magnam?
            </p>
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
