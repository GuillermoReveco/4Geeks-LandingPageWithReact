import React from 'react';
import Cards from './Cards';
import Nav from './Nav';
import Jumbotron from './Jumbotron';
import Footer from './Footer';

function Home() {
    return (
        <div >
            <div className='bg-dark text-white'>
                <Nav />
            </div>
            <div className='container'>
                <Jumbotron />
                <Cards />
            </div>
            <Footer/>
        </div>
    );
}
export default Home;