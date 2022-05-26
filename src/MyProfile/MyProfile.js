import React from 'react';

const MyProfile = () => {
    return (
        <div className='text-center leading-8 mb-8'>
            <h1 className='font-bold text-6xl mb-5 text-primary'>MY PROFILE</h1>
            <h1 className='font-bold text-2xl'>Muhammad Al Amin</h1>
            <h2><span className='font-bold'>E-mail:</span> muhammadalaminwd@gmail.com</h2>
            <h2><span className='font-bold'>Educational Background: </span>B.B.A in Accounting</h2>
            <h2><span className='font-bold'>Location: </span>Dhaka, Bangladesh</h2>
            <h2><span className='font-bold'>Phone: </span>+8801778597562</h2>
            <h2><span className='font-bold'>Linked In Profile: </span> <a className='font-bold underline underline-offset-1 text-secondary' href="https://www.linkedin.com/in/muhammadalaminwd/" target="_blank">Click Me</a></h2>
        </div>
    );
};

export default MyProfile;