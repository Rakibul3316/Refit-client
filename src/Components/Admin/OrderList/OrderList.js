import React, { useEffect, useState } from 'react';
import './OrderList.css'
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const OrderList = () => {

    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch("https://warm-crag-75291.herokuapp.com/allOrders")
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])


    return (
        <main className="container-fluid">
            <div className="row">
                <div className="col-md-2 px-0">
                    <AdminSidebar />
                </div>
                <div className="col-md-10 px-0">
                    <div className="order-list-header">
                        <h4>Add Service</h4>
                    </div>
                    <div className="order-list-body">
                        <div className="order-list-table">
                            <table className="content-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Service</th>
                                        <th>Pay with</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allOrders.map(order => (
                                            <tr>
                                                <td> {order.userName} </td>
                                                <td> {order.userEmail} </td>
                                                <td> {order.serviceTitle} </td>
                                                <td>Creadit Card</td>
                                                <td><button>pendding</button></td>
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

export default OrderList;