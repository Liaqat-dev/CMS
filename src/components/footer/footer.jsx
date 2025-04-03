import  React from 'react';
import './footer.css';
const Footer = () => {
    return(
        <div className={"footer"} id={"footer"}>
            <div className={"footer-content"}>
                <div className={"footer-content-left"}>
                    <img src={"./logo.png"} alt={""}/>
                    <h5>Our Social Media Marketing Pages</h5>
                    <div className={"footer-content-left-social"}>

                        <img src={"./facebook_icon.png"} alt={""}/>
                        <img src={"./linkedin_icon.png"} alt={""}/>
                        <img src={"./twitter_icon.png"} alt={""}/>
                    </div>
                </div>
                <div className={"footer-content-center"}>
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About-us</li>
                        <li>Delivery</li>
                        <li>privacy-policy</li>
                    </ul>

                </div>
                <div className={"footer-content-right"}>
                   <h2>CONTACT-US</h2>
                    <ul>
                        <li>+92-8906524256</li>
                        <li>contact@tasty.com</li>
                    </ul>
                </div>

            </div>
          <hr/>
            <p className={"footer-copyright"}>
                Copyright © 2025  @tasty.com - All rights reserved
            </p>
        </div>
    )
}
export default Footer;