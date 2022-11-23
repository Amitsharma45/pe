/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Footer() {
    return (
        <div id='contact' style={{ minHeight: '60px', padding: '20px 0', backgroundColor: '#172337', color: 'white', marginTop: '10px' }}>
            <Container className='' >
                <Row >
                    <Col xs={12} md={6} style={{ textAlign: 'center' }} >
                        <div style={{ fontSize: '2rem' }}>
                            <img src='https://cdn-icons-png.flaticon.com/512/4821/4821951.png' style={{ height: '35px', width: '38px' }} />Reach Us
                        </div>
                        <h4>Preeti Enterpirses</h4>
                        <div>19/88 A Gopal Puri Agra Road</div>
                        <div>Aligarh (202001), Uttar Pradesh</div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14108.96824187692!2d78.0715084!3d27.8638337!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf1ca0ebd5dd762b7!2sPreeti%20Enterprises!5e0!3m2!1sen!2sin!4v1667154320315!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{height :'150px' , width:'250px' , marginTop :'10px'}}></iframe>
                    </Col>
                    <Col xs={12} md={6} >
                        <div className='row mt-4' >
                            <div className='col-6 my-3' >
                                <a href="https://api.whatsapp.com/send?phone=919634870380&text=Hello%20World" target="_blank" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }} rel="noreferrer">
                                    <img src='https://cdn-icons-png.flaticon.com/512/4782/4782351.png' id='whatsapp' /> &nbsp;WhatsApp
                                </a>
                            </div>
                            <div className='col-6 my-3' >
                                <a href="tel:963-487-0380" target="_blank" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }} rel="noreferrer">
                                    <img src='https://cdn-icons-png.flaticon.com/512/8767/8767755.png' id='whatsapp' /> &nbsp;+91-9634870380
                                </a>
                            </div>
                            <div className='col-6 my-3' >
                                <a href="mailto: sharma.amit20111@gmail.com" target="_blank" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }} rel="noreferrer">
                                    <img src='https://cdn-icons-png.flaticon.com/512/2875/2875394.png' id='whatsapp' /> &nbsp;Email
                                </a>
                            </div>
                            <div className='col-6 my-3' >
                                <a href="mailto: sharma.amit20111@gmail.com" target="_blank" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }} rel="noreferrer">
                                    <img src='https://cdn-icons-png.flaticon.com/512/174/174848.png' id='whatsapp' /> &nbsp;FaceBook
                                </a>
                            </div>
                            <div className='col-6 my-3' >
                                <a href="mailto: sharma.amit20111@gmail.com" target="_blank" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }} rel="noreferrer">
                                    <img src='https://cdn-icons-png.flaticon.com/512/2111/2111463.png' id='whatsapp' /> &nbsp;Instagram
                                </a>
                            </div>
                            <div className='col-6 my-3' >
                                <a href="mailto: sharma.amit20111@gmail.com" target="_blank" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }} rel="noreferrer">
                                    <img src='https://cdn-icons-png.flaticon.com/512/2504/2504947.png' id='whatsapp' /> &nbsp;Twitter 
                                </a>
                            </div>
                            
                        </div>
                    </Col>
                </Row>
            </Container>
            <hr />
            <div className='text-center'> CopyRight &copy; 2022</div>
        </div>
    )
}
