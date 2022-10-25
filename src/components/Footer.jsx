import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/Isotipo.png"
import logo2 from "../assets/img/Logotipo.png"
import logoBlanco2 from '../assets/img/Logotipo blanco.png'
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/github.png"

export const Footer = () =>{
    return(
        <footer className="footer">
           <Container>
            <Row>
                <Col className="text-center"  sm={6}>
                    <img src={logo} alt="logo" />
                    <img src={logoBlanco2} alt="logo" />
                </Col>
                <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                        <br />
                        <br />
                        <a href="https://www.linkedin.com/in/pablo-nicolas-caputo/" target="blank_"> <img src={navIcon1} alt="" /></a>
                        <a href="https://github.com/The-Division-Code?tab=repositories" target="blank_"> <img src={navIcon2} alt="" /></a>
                    </div>
                    <p>Copyight 2022. Todos los derechos reservados</p>
                </Col>
            </Row>
            </Container> 

        </footer>
    )
}