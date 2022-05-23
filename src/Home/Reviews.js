import React from 'react';
import Review from './Review';
import quote from '../../src/images/reviews/quote.svg'
import people1 from '../../src/images/reviews/people1.png'
import people2 from '../../src/images/reviews/people2.png'
import people3 from '../../src/images/reviews/people3.png'
import reviews1 from '../../src/images/reviews/reviews1-01.png'
import reviews2 from '../../src/images/reviews/reviews2-01.png'
import reviews3 from '../../src/images/reviews/reviews3-01.png'
const Reviews = () => {
    const reviews =     [
        {
            _id: 1,
            name: 'Bill Gates',
            description: 'Hero Tech is superv technology manufacturer. I am MR. Bill gates highly recommend you.',
            review: reviews1,
            location: 'New York',
            img: people1
        },
        {
            _id: 2,
            name: 'Elon Musk',
            description: 'I work 16 hours a day. I use Hero tech technology to keep my computer on 24/7. Next I am gonna buy hero tech.',
            review: reviews2,
            location: 'California',
            img: people2
        },
        {
            _id: 3,
            name: 'Jeff Bezos',
            description: 'I am using hero tech in my space technology business. Highly recommend to you guys.',
            review: reviews3,
            location: 'Texas',
            img: people3
        }
    ];
    return (
        <section className="my-20">
        <div className="flex justify-between">
          <div>
            <h4 className="text-xl text-primary font-bold ml-4 mt-5">Customers Feedback</h4>
            <h2 className="text-3xl ml-4">What our Customers Say</h2>
          </div>
          <div>
          <img className="w-24 lg:w-48" src={quote} alt="" />
          </div>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
            reviews.map(review => <Review
              key={review._id}
              review = {review}
              ></Review>)
        }
        </div>
      </section>
    );
};

export default Reviews;