import { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Col } from "react-bootstrap"
import Product from '../components/Product'





const HomeScreen = () => {
   const [products, setProducts] = useState([]);

   useEffect(() => {
      const fetchProducts = async () => {
         try {
            const { data } = await axios.get('/api/products');

            console.log('API Response:', data);
            console.log('Is array:', Array.isArray(data));
            console.log('Response type:', typeof data)
            console.log('Response type:', data)

            if (Array.isArray(data)) {
               setProducts(data)
            } else {
               console.log('Expected and array but recevied:', data);
            }



         } catch (error) {
            console.error('Error fetching products:', error)
         }
      };

      fetchProducts();
   }, []);

   return (
      <>
         <h3>Latest Products</h3>

         <Row>

            {products.map((product) => (
               <Col key={product._id} sm={12} md={6} lg={4} xl={3}>

                  <Product product={product} />

               </Col>
            ))}

         </Row>
      </>
   )
}

export default HomeScreen