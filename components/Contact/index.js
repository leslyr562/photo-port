import React, { useState } from 'react';

function ContactForm() {

   const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    function handleChange(e) {
        //The spread operator was used, ...formState, so we can retain the other 
        //key-value pairs in this object. Without the spread operator, the formState 
        //object would be overwritten to only contain the name: value key pair.
        // the [] creates single property names (name, email, message)
        setFormState({...formState, [e.target.name]: e.target.value })
      }
      
      function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }
      
    
    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onChange={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} name="email" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;