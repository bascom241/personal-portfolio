import React from 'react'



import work6 from '../../assets/Screenshot 2024-10-19 141337.png'
import './Project.css'

import work1 from '../../assets/blogW.png'
import work2 from '../../assets/work2.png'
import work3 from '../../assets/work3.png'
import work4 from '../../assets/Screenshot 2024-06-17 091420.png'
import work5 from '../../assets/bloggg.png'
import Image1 from '../../assets/l1-removebg-preview.png'
import Image2 from '../../assets/l10-removebg-preview.png'
import Image3 from '../../assets/l3.png'
import Image4 from '../../assets/l4-removebg-preview.png'
import Image5 from '../../assets/l6.png'
import Image6 from '../../assets/l7-removebg-preview.png'
import Image7 from '../../assets/l8-removebg-preview.png'
import Image8 from '../../assets/l9.png'
import Image9 from '../../assets/l11-removebg-preview.png'
const Project = () => {
    return (
        <section className='container' id='portfolio'>


            <h1>My Project</h1>
            <div className='project-container'>
                <div className='image-container'>
                    <div className='proj-image'>
                        <img src={work3} />
                    </div>

                    <div className='links'>

                        <a href='https://t.co/moibfWnQYh'>Live</a>
                        <a href='https://github.com/bascom241/Eccormerce1'>Git hub</a>
                      
                        <div>
                            <img src={Image1} />
                            <img src={Image5}/>
                            <img src={Image3} />
                            <img src={Image4}/>
                        </div>
                      
                    </div>


                </div>
                <div className='image-container'>
                    <div className='proj-image'>
                        <img src={work2} />
                    </div>
                    <div className='links'>
                        <a href='https://t.co/l7zRfppypn'>Live</a>
                        <a href='https://github.com/bascom241/myAdminPanel'>Git hub</a>

                        <div className='admin'>
                            <p>Admin Dashoard of eccormece</p>
                            <p>abdulbasitabdulwahab21@gmail.com</p>
                            <p>omotosho123</p>
                        </div>
                    </div>
                    

                </div>
                <div className='image-container'>
                    <div className='proj-image'>
                        <img src={work1} />
                    </div>
                    <div className='links'>
                        <a href='https://blog-1-hxeo.onrender.com/'>Live</a>
                        <a href='https://github.com/bascom241/blog'>Git hub</a>

                        <div>
                            <img src={Image1} />
                            <img src={Image5}/>
                            <img src={Image3} />
                            <img src={Image4}/>
                        </div>
                    </div>

                </div>
                <div className='image-container'>
                    <div className='proj-image'>
                        <img src={work4} />
                    </div>
                    <div className='links'>
                        <a href='https://spanunilorinchapter.vercel.app/'>Live</a>
                        <a href='https://github.com/bascom241/span'>Git hub</a>

                        <div>
                    
                       
                            <img src={Image6} />
                            <img src={Image7}/>
                            <img src={Image5}/>
                        </div>
                    </div>

                </div>
                <div className='image-container'>
                    <div className='proj-image'>
                        <img src={work5} />
                    </div>
                    <div className='links'>
                        <a href='https://blog-app-six-wine.vercel.app/'>Live</a>
                        <a href='https://github.com/bascom241/blogApp'>Git hub</a>
                        <div>
                            <img src={Image1} />
                            <img src={Image5}/>
                            <img src={Image7}/>
                           
                        </div>
                    </div>

                </div>
                <div className='image-container'>
                    <div className='proj-image'>
                        <img src={work6} />
                    </div>
                    <div className='links'>
                        <a href='https://my-app-rouge-omega.vercel.app/'>Live</a>
                        <a href='https://github.com/bascom241/myApp'>Git hub</a>

                        <div>
                            <img src={Image1} />
                            <img src={Image5}/>
                            <img src={Image7}/>
                           
                        </div>
                    </div>

                </div>

                <div>

                </div>
            </div>
        </section>
    )
}

export default Project
