import React from "react";
import LightRays from './LightRays';
// import LaserFlow from './LaserFlow';
import { useRef } from 'react';
import icon from './icons.svg';
import { Link } from "react-router-dom";

const About = () => {
  return (
      <div className="body">
    

    <div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <LightRays
    raysOrigin="top-center"
    raysColor="#00ffff"
    raysSpeed={1.5}
    lightSpread={0.8}
    rayLength={1.2}
    followMouse={true}
    mouseInfluence={0.1}
    noiseAmount={0.1}
    distortion={0.05}
    className="custom-rays"
    />
    </div>
    {/* <div style={{ height: '500px', position: 'relative', overflow: 'hidden' }}>
  <LaserFlow
    selectedExample="basic"
    verticalSizing={5}
    wispDensity={0}
    wispSpeed={1}
    wispIntensity={20}
  />
</div> */}



      <div className="heading-container">

      <h1 className="heading1">Hi This is </h1>
      <h1 className="heading2">YASH UPADHYAY</h1>
      </div>
      <div className="para-container">

      <p className="p1">
        I'm a React-based full-stack developer and UI/UX designer
        who builds complete web products from interface to infrastructure. 
      </p>
        <p className="p2">
        focus on clean design, scalable architecture, and user experiences that
        actually make sense.
          </p>
      </div>
      <div className="about-me">
      </div>
        <h1 className="what-i-do">
          What I Bring to the Table
        </h1>
        <div className="box-container">
          <div data-aos="fade-right" className="box box1">
            <h1 className="box-heading">Frontend Engineering</h1>
            <div className="box-para1">
            </div>
            <p>Build responsive, accessible UIs in React</p>
            <p>Component-driven architecture</p>
            <p>Performance-focused rendering</p>
            <p>Clean state management</p>
          </div>
          <div data-aos="fade-left" className="box box2">
            <h1 className="box-heading">Backend Development</h1>
            <div className="box-para2">
              <p>REST APIs & authentication</p>
              <p>Database design & integration</p>
              <p>Secure data handling</p>
              <p>Scalable server-side logic</p>
            </div>
          </div>
          <div data-aos="fade-right" className="box box3">
            <h1 className="box-heading1">UI / UX Design</h1>
            <div className="box-para3">
              <p>User-first interface design</p>
              <p>Wireframes & design systems</p>
              <p>UX decisions backed by logic</p>
              <p>Minimal, functional layouts</p>
            </div>
          </div>
          <div data-aos="fade-left" className="box box4">
            <h1 className="box-heading">End-to-End Development</h1>
            <div className="box-para4">
              <p>From idea to deployment</p>
              <p>Frontend + backend integration</p>
              <p>Debugging & optimization</p>
              <p>Production-ready workflows</p>
            </div>
          </div>
        </div>

        <div className="technology">
          <h1 className="bring">Tools & Technology </h1>
        </div>
        <div className="tech-boxes">
          <div data-aos="fade-right" className="frontend">
            <img src="https://i.pinimg.com/1200x/8d/4c/40/8d4c404b1fc27606e8f37e8d01bd8f49.jpg" alt="" />
            <p className="front">Frontend</p>
            <div className="front-heading-container">
              <h2 className="front-h2">Frontend Development</h2>
              <p className="front-p">I build responsive, user-focused interfaces using modern web standards. Strong at translating designs into clean, maintainable UI with attention to performance, accessibility, and usability..</p>
            </div>
          </div>
          <div data-aos="fade-right" className="tools">
            <img src="https://i.pinimg.com/736x/94/c4/6a/94c46a3e9ac3c7f653e5d7c722032f5d.jpg" alt="" />
            <p className="tool">Tools</p>
            <div className="tool-heading-container">
              <h2 className="toolh2">Tools & Technologies</h2>
              <p className="tool-para">I work with modern development tools to build, test, and deploy applications efficiently. Comfortable using version control, package managers, and developer tooling to maintain clean workflows and ship reliable code.</p>
          </div>
            </div>
          <div data-aos="fade-left" className="backend">
            <img src="https://i.pinimg.com/1200x/8d/4c/40/8d4c404b1fc27606e8f37e8d01bd8f49.jpg" alt="" />
            <p className="back">Backend</p>
            <div className="back-heading-container">
              <h2 className="backh2">Backend Development</h2>
              <p className="back-para">I design and build scalable server-side systems, APIs, and databases that power reliable applications. Focused on clean architecture, security, and performance, with logic that actually holds up under real use.</p>
            </div>
          </div>
        </div>

          <div className="footer">
            <hr className="hr" />
            <div className="footer-heading">
              <ul>
                <li>svg</li>
                <li>|</li>
                <li>Your next idea, beautifully designed and flawlessly built</li>
                <li className="svg">
                  <img className="icon" src="https://cdn-icons-png.flaticon.com/128/1384/1384007.png" alt="" />
                </li>
                <li>
                  <img className="icon" src="https://cdn-icons-png.flaticon.com/128/3669/3669688.png" alt="" />
                  </li>
                <li>
                  <img className="icon" src="https://cdn-icons-png.flaticon.com/128/1384/1384015.png" alt="" />
                </li>
                <li>
                  <img className="icon" src="https://cdn-icons-png.flaticon.com/128/733/733609.png" alt="" />
                </li>
              </ul>
            </div>
            <div className="heading">
              <h1>LET'S MAKE IT<br />HAPPEN NOW</h1>
              <a  href=""><button className="start">Start Now</button></a>
              <Link to="/hire"><button className="start1">Book a call</button></Link>
              <div className="navigate">
                <p className="navigate-p">NAVIGATE</p>
                <ul>
                  <Link to="/">HOME</Link>
                  <Link to="/resources">RESOURCES</Link>
                  <Link to="/docs">DOCS</Link>
                  <Link to="/hire ">CONTACT</Link>
                </ul>
              </div>
               <div className="navigate1">
                <p className="navigate-p1">DOCUMENTS</p>
                <ul>
                  <a href="">Website Designs</a>
                  <a href="">RESOURCES</a>
                  <a href="">DOCS</a>
                  <a href="">GIT & GITHUB</a>
                  <br /><br /><br /><br /><br /><br /><br /><br />
                </ul>
              </div>

            </div>
          </div>

      

    </div>
    
  )
}

export default About
