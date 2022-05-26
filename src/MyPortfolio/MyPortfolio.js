import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='text-center leading-8 mb-8'>
            <h1 className='font-bold text-6xl mb-5 text-primary'>MY PORTFOLIO</h1>
            <h1 className='font-bold text-2xl'>Muhammad Al Amin</h1>
            <h2><span className='font-bold'>E-mail:</span> muhammadalaminwd@gmail.com</h2>
            <h2><span className='font-bold'>Educational Background: </span>B.B.A in Accounting</h2>
            <h1 className='font-bold text-2xl mt-3 text-primary'>Skills:</h1>
            <ul className='list-disc'>
            <li>1. HTML5</li>
            <li>2. CSS3</li>
            <li>3. Bootstrap</li>
            <li>4. Tailwind</li>
            <li>5. Javascript</li>
            <li>6. Reactjs</li>
            <li>7. Nodejs</li>
            <li>8. Mongodb</li>
            </ul>
            <h2><span className='font-bold text-2xl mt-5 text-primary'>Projects:</span></h2>
            <a className='font-bold underline underline-offset-1' href="https://tenth-assignment-3267e.web.app/" target="_blank">Project 1</a> <br />
            <a className='font-bold underline underline-offset-1' href="https://eleventh-assignment-5c5bd.web.app/" target="_blank">Project 2</a> <br />
            <a className='font-bold underline underline-offset-1' href="https://ninth-assignment.netlify.app/" target="_blank">Project 3</a>
        </div>
    );
};

export default MyPortfolio;