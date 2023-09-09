import '../css/contact.css';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {

    const form = useRef();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_j0oebum', 'template_xrjn9od', form.current, 'SSMQBZPF6IuhCucaD')
        .then((result) => {
            console.log(result.text);
            setEmail('');
            setName('');
            setMessage('');
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className="contact-container">
            <div id="contact-card">
                <div className='contact-header'>
                    Contact Me
                </div>
                <form ref={form} onSubmit={sendEmail} className='email-form'>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}  name="user_name" placeholder='Name' />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="user_email" placeholder='Email' required />
                    <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message' />
                    <input type="submit" value="Send" id="submit"/>
                </form>
            </div>
        </div>
    )
}

export default Contact;