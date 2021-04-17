import React from 'react';
import './AddServices.css'
import { useForm } from 'react-hook-form';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const AddServices = () => {


    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <main className="container-fluid">
            <div className="row">
                <div className="col-md-2 px-0">
                    <AdminSidebar />
                </div>
                <div className="col-md-10 px-0">
                    <div className="add-service-header">
                        <h4>Add Service</h4>
                    </div>
                    <div className="add-service-body">
                        <div className="add-service-form">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="text">Service Title</label>
                                            <input type="text" {...register('name', { required: true })} placeholder="Enter Title" className="form-control" />
                                            {errors.name && <p className="text-danger">This field is required</p>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="description">Description</label>
                                            <textarea rows="5" {...register('description', { required: true })} placeholder="Enter Description" className="form-control" ></textarea>
                                            {errors.description && <p className='text-danger'>Fill out this field.</p>}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="file">Image</label>
                                            <input type="file" {...register('name', { required: true })} className="form-control" />
                                            {errors.file && <p className="text-danger">This field is required</p>}
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="add-service-btn text-right">
                            <button className='submit-btn' type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AddServices;