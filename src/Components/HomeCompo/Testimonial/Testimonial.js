import React from 'react';
import SingleTestimonial from '../SingleTestimonial/SingleTestimonial';
import './Testimonial.css'

const testimonials = [
    {
        id: 1,
        img: 'https://i.ibb.co/9hFbMwV/person-1.jpg',
        name: 'Miriam Barron',
        designation: 'Software Eng.',
        comment: 'I feel very happy and be proud to connect with this industry. I presume this is a very productive and professional industry. I wish very good luck & success for this industry '
    },
    {
        id: 2,
        img: 'https://i.ibb.co/Bq79mFb/person-2.jpg',
        name: 'Miriam Barron',
        designation: 'Back-End Developer',
        comment: 'I feel very happy and be proud to connect with this industry. I presume this is a very productive and professional industry. I wish very good luck & success for this industry '
    },
    {
        id: 3,
        img: 'https://i.ibb.co/3fd9s3L/person-3.jpg',
        name: 'Miriam Barron',
        designation: 'Front-End Developer',
        comment: 'I feel very happy and be proud to connect with this industry. I presume this is a very productive and professional industry. I wish very good luck & success for this industry '
    },
]

const Testimonial = () => {
    return (
        <section className="container">
            <div className="testimonial">
                <div className="testimonial-title text-center">
                    <h1>What <span>Customer</span>Say</h1>
                    <p>Explore Our Completed Services! Consectetur adipiscing elitt elit tellus, luctus pulvinar dapibus leoconsectetur luctus nec.</p>
                </div>
                <div className="testimonial-card">
                    <div className="row">
                        {
                            testimonials.map(testimonial => (<SingleTestimonial testimonial={testimonial}></SingleTestimonial>))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;