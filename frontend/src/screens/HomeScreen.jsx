// import React from 'react'
import { Row, Col } from "react-bootstrap"
import products from '../products'
import Product from "../components/Product"



const HomeScreen = () => {
   return (
      <>
         <h3>Latest Products</h3>
         <Row>
            {products.map((product) => (

               <Col key={product._id} xs={12} md={8} lg={4} xl={3}>
                  <Product product={product} />
               </Col>

            ))}
         </Row>
      </>
   )
}

export default HomeScreen