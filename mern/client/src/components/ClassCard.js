import { 
  Card, CardBody, CardImg, 
  CardTitle, CardText, Button
} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './ClassCard.css';
import Popup from 'reactjs-popup';
import books from "../image/original.avif";
function ClassCard({name, description, about, requirements, schedule}) {

return ( 
  <div style={{ 
      display: 'block', width: 100, padding: 30 
  }}> 
      <Card style={{width: '20rem'}}> 
      <img
        src= {books}
        width={250}
        height={250}
  />
          <CardBody> 
        
              <CardTitle tag="h5">{name}</CardTitle> 
              <CardText >{description}</CardText> 
              <CardText> {about} </CardText> 
              <CardText> {requirements} </CardText> 
              <CardText> {schedule} </CardText> 
              <Popup trigger={<Button className="custom-btn" >Learn More!</Button> } modal nested>  
              {close => <span> <Button onClick={close}>close</Button> <div className="header"><h3>{name}</h3></div><div className="content"><h5>{description}</h5></div> <p>{about}</p> <p>{requirements}</p> <p>{schedule}</p>
                </span>}
              </Popup>
          </CardBody> 
      </Card> 
  </div> 
); 
}


export default ClassCard;
