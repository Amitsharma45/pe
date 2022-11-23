import Carousel from 'react-bootstrap/Carousel';
import a from "../../img/4.png"
import b from "../../img/5.png"
import c from "../../img/6.png"
import './Slider.css'
function Slider() {
  return (
    <Carousel  id='home'>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 slider_img"
          src={a}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 slider_img"
          src={b}
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100 slider_img"
          src={c}
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;