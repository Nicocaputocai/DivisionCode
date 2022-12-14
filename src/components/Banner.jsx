import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg  from "../assets/img/header-img.svg"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner =() =>{
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ 'Web Developer', "Web Designer", "Data Scientist" ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() *100)
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(()=>{
            tick();
        }, delta)
        return () =>{ clearInterval(ticker)}
    }, [text])
    
    const tick = () => {
        let i= loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1): fullText.substring(0, text.length + 1)

        setText(updatedText)

        if(isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }
        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    };

    return (
        <section className="banner" id="home">
          <Container>
            <Row className="aligh-items-center">
              <Col xs={12} md={6} xl={7}>
                <TrackVisibility>
                  {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">Bienvenidos a mi Portfolio</span>
                    <h1><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                      <p>Somos una empresa dedicada al desarrollo de aplicaciones. Este es un emprendimiento personal de Nicol??s Caputo, pero en varios proyectos fue acompa??ado por colegas durante el desarrollo. Principalmente desarrollamos aplicaciones web, aunque contamos con experiencia en desarrollo de aplicaciones de escritorio y modelos de IA.</p>
                  </div>}
                </TrackVisibility>
              </Col>
              <Col xs={12} md={6} xl={5}>
                <TrackVisibility>
                  {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                      <img src={headerImg} alt="Header Img"/>
                    </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
        </section>
      )
    }
    