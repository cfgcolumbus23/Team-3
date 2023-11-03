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
          <CardBody> 
              <CardTitle tag="h5">{name}</CardTitle> 
              <CardText >{description}</CardText> 
              <CardText> {about} </CardText> 
              <CardText> {requirements} </CardText> 
              <CardText> {schedule} </CardText> 
              <Button className="custom-btn" onClick={expandButton}>Learn More!</Button> 
          </CardBody> 
      </Card> 
  </div> 
); 
}


export default ClassCard;
