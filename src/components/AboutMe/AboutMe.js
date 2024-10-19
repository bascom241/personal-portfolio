import React from 'react'
import avatar2 from '../Hero/images/about.jpg'
import './AboutMe.css'
import Marquee from 'react-fast-marquee'
import Image1 from '../../assets/l1-removebg-preview.png'
import Image2 from '../../assets/l10-removebg-preview.png'
import Image3 from '../../assets/l3.png'
import Image4 from '../../assets/l4-removebg-preview.png'
import Image5 from '../../assets/l6.png'
import Image6 from '../../assets/l7-removebg-preview.png'
import Image7 from '../../assets/l8-removebg-preview.png'
import Image8 from '../../assets/l9.png'
import Image9 from '../../assets/l11-removebg-preview.png'
const AboutMe = () => {
    return (
        <>

  
        <div className='about container' id='about'>
            <h1>About Me</h1>
            <div className='about-container'>
                <div className='about-img'>
                    <img src={avatar2} alt='' />
                </div>
                <div className='about-text'>
                    <p>Hello, I'm Abdulbasit, a web developer based in Nigeria with 3 years of experience. I specialize in crafting clean and functional websites that resonate with users. Let's bring your ideas to life!</p>
                    <p> I'm dedicated to delivering high-quality work and providing innovative solutions to enhance online presence. Let's collaborate and build something amazing together!</p>
                    <div className='div'>

                        <div className='p'>
                            <p>Frontend</p>
                            <p>Backend  </p>

                        </div>
                        <div className='hr'>
                            <hr className="inline-hr" />
                            <hr className="inline-hr" />

                        </div>
                    </div>

                </div>
            </div>

         

        </div>


   <div className='marquee-container'>
                <h1>My skills</h1>
                <div className='marquee'>
                    <Marquee pauseOnHover speed={50} >
                        <div>
                            <img src={Image1} alt='' />
                        </div>
                        <div>
                            <img src={Image2} alt='' />
                        </div>
                        <div>
                            <img src={Image3} alt='' />
                        </div>
                        <div>
                            <img src={Image4} alt='' />
                        </div>
                        <div>
                            <img src={Image5} alt='' />
                        </div>
                        <div>
                            <img src={Image6} alt='' />
                        </div>
                        <div>
                            <img src={Image7} alt='' />
                        </div>
                        <div>
                            <img src={Image8} alt='' />
                        </div>
                        <div>
                            <img src={Image9} alt='' />
                        </div>
                    </Marquee>
                </div>
            </div>
            </>
    )
}

export default AboutMe
