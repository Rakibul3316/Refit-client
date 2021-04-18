import React, { useState } from 'react';
import './AddServices.css'
import { useForm } from 'react-hook-form';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import axios from 'axios';

const AddServices = () => {


    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null)

    const onSubmit = data => {
        const newData = {
            title: data.title,
            description: data.description,
            image: imageURL,
            price: data.price
        }
        console.log(newData);

        fetch("http://localhost:5000/addServices", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newData)
        })
    };

    const handleImgUpload = (e) => {
        console.log(e.target.files[0])
        const imgData = new FormData()
        imgData.set('key', 'a0adeb1188d74c4f681f8191e61684e1');
        imgData.append('image', e.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imgData)
            .then(function (response) {
                console.log(response.data.data.display_url);
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
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
                                            <input type="text" {...register('title', { required: true })} placeholder="Enter Title" className="form-control" />
                                            {errors.title && <p className="text-danger">Please, Fill out this field.</p>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="description">Description</label>
                                            <textarea rows="5" {...register('description', { required: true })} placeholder="Enter Description" className="form-control" ></textarea>
                                            {errors.description && <p className='text-danger'>Please, Fill out this field.</p>}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="price">Service Price</label>
                                            <input type="text" {...register('price', { required: true })} placeholder="Enter Price" className="form-control" />
                                            {errors.price && <p className="text-danger">Please, Fill out this field.</p>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="file">Image</label>
                                            <input onChange={handleImgUpload} type="file" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="add-service-btn text-right">
                                    <button className='submit-btn' type="submit">Submit</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
};

export default AddServices;