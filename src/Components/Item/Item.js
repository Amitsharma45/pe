import Card from 'react-bootstrap/Card';
import './Item.css'
import { Link } from 'react-router-dom';
function Item(props) {
  const {item} =props;
  // console.log(item.image)
  return (
    <Card  id='item'>
      <Card.Img variant="top" src={item.image} style={{ width : '220px' , height: '150px', margin : 'auto',marginTop:'5px'}}/>
      <Card.Body>
        <Card.Title>{item.product_name}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
        <Link to={`/product/${item.product_name}`} ><p className= 'text-center' >View More Items</p></Link>
      </Card.Body>
    </Card>
  );
}

export default Item;