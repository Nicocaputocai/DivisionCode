import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, web }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={web} target="blank_" style={{ textDecoration: 'none', color:'white'}}>
      <div className="proj-imgbx">
        
        <img src={imgUrl} />
        
        <div className="proj-txtx">
          
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      </a>
    </Col>
  )
}
