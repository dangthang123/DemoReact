import React from 'react';
import map from '../../img/map.jpg';
import FooterBottom from '../Footer/FooterBottom';
import '../Page/css/ContactPage.css';
export default function ContactPage() {
    return (
        <div className='container-all'>
            <div className="contact container">
                <div className='contact-title'>
                    <h2>Contact Us</h2>
                    <p>Swing by for a cup of coffee, or leave us a message:</p>
                </div>
                <div className="contact-row">
                    <div className="contact-column">
                        <img src={map} style={{ width: "100%" }} alt=""></img>
                    </div>
                    <div className="contact-column">
                        <form action="">
                            <label htmlFor="fname">First Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
                            <label htmlFor="lname">Last Name</label>
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
                            <label htmlFor="country">Country</label>
                            <select id="country" name="country">
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