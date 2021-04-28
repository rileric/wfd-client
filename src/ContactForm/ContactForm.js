import { Component } from 'react';

export default class ContactForm extends Component {

    render() {
        return (
            <section className='ContactForm__wrapper'>
                <h2>Contact the Developer</h2>
                <form action="https://formspree.io/f/myybejzd" method="POST" id="contactForm">
                    <label for="user-name">Name:</label>
                    <input className="user-input" id="user-name" type="text" name="name" required />
                    <label for="email">Email:</label>
                    <input className="user-input" id="email" type="email" name="_replyto" required />
                    <label for="form-message">Message:</label>
                    <textarea id="form-message" name="message"></textarea>
                    <input type="submit" id="contactFormSubmit" value="Send" />
                </form>
            </section>            
        )
    }
     
}
