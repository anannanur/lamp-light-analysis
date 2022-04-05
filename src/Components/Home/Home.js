import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import img from '../../images/home.jpg';
import './Home.css';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    console.log(products);
    return (
        <div className='bg-dark py-5'>
            <div className="container">
                <div className="row">
                    <div className='col-12 col-md-6 img-container pt-5'>
                        <img src={img} alt="" className='img-fluid' />
                    </div>
                    <div className='col-12 col-md-6 pt-3 d-flex flex-column align-items-center justify-content-center'>
                        <h1 className='text-white'>Welcome to<span className='text-warning'> Lamp Light Mart</span></h1>
                        <p className='text-white'>Let Lamp Light Mart to enlighten your rooms and life</p>
                        <Button variant="warning" className='fw-bold mt-2'>Live Demo</Button>
                    </div>
                </div>
                <div className='py-5 my-5'>
                    <div className="row mt-5">
                        <div className="text-center">
                            <h1 className='text-white d-inline heading-style'>Customer <span className='text-warning'>Review</span></h1>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                        {
                            products.slice(0, 3).map(({ id, name, img, ratings, comment }) => <div className="col" key={id}>
                                <div className="card h-100 text-white bg-dark shadow-lg pt-3">
                                    <div className='text-center'>
                                        <img src={img} className="rounded-circle mt-3 border border-3 border-white" alt="..." />
                                    </div>
                                    <div className="card-body text-center">
                                        <h4 className="card-title mt-2 text-danger">{name}</h4>
                                        <p className="card-text text-info">{comment}</p>
                                        <p className='text-warning'><small>Ratings: {ratings}</small></p>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                    <div className='text-center mt-5'>
                        <Button variant='warning' className='fw-bold'>See All Reviews</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;