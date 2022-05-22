import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const Part = ({part}) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <figure className="px-5 pt-5">
          <img
            src={part.img}
            alt="processor"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl">{part.name}</h2>
          <p>{part.description}</p>
          <p>Minimum Order Quantity: {part.minimumOrderQuantity}</p>
          <p>Available Quantity: {part.availableQuantity}</p>
          <h2 className="card-title">Price: {part.price}</h2>
          <PrimaryButton>Buy Now</PrimaryButton>
        </div>
      </div>
    );
};

export default Part;