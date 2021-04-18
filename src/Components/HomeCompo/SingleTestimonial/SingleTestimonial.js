import React from 'react';
import './SingleTestimonial.css'

const SingleTestimonial = ({ comment }) => {

    return (
        <div className="col-md-4">
            <div className="single-testimonial">
                <div className="testimonial-content">
                    <div className="testimonial-img">
                        <img src={comment.photoURL} alt="" />
                    </div>
                    <div className="testimonial-user">
                        <h5> {comment.userName} </h5>
                        <p> {comment.userDesignation} </p>
                    </div>
                </div>
                <div className="testimonial-comment">
                    <p> {comment.userReview} </p>
                </div>
            </div>
        </div>
    );
};

export default SingleTestimonial;