import {useRef} from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css'

const ContactUs = ()=>{

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_ok8qec5', 'template_vb7c4r1', form.current, {
            publicKey: 'jnVfujugbecqceZpp',
            })
            .then(() => {
              console.log('SUCCESS!');
              e.target.reset();
              alert('Email Sent !');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

    return(
        <form ref={form} onSubmit={sendEmail} className='Contact'>
            <label className='title'>Contact Us</label>
            {/* <label>Name</label> */}
            <input type="text" name="user_name" placeholder='Name...'/>
            {/* <label>Email</label> */}
            <input type="email" name="user_email" placeholder='Email...'/>
            {/* <label>Message</label> */}
            <textarea name="message" placeholder='Type your message...'/>
            <input type="submit" value="Send" className='submitBtn'/>
        </form>
    )
}

export default ContactUs;