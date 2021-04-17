import React from 'react';
import './Review.css'
import { useForm } from 'react-hook-form';
import UserSidebar from '../UserSidebar/UserSidebar';

const Review = () => {


    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <main className="container-fluid">
            <div className="row">
                <div className="col-md-2 px-0">
                    <UserSidebar />
                </div>
                <div className="col-md-10 px-0">
                    <div className="user-header">
                        <h4>Review</h4>
                    </div>
                    <div className="user-body">
                        <div className="user-form">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" {...register('name', { required: true })} placeholder="Your Name" className="form-control" />
                                            {errors.name && <p className="text-danger">This field is required</p>}
                                        </div>

                                        <div className="form-group">
                                            <input type="text" {...register('designation', { required: true })} placeholder="Company's name.Designation" className="form-control" />
                                            {errors.designation && <p className="text-danger">This field is required</p>}
                                        </div>

                                        <div className="form-group">
                                            <textarea rows="7" {...register('description', { required: true })} placeholder="Description" className="form-control"></textarea>
                                            {errors.name && <p className="text-danger">This field is required</p>}
                                        </div>
                                    </div>
                                </div>
                                <div className="book-btn">
                                    <button className="submit-btn" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Review;