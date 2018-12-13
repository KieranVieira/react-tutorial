import React, { Component } from 'react';
import logo from '../img/home/home-jumbotron.png';
import logoMobile from '../img/home/home-mobile-jumbotron.png';
import menuButton from '../img/nav-hamburger.png';
import menuButtonClose from '../img/nav-hamburger-close.png';
import home1 from '../img/home/home-img-1.png';
import home1Mobile from '../img/home/home-mobile-img-1.png';
import home2 from '../img/home/home-img-2.png';
import home2Mobile from '../img/home/home-mobile-img-2.png';
import villas from '../img/home/home-villas-img.png';
import villasMobile from '../img/home/home-mobile-villas-img.png';
import outskirts from '../img/home/home-outskirts-img.png';
import outskirtsMobile from '../img/home/home-mobile-outskirts-img.png';
import blocks from '../img/home/home-the-blocks-img.png';
import blocksMobile from '../img/home/home-mobile-the-blocks-img.png';
import '../css/index.css';

class HomePage extends Component {
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
              <img src={logo} alt="" />
              <h1>Integrity,<br />
              Excellence,<br />
              Progress.</h1>
              </div>
            </section>
            <section className="content-container">
              <div className="item" id="item1">
                <img src={home1Mobile} alt="" className="mobile-img" />
                <div>
                  <h2>Smith & Jones Architects</h2> 
                  <p>Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam laboramus dissentiet in, nec no errem </p>
                  <a href="">Learn More</a> 
                </div>
                <img src={home1} alt="" className="desktop-img" />
              </div>
              <div className="item item2">
                <img src={home2Mobile} alt="" className="mobile-img" />
                <img src={home2} alt="" className="desktop-img" />
                <div>
                  <h2>Futuristic Designs</h2> 
                  <p>Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam laboramus dissentiet in, nec no errem </p>
                  <a href="">View Designs</a> 
                </div>	
              </div>
              <div className="recent-projects">
                <h3>Recent Projects</h3>
                <div className="projects-item" id="item2">
                  <img src={villas} alt="" className="desktop-img" />
                  <img src={villasMobile} alt="" className="mobile-img" />
                  <h2>THE VILLAS</h2>
                  <div>
                    <p>The Villas bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p><br />
                    <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
                  </div>
                </div>
                <div className="projects-item projects-item-middle" id="item3">
                  <img src={outskirts} alt="" className="desktop-img" />
                  <img src={outskirtsMobile} alt="" className="mobile-img" />
                  <h2>OUTSKIRTS</h2>
                  <div>
                    <p>The Outskirts are amazing to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p><br />
                    <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
                  </div>
                </div>
                <div className="projects-item" id="item4">
                  <img src={blocks} alt="" className="desktop-img" />
                  <img src={blocksMobile} alt="" className="mobile-img" />
                  <h2>THE BLOCKS</h2>
                  <div>
                    <p>The Blocks are amazing to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p><br />
                    <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
                  </div>
                </div>
              </div>
            </section>
            
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
            <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/ScrollMagic.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/plugins/animation.gsap.js"></script>
            <script src="../js/index.js"></script>
            <script src="../js/scroll.js"></script>
          </body>

    )
  }
}

export default HomePage;
