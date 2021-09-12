import React from 'react';
import './css/contact.scss';

function Contact() {
    return (
        <div className="contact-main-container">
            <main className="contact-container">
                    <div className="contact-email">
                        <span>E-Mail:</span>
                        <span>xxx.xxx@xxx.com</span>
                    </div>
                    <div className="contact-phone-number">
                        <span>Phone number:</span>
                        <span>xxx-xxx-xxx</span>
                    </div>
                    <div className="contact-github">
                        <span>GitHub repository:</span>
                        <span>TheKizmerr</span>
                    </div>
            </main>
        </div>
    )
}

export default Contact;