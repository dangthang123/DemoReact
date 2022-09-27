import React, { useRef } from 'react';
import map from '../../img/map.jpg';
import FooterBottom from '../Footer/FooterBottom';
import '../Page/css/ContactPage.css';
import emailjs from '@emailjs/browser';
export default function ContactPage() {
    const form = useRef();

    const sendEmail = (e) => {
        alert("Email has been sent");
        e.preventDefault();
        emailjs.sendForm('service_yv4pb1j', 'template_sy25rwv', form.current, 'eWjToPt2KjKt_g12T')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='container-all'>
            <div className="contact container">
                <div className='contact-title'>
                    <h2>Contact Us</h2>
                    <p>Swing by for a cup of coffee, or leave us a message:</p>
                </div>
                <div className="contact-row">
                    <div className="contact-column">
                        <img src={map} style={{ width: "100%", marginTop: "23px", height: "410px" }} alt=""></img>
                    </div>
                    <div className="contact-column">
                        <form action="" ref={form} onSubmit={sendEmail}>
                            <label htmlFor="fname">First Name</label>
                            <input type="text" id="fname" name="first_name" placeholder="Your name.."></input>
                            <label htmlFor="lname">Last Name</label>
                            <input type="text" id="lname" name="last_name" placeholder="Your last name.."></input>
                            <label htmlFor="country">Country</label>
                            <select id="country" name="from_country">
                                <option value="australia">Australia</option>
                                <option value="canada">Canada</option>
                                <option value="usa">USA</option>
                                <option value="china">China</option>
                                <option value="vietnam">VietNam</option>
                                <option value="laos">Lao</option>
                                <option value="laos">Laos</option>
                                <option value="abc">ThaiNguyen</option>
                                <option value="..">...</option>
                            </select>
                            <label htmlFor="subject" >Subject</label>
                            <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: "170px" }}></textarea>
                            <input type="submit" value="Submit" id="submit" name="submit" ></input>
                        </form>
                    </div>
                </div>
            </div>
            <FooterBottom />
        </div>
    )
}