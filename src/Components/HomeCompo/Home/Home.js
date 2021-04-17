import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import OurServices from '../OurServices/OurServices';
import RepairService from '../RepairService/RepairService';
import Team from '../Team/Team';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <>
            <Navigation />
            <main>
                <Header />
                <RepairService />
                <OurServices />
                <Team />
                <Testimonial />
                <Footer />
            </main>
        </>
    );
};

export default Home;