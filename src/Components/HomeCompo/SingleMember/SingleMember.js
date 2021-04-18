import React from 'react';
import './SingleMember.css'
import img from '../../../image/person-1.jpg'

const SingleMember = ({ member }) => {
    return (
        <div className="col-md-3">
            <div className="single-member">
                <div className="member-img">
                    <img src={member.img} alt="" />
                </div>
                <div className="member-name">
                    <h3> {member.name} </h3>
                </div>
            </div>
        </div>
    );
};

export default SingleMember;