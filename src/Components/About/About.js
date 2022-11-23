import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './About.css'
import Container from 'react-bootstrap/Container';
import logo from "../../img/logo.png"

export default function About() {
  return (
    <div id='about' className='mb-5 mt-5'>
      <h1 className='text-center pb-3 head_line' >About Us</h1>
      <Container fluid>
        <Row style={{ minHeight: '300px' }}>
          <Col className='d-flex align-items-center justify-content-center'>
            <div className='d-flex align-items-center justify-content-center flex-column about_logo' >
              <img
                alt=""
                src={logo}
                width="90"
                height="70"
                className="d-inline-block align-top"
              />{' '}

              <div >Preeti Enterprise</div>
              <div>since 1992</div>
            </div>
          </Col>
          <Col className='d-flex align-items-center justify-content-center'>
            <div className='m-5' style={{ fontSize: '18px' }}>
              Established in the year 1992, Preeti Enterprise is one of the well recognized manufacturer and trader of School Belt, Neck and Bow Ties, Belt Buckles etc. Our exclusive range of products are highly acclaimed for features like color fastness, shrink free, long lasting fabric, fine stitching and flawless finish. We always deliver quality products to satisfy our clients.
            {/* <p>
              We offer customization on our entire range, we are capable of designing and creating uniforms that are in accordance to the demands of the clients. Due to our state-of-the-art manufacturing unit, we are able to meet the bulk requirements of client. We ensure that our entire collection of school ties, belt provides great levels of comfort to the client.
            </p> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
