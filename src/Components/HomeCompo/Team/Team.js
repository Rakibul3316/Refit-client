import React from 'react';
import SingleMember from '../SingleMember/SingleMember';
import './Team.css'

const teamMembers = [
    {
        id: 1,
        img: 'https://i.ibb.co/9hFbMwV/person-1.jpg',
        name: "Ismail Alex"
    },
    {
        id: 2,
        img: 'https://i.ibb.co/Bq79mFb/person-2.jpg',
        name: "Hilton Alex"
    },
    {
        id: 3,
        img: 'https://i.ibb.co/fQxLGf7/person-4.jpg',
        name: "Maria Martin"
    },
    {
        id: 4,
        img: 'https://i.ibb.co/3fd9s3L/person-3.jpg',
        name: "Smith Alex"
    },
]

const Team = () => {
    return (
        <section className="team text-center">
            <div className="container">
                <div className="team-title">
                    <h1>Our <span>Expart</span>Team</h1>
                    <p>Explore Our Completed Services! Consectetur adipiscing elitt elit tellus, luctus pulvinar dapibus leoconsectetur luctus nec.</p>
                </div>
                <div className="team-members">
                    <div className="row">
                        {
                            teamMembers.map(member => (<SingleMember member={member}></SingleMember>))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;