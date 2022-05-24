import React, { useEffect, useState } from 'react';
import Part from './Part';
import { useNavigate } from 'react-router-dom';

const Parts = () => {

  const [parts, setParts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://enigmatic-sierra-69090.herokuapp.com/parts")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);


    return (
        <div>
        <div className="my-28">
        <div className="text-center">
          <h3 className="text-primary text-xl font-bold uppercase">
            Our Parts
          </h3>
          <h3 className="text-4xl">Products We Sell</h3>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {
              parts.map(part => <Part
                  key={part._id}
                  part={part}
                  ></Part>)
          }
        </div>
      </div>
        </div>
    );
};

export default Parts;