import React from 'react'
import './Contact.css'
import { useState, useRef } from 'react'
import { MdEmail } from 'react-icons/md'
import { MdCall } from 'react-icons/md'
import { MdMyLocation } from 'react-icons/md'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify'
const Contact = () => {
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     message: ''
    // })

    // const handleChange = (evt) => {
    //     const changeName = evt.target.name;
    //     const changeField = evt.target.value;

    //     setFormData(currData => {
    //         currData[changeName] = changeField;
    //         console.log(formData.name)
    //         return { ...currData }
    //     })

    // }


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_8ylrkkr', 'template_8nrkk94', form.current, {
                publicKey: 'ZW99MvlPVKFRexJ7a',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    toast.success('Email sent successfully')
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error('Email sent failed')
                },
            );

        e.target.reset();
    };
    return (
        <section className='container' id='contact'>
            <h1>Get In Touch </h1>

            <div className='contact'>


                <div className='message'>
                    <h2>Leave a message</h2>
                    <p className='p'>Hi, I am a passonate web developer with great work ethics.
                        Im Currently avalaible to take on a new Projects. You want a great website for your bussiness? Kindly Contact me anytime.
                    </p>

                    <p className='email'><MdEmail />abdulbasitabdulwahab21@gmail.com</p>
                    <p className='email'><MdCall />+234 08081112753</p>
                    <p className='email'><MdMyLocation />ilorin, Nigeria.











                    </p>
                </div>
                <div className='form'>
                    <form ref={form} onSubmit={sendEmail} >
                        <label>Your Name</label>
                        <input
                            type='name'
                            placeholder='name'
                            name='user_name'
                            required
                        />
                        <label>Your Email</label>
                        <input
                           type='email'
                            placeholder='email address'
                            name='user_email'
                            required
                        />
                        <label>Write Your message Here</label>
                        <input
                           id='messageus'
                            name='message'
                        />

                        
                        <button> submit Now</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
