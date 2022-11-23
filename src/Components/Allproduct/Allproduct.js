/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Allproduct.css'
// import belt from "../../img/belt.jpg"
import axios from 'axios';
import  productApi from './productApi';
export default function Allproduct(props) {
  const { item } = useParams();
  const [data, setdata] = useState([]);

  useEffect(() => {
    async function getDate() {
      const { data } = await axios.get(productApi.Belt);

      setdata(data.data);
      console.log(data)
    }
    getDate();
    
  }, [item])
  return (
    <div >
      <h1 className='text-center head_line'> {item}</h1>
      <Container>

        {
          data && data?.map(item =>
            <Row className='my-5 '>
              <Col xs={12} md={6} className='rows mb-5'>
                <h3 style={{ paddingLeft: '0px' }}>{item.name} </h3>
                <img src={item.img} style={{ height:'250px' , width : '300px'}} />
              </Col>
              <Col xs={12} md={6} className='rows ' >
                <div >
                  <h3>Product Details:</h3>
                  <div className='px-5 pt-1 mb-3'>
                    <table>
                      <tr>
                        <td className='td-1'>Belt Material :</td>
                        <td className='td-2'>{item.belt_material}</td>
                      </tr>
                      <tr>
                        <td className='td-1'>Buckle Material :</td>
                        <td className='td-2'>{item.buckle_material}</td>
                      </tr>
                      <tr >
                        <td className='td-1'>Size (cm) :</td>
                        <td className='td-2'>
                          <ul className='size'>
                            <li className='li'>75</li>
                            <li className='li'>85</li>
                            <li className='li'> 90</li>
                            <li className='li'>100</li>
                            <li className='li'>110</li>
                            <li className='li'>Custom Size</li>
                          </ul>
                        </td>
                      </tr>
                      {/* <tr>
                        <td className='td-1'>Description  :</td>
                        <td className='td-2'>{item.description}</td>
                      </tr> */}
                    </table>
                  </div>
                  <h4>Features:</h4>
                  <ul>
                    <li>Durable</li>
                    <li>Smooth finish</li>
                    <li>Precise designs</li>
                  </ul>
                </div>
                
              </Col>
              <hr />
            </Row>
          )
        }


      </Container>
    </div>
  )
}
