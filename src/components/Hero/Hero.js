import React from 'react';
import './Hero.css';
import avatar from './images/avatarProfile.jpeg';
import resume from '../../assets/New Uploaded Resume (1).pdf';

const Hero = () => {
    return (
        <section id='home'>
            <div className='box'>
                <div className='content'>
                    <img src={avatar} alt='Profile Avatar' />
                    <h2>Bascotee<br /><span>Web designer</span></h2>
                    <a href='#contact'>Hire me</a>
                </div>
            </div>
            <div className='hero-description'>
                <h1><span>I'm ABDULBASIT,</span> Full stack developer based in Nigeria</h1>
                <p>I've developed websites for organizations and businesses. A passionate web developer with 3 years of experience.</p>
            </div>
            <div className='connecti'>
                <li className='hero-connect'><a href='#contact'>Connect With me</a></li>
                <li className='hero-resume'>
                    <a href={resume} download='resume'>My Resume</a>
                </li>
            </div>
        </section>
    );
}

export default Hero;
