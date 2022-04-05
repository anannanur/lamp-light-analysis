import React from 'react';
import { useProducts } from '../../Hooks/useProduct';

const Reviews = () => {
    const [products] = useProducts();
    return (
        <div className='bg-dark pb-5'>
            <div className="container pb-5">
                <div className='py-5'>
                    <div className="row mt-3">
                        <div className="text-center">
                            <h1 className='text-white d-inline heading-style'>What <span className='text-warning'>People</span> Say</h1>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                        {
                            products.map(({ id, name, img, ratings, comment }) => <div className="col" key={id}>
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
                </div>
            </div>

        </div>
    );
};

export default Reviews;