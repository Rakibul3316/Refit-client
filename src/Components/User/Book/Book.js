import React from 'react';
import './Book.css'
import UserSidebar from '../UserSidebar/UserSidebar';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const Book = () => {
    return (
        <main className="container-fluid">
            <div className="row">
                <div className="col-md-2 px-0">
                    <UserSidebar />
                </div>
                <div className="col-md-10 px-0">
                    <div className="user-header">
                        <h4>Book</h4>
                    </div>
                    <div className="user-body">
                        <div className="book-form">
                            <ProcessPayment />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Book;