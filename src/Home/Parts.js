import React from 'react';
import Part from './Part';
import processor from '../../src/images/parts/processor.jpg'
import harddisk from '../../src/images/parts/harddisk.jpg'
import graphicscard from '../../src/images/parts/graphicscard.jpg'

const Parts = () => {
    const parts = [
        {
            _id: 1,
            name: 'Processor',
            img: processor,
            description: 'This processor is number providing the best service worlwide. You can buy it without any hesitation. We manufactered the product',
            minimumOrderQuantity: '6',
            availableQuantity: '18',
            price: '$300'
        },
        {
            _id: 2,
            name: 'Hard Disk',
            img: harddisk,
            description: 'This hard disk is number providing the best service worlwide. You can buy it without any hesitation. We manufactered the product',
            minimumOrderQuantity: '10',
            availableQuantity: '50',
            price: '$150'
        },
        {
            _id: 2,
            name: 'Graphics Card',
            img: graphicscard,
            description: 'This graphics card is number providing the best service worlwide. You can buy it without any hesitation. We manufactered the product',
            minimumOrderQuantity: '20',
            availableQuantity: '80',
            price: '$90'
        }
    ]
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