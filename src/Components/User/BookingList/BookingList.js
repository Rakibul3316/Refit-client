import React from 'react';
import './BookingList.css'
import UserSidebar from '../UserSidebar/UserSidebar';

const BookingList = () => {
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
                        <div className="user-form">

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BookingList;