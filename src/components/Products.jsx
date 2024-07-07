import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchproducts } from '../features/productslice';

import {
    setimage,
    setcategory,
    settitle,
    setprice
} from '../features/productslice'

function Products() {

    const [products, setproducts] = useState([]);

    const dispatch = useDispatch();
    const product = useSelector((state) => state.products.product)
    const image = useSelector((state) => state.products.image);
    const category = useSelector((state) => state.products.category);
    const title = useSelector((state) => state.products.title);
    const price = useSelector((state) => state.products.price);

    useEffect(()=>{
        dispatch(fetchproducts());
    },[dispatch])

    // const fetchAllProducts = () => {
    //     axios.get('https://fakestoreapi.com/products')
    //         .then((res) => {
    //             setproducts(res.data);
    //             // console.log(res.data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };

    // useEffect(() => {
    //     fetchAllProducts();
    // }, []);


    return (


        <div className='container-fluid py-5'>
        <div className='row row-cols-4 m-auto'>
            {products.map((product, index) => (
                <div className='my-3 text-center' key={index}>
                    <Card className='cart'>
                        <img 
                            img={image} src={product.image} tit={title} alt={product.title} className='imglogo m-auto' />
                        <Card.Body>
                            <div>
                                <p>cate={category} Category: {product.category}</p>
                                <p>pri={price} Price: {product.price}</p>
                            </div>
                            <div>
                                <Button>
                                    Add to Cart
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    </div>
        // <div className='container-fluid'>
        //     <div className='m-auto mt-5 row row-cols-3 border'>
        //         {
        //             product.map((products, index) => {
        //                 <div className='' key={index}>
        //                     <Card style={{ width: '18rem' }}>
        //                         <img src={products.image} alt={products.title} />
        //                         <Card.Body>
        //                             <Card.Title>
        //                                 <div>
        //                                     Category:{products.category}
        //                                 </div>
        //                             </Card.Title>
        //                             <Card.Text>
        //                                 <div className='fw-bold fs-5'>
        //                                     Price:{products.price}
        //                                 </div>
        //                             </Card.Text>
        //                             <Button variant="primary">Add to Cart</Button>
        //                         </Card.Body>
        //                     </Card>
        //                 </div>
        //             })
        //         }
        //     </div>
        // </div>
    )
}

export default Products
