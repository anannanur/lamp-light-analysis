import React from 'react';
import img from '../../images/notfound.gif';

const Notfound = () => {
    return (
        <div className='bg-dark'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center">
                        <img src={img} alt="" className='w-50 h-75'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notfound;