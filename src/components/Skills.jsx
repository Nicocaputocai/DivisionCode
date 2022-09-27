import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "../assets/img/React-icon.svg.png"
import JS from "../assets/img/JavaScript_logo.svg.png"
import Python from "../assets/img/Python_logo.svg.png"
import MySQL from "../assets/img/mysql.svg.png"
import MongoDB from "../assets/img/mongodb.svg.png"
import colorSharp from "../assets/img/color-sharp.png"

export const Skills=() =>{

        const responsive = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 5
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1
            }
        };
        return (
            <section className="skill" id="skills">
                <Container>
                    <Row>
                        <Col>
                            <div className="skill-bx">
                                <h2>
                                    Skills
                                </h2>
                                <br />
                                <Carousel 
                                responsive={responsive} 
                                infinite={true} 
                                className="skill-slider" 
                                autoPlay="true" 
                                >
                                    
                                    <div className="item" style={{display:"block", marginLeft:"auto", marginRight:"auto", width:"80%"}}>
                                        <img src={JS} alt="Image"/>
                                        <h5>JavaScript</h5>
                                    </div>
                                    <div className="item" style={{display:"block", marginLeft:"auto", marginRight:"auto", width:"80%"}}>
                                        <img src={React} alt="Image"/>
                                        <h5>React.js</h5>
                                    </div>
                                    <div className="item" style={{display:"block", marginLeft:"auto", marginRight:"auto", width:"80%"}}>
                                        <img src={Python} alt="Image" />
                                        <h5>Python</h5>
                                    </div>
                                    <div className="item" style={{display:"block", marginLeft:"auto", marginRight:"auto", width:"80%"}}>
                                        <img src={MongoDB} alt="Image" />
                                        <h5>Mongo DB</h5>
                                    </div>
                                    <div className="item" style={{display:"block", marginLeft:"auto", marginRight:"auto", width:"80%"}}>
                                        <img src={MySQL} alt="Image" />
                                        <h5>My SQL</h5>
                                    </div>
                                    
                                </Carousel>

                            </div>
                        </Col>
                    </Row>
                </Container>
                <img className="background-image-left" src={colorSharp} alt="" />
            </section>
        )
}