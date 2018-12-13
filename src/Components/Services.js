import React, { Component } from 'react';
import menuButton from '../img/nav-hamburger.png';
import menuButtonClose from '../img/nav-hamburger-close.png';
import servicesJumbo from '../img/services/services-jumbotron.png';
import preConstruction from '../img/services/services-tab-pre-construction-img.png';
import construction from '../img/services/services-tab-construction-img.png';
import designBuild from '../img/services/services-tab-design-build-img.png';
import sustainability from '../img/services/services-tab-sustainability-img.png';
import '../css/index.css';

class services extends Component {
    render() {
        return (
            <body>
            <div className="nav-menu">
                <h1>S&J</h1>
                <img src={menuButtonClose} alt="" className="nav-toggle-off" />
                <a href="index.html">Home</a>
                <a href="services.html">Services</a>	
                <a href="about-us.html">About Us</a>
                <a href="projects.html">Projects</a>
                <a href="contact.html">Contact</a>
            </div>	

            <div className="container">
                <nav>
                    <h1>S&J</h1>
                    <img src={menuButton} alt="" className="nav-toggle-on" />
                </nav>

            <section className="jumbotron">
                <div>
                <img src={servicesJumbo} alt="" />
                <h1 id="services-jumbo-header">Services</h1>
                </div>
            </section>

            <div className="content-container">
                <p className="services-intro">Services include: completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
                <section className="tab-navigatior">
                    <div>
                        <a className="tablink tab-link-active" data-tab="1">Pre-Construction</a>
                        <a className="tablink" data-tab="2">Construction</a>
                        <a className="tablink" data-tab="3">Design Build</a>
                        <a className="tablink" data-tab="4">Sustainability</a>
                    </div>

                    <div className="tab-item tab-active" data-tab="1">
                        <h3>Pre-Construction</h3>
                        <div className="inner-tab">
                            <div>
                                <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p> <br />
                                <p>Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.</p>
                            </div>
                            <img src={preConstruction} alt="" />
                        </div>
                    </div>

                    <div className="tab-item" data-tab="2" style={{display:"none"}}>
                        <h3>Construction</h3>
                        <div className="inner-tab">
                            <div>
                                <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p> <br />
                                <p>Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.</p>
                            </div>
                            <img src={construction} alt="" />
                        </div>
                    </div>

                    <div className="tab-item" data-tab="3" style={{display:"none"}}>
                        <h3>Design Build</h3>
                        <div className="inner-tab">
                            <div>
                                <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p> <br />
                                <p>Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.</p>
                            </div>
                            <img src={designBuild} alt="" />
                        </div>
                    </div>

                    <div className="tab-item" data-tab="4" style={{display:"none"}}>
                        <h3>Sustainability</h3>
                        <div className="inner-tab">
                            <div>
                                <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p> <br />
                                <p>Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.</p>
                            </div>
                            <img src={sustainability} alt="" />
                        </div>
                    </div>
                </section>
            </div>
            <footer>
                    <div className="footer-content">
                        <div className="newsletter">
                            <h3>Interested in starting a project? <br /> Let’s talk:</h3>
                            <form>
                                <input type="text" value="Enter Email" className="input-box" />
                            </form>
                            <h4>We'll never share your email with anyone else.</h4>
                        </div>
                        <div className="locations">
                            <h3>New York</h3>
                            <address>
                                123 Lane<br />
                                Suite 100<br />
                                Albany, NY 12345<br />
                                202 555 0144
                            </address>
                        </div>
                        <div className="locations">
                            <h3>Florida</h3>
                            <address>
                                Ocean Drive<br />
                                Suite 201<br />
                                Orlando, FL 22345<br />
                                502 555 0144
                            </address>
                        </div>
                        <div className="locations">
                            <h3>California</h3>
                            <address>
                                Mountain Street<br />
                                Suite 105<br />
                                San Diego, CA 22345<br />
                                702 555 0144
                            </address>
                        </div>
                    </div>
                    <p>Copyright © 2018 Smith and Jones</p>
                </footer>
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"></script>
            <script src="../js/index.js"></script>
        </body>
        )
    }
}

export default services;