import { 
  Card, CardBody, CardImg, 
  CardTitle, CardText, Button, CardSubtitle
} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './ClassCard.css';
function ClassCard({name, description, about, requirements, schedule}) {
 function expandButton(){

 }
return ( 
  <div style={{ 
      display: 'block', width: 700, padding: 30 
  }}> 
      <Card> 
          <CardImg 
              width="50px"
              height="50px"
          src="/Users/amber/Documents/Team-3/mern/client/src/components/GWC_Logo_White.svg"
              alt="Class Logo" /> 
          <CardBody> 
              <CardTitle tag="h5">{name}</CardTitle> 
              <CardText >{description}</CardText> 
              <CardText> What is it about: {about} </CardText> 
              <CardText> Requirements: {requirements} </CardText> 
              <CardText> Class Schedule: {schedule} </CardText> 
              <Button className="custom-btn" onClick={expandButton}>Learn More!</Button> 
          </CardBody> 
      </Card> 
  </div> 
); 
}


export default ClassCard;
