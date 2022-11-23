import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Item from '../Item/Item'
import './Product.css'
import { product } from '../Config/data.config'

export default function Product() {
    
    return (
        <div id="product"  >
            <h1 className='text-center  head_line' >Our Product</h1>
            <Container >
                <div className='row mt-3 '>
                    {
                        product && product?.map(item =>
                            <div className='my-4 col-md col-sm-12 d-flex align-items-center justify-content-center'>
                                <Item item={item} />
                            </div>
                        )
                    }
                </div>
            </Container>
        </div>
    )
}
