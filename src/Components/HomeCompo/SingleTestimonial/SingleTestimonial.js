import React from 'react';
import './SingleTestimonial.css'

const SingleTestimonial = ({ testimonial }) => {
    return (
        <div className="col-md-4">
            <div className="single-testimonial">
                <div className="testimonial-content">
                    <div className="testimonial-img">
                        <img src={testimonial.img} alt="" />
                    </div>
                    <div className="testimonial-user">
                        <h5> {testimonial.name} </h5>
                        <p> {testimonial.designation} </p>
                    </div>
                </div>
                <div className="testimonial-comment">
                    <p> {testimonial.comment} </p>
                </div>
            </div>
        </div>
    );
};

export default SingleTestimonial;