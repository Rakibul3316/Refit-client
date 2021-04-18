import React, { useEffect, useState } from 'react';
import './RemoveService.css'
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const RemoveService = () => {


    const [allServices, setAllServices] = useState([]);
    console.log(allServices);

    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(res => res.json())
            .then(data => setAllServices(data));
    }, [])


    const handleDelete = (id) => {
        console.log(id)
        fetch("https://warm-crag-75291.herokuapp.com/deleteService", {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ id: id })
        })

        const restData = allServices.filter(restService => restService._id !== id);
        setAllServices(restData)

    }



    return (
        <main className="container-fluid">
            <div className="row">
                <div className="col-md-2 px-0">
                    <AdminSidebar />
                </div>
                <div className="col-md-10 px-0">
                    <div className="remove-list-header">
                        <h4>Remove Service</h4>
                    </div>
                    <div className="remove-list-body">
                        <div className="remove-list-table">
                            <table className="content-table">
                                <thead>
                                    <tr>
                                        <th>Service Title</th>
                                        <th>Price</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allServices.map(service => (
                                            <tr>
                                                <td>{service.title}</td>
                                                <td> {service.price} </td>
                                                <td><button onClick={() => handleDelete(service._id)} className="delete-btn">Delete</button></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default RemoveService;