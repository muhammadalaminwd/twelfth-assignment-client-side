import React from 'react';
import country from '../../src/images/icons/flag-solid.svg'
import growth from '../../src/images/icons/arrow-up-short-wide-solid.svg'
import people from '../../src/images/icons/people-group-solid.svg'
import feedback from '../../src/images/icons/comments-solid.svg'

const BusinessSummary = () => {
    return (
        <div className='text-center mt-6 mb-6'>
            <h1 className='text-4xl text-primary mb-2'>Billions Customers Trust us</h1>
            <p className='text-secondary mb-4'>Customer satisfaction is our main priority</p>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>

            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
              <img
                src={country}
                alt="flag"
                className="" width="30px"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-3xl text-accent">38</h2>
              <h2 className="card-title text-secondary">Countries </h2>
            </div>
          </div>

            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
              <img
                src={growth}
                alt="flag"
                className="" width="30px"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-3xl text-accent">399+</h2>
              <h2 className="card-title text text-secondary">Improvement </h2>
            </div>
          </div>

            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
              <img
                src={people}
                alt="flag"
                className="" width="40px"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-3xl text-accent">500+</h2>
              <h2 className="card-title text-secondary">Customers </h2>
            </div>
          </div>

            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
              <img
                src={feedback}
                alt="flag"
                className="" width="40px"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-3xl text-accent">377+</h2>
              <h2 className="card-title text-secondary">Reviews</h2>
            </div>
          </div>


            
            </div>


        </div>
    );
};

export default BusinessSummary;