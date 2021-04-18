import React, { useContext, useEffect, useState } from 'react';
import './BookingList.css'
import UserSidebar from '../UserSidebar/UserSidebar';
import { ServiceContext } from '../../../App';
import SingleBookOrder from '../SingleBookOrder/SingleBookOrder';

const BookingList = () => {

    const { value2 } = useContext(ServiceContext);
    const [loggedInUser, setLoggedInUser] = value2;

    const [userOrders, setUserOrders] = useState([])
    console.log(userOrders)

    useEffect(() => {
        fetch(`https://warm-crag-75291.herokuapp.com/userOrders?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setUserOrders(data))
    }, [loggedInUser])



    return (
        <main className="container-fluid">
            <div className="row">
                <div className="col-md-2 px-0">
                    <UserSidebar />
                </div>
                <div className="col-md-10 px-0">
                    <div className="user-header">
                        <h4>Booking List</h4>
                    </div>
                    <div className="user-body">
                        <div className="user-order-list">
                            <div className="row">
                                {
                                    userOrders.map(order => (<SingleBookOrder order={order}></SingleBookOrder>))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BookingList;