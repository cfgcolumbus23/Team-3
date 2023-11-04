import { 
  Card, CardBody, CardImg, 
  CardTitle, CardText, Button, CardSubtitle
} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './ClassCard.css';
import Popup from 'reactjs-popup';
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
              <Popup trigger={<Button className="custom-btn" >Learn More!</Button> } modal>  
              {close => <span> <Button onClick={close}>close</Button> {name} {description} {about} {requirements} {schedule} </span>}
              </Popup>
          </CardBody> 
      </Card> 
  </div> 
); 
}


export default ClassCard;
