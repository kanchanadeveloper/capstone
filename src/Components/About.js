import React from 'react'
import res from '../Assets/restauranfood.jpg'

export default function About() {
    return (
        <>
            <div className="row p-4 height">
                <div className="col-md-6 align-items-center">
                     <p className='text-justify'>
                     Food is love being plated. With a great passion for cooking and a hunger to serve people, we serve food that not only fills people’s tummies but also their hearts.

We don’t believe in shortcuts! We believe that giving time makes things better. Inspired by every South Indian home’s authentic and age-old cooking culture, we provide food that tickles your taste buds to joy. Relish a flavor burst with every bite that will leave you wanting more.

Want food that’s loaded with goodness and taste? We’ve got you covered! With our locally sourced, fresh ingredients and spices enjoy a meal that’s wholesome and delicious.
                     </p>
                </div>
                <div className="col-md-6 p-4 text-center">
                    <img src={res} alt="About us" width={400} height={400} />
                </div>

            </div>
            <p>
                The food at The Lemon Restaurant is a culinary journey to the roots of South India's culture and tradition. We believe every meal should make a person feel warm, cared for, and loved.

                At The Lemon Restaurant, we deliver this with delicacies made with hand-picked ingredients cooked to perfection, and served with love! With every meal, we serve happy memories and love stories.
            </p>
        </>
    )
}