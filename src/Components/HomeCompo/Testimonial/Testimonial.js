import React, { useEffect, useState } from 'react';
import SingleTestimonial from '../SingleTestimonial/SingleTestimonial';
import './Testimonial.css'

const Testimonial = () => {

    const [comments, setComments] = useState([])
    console.log(comments)

    useEffect(() => {
        fetch("https://warm-crag-75291.herokuapp.com/customerComment")
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])


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
                            comments.map(comment => (<SingleTestimonial comment={comment}></SingleTestimonial>))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;