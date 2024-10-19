import React from 'react'
import './Service.css'
import { useState } from 'react'
const Service = () => {
    const [p1,setP1]= useState('Effective communication is at the core of my approach to web development. I excel in articulating technical concepts to diverse stakeholders, collaborating seamlessly with designers and content creators, and understanding client needs to deliver projects that exceed expectations. Clear communication ensures that project goals are achieved efficiently and that stakeholders are consistently informed and satisfied.')
    const[p2,setP2] = useState('With a keen eye for design principles and usability, I create visually appealing and functional website layouts. My understanding of design aesthetics, color theory, and user experience enables me to design interfaces that are intuitive and visually engaging, optimizing user interaction and satisfaction.')
    const [p3,setP3] = useState('I leverage my background in content writing to craft compelling website copy that engages and informs visitors. By focusing on clarity, SEO optimization, and persuasive writing techniques, I ensure that the content not only communicates effectively but also enhances the overall user experience.')
    return (

        <section className='container ' id='service'>

     <h1>My Service</h1>
        <div className='service '>

            <div className='service-container'>
                <p>01</p>
                <p>Web Design</p>
                <p>{p2.length>30? p2.substring(0,130) + '.....': p2}</p>
                <a href='https://www.linkedin.com/in/abdulbasit-abdulwahab-144507258/' alt=''><p className='read-more'>Learn more ➡️</p></a>
            </div>
            <div className='service-container'>
                <p>02</p>
                <p>Communication Skills </p>
                <p>{p1.length>30? p1.substring(0,130) + '.....': p1}</p>
                <a href='https://www.linkedin.com/in/abdulbasit-abdulwahab-144507258/' alt=''><p className='read-more'>Learn More ➡️</p></a>
            </div>
            <div className='service-container'>
                <p>03</p>
                <p>Content Writing</p>
                <p>{p3.length>30? p3.substring(0,130) + '.....': p3} </p>
                <a href='https://www.linkedin.com/in/abdulbasit-abdulwahab-144507258/' alt=''><p className='read-more'>Learn More ➡️</p></a>
            </div>
          
        

        </div>
        </section>
    )
}

export default Service
