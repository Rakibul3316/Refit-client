import React from 'react';
import { useForm } from 'react-hook-form';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const MakeAdmin = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = (data) => {
        const newAdminEmail = {
            adminEmail: data.email
        }

        console.log(newAdminEmail)

        fetch("https://warm-crag-75291.herokuapp.com/addAdmin", {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newAdminEmail)
        })
    }

    return (
        <main className="container-fluid">
            <div className="row">
                <div className="col-md-2 px-0">
                    <AdminSidebar />
                </div>
                <div className="col-md-10 px-0">
                    <div className="add-service-header">
                        <h4>Make Admin</h4>
                    </div>
                    <div className="add-service-body">
                        <div className="add-service-form">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="text">Service Title</label>
                                            <input type="email" {...register('email', { required: true })} placeholder="Enter Title" className="form-control" />
                                            {errors.email && <p className="text-danger">This field is required</p>}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="add-service-btn">
                                            <button className='submit-btn' type="submit">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MakeAdmin;