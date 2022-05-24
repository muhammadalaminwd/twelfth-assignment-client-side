import React from 'react';
import notFound from '../../src/images/notfound.jpg'

const NotFound = () => {
    return (
        <div className='flex justify-center'>
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;