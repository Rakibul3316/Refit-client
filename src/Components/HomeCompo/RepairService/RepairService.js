import React from 'react';
import './RepairService.css'
import repairImg from '../../../image/repair.jpg'

const RepairService = () => {
    return (
        <section className="container">
            <div className="repair-service">
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center">
                        <div className="repair-content">
                            <h1>Repair Services For Your Device</h1>
                            <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo in consequat. Duis aute irure dolor in reprehenderit.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="repair-img">
                            <img src={repairImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RepairService;