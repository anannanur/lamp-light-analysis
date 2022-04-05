import React from 'react';
import { Button } from 'react-bootstrap';
import img from '../../images/home.jpg';
import './Home.css';

const Home = () => {
    return (
        <div className='home-container bg-dark py-5'>
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
                <div className="row mt-5 pt-5">
                    <div className="text-center">
                        <h2 className='text-white d-inline heading-style'>Customer Review</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;