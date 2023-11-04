import { 
  Card, CardBody, CardImg, 
  CardTitle, CardText, Button
} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './ClassCard.css';
import Popup from 'reactjs-popup';
import books from "../image/original.avif";
function ClassCard({name, description, about, requirements, schedule, img}) {

return ( 
  <div style={{ 
      display: 'block', padding: 30, justifyContent: 'center'
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
              <Popup trigger={<Button className="custom-btn" >Class Information!</Button> } modal nested>  
              {close => <span> <Button onClick={close}>close</Button> <div className="header"><h3>{name}</h3></div><div className="content"><h5>{description}</h5> {about} <p>{requirements}</p> <p>{schedule}</p></div>
                </span>}
              </Popup>
          </CardBody> 
      </Card> 
  </div> 
); 
}


export default ClassCard;
