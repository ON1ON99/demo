'use client';
import React from 'react';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';

const About = () => {
    return (
        <div className='flex'>
            <Header />
            <div className='flex'>
                <h1>About</h1>
                <p>Some information about the company</p>
            </div>
            <Footer />
        </div>
    )
}

export default About;