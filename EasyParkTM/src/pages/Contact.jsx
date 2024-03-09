import React from 'react';
import Navbar from '../navbar/Navbar';
import '../stylesheets/Contact.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function Contact(props) {

    let { username, email } = useParams(props)

    return (
        <div>
            {Navbar({username, email})}
            <div className='contact-us-container'>
                <h2>Contact Us</h2>
                <p>If you have any questions or concerns, feel free to reach out to us:</p>

                <div className='contact-info'>
                    <p>Email: example@example.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>

                {/* Add a contact form here if needed */}

                <div className='map-container'>
                    {/* You can embed a map or any other location-related information here */}
                    {/* Example: <iframe src="your-map-url" width="600" height="450" title="Location"></iframe> */}
                </div>
            </div>
        </div>
    );
}

export default Contact;