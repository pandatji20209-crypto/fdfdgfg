import React from "react";
import c from "../assets/c.webp";
import cplus from "../assets/cpp.webp";
import css from "../assets/css.webp";
import html from "../assets/html.webp";
import dsa from "../assets/dsa.webp";
import java from "../assets/java.webp";
import js from "../assets/js.webp";
import mongodb from "../assets/mongodb.png";
import sql from "../assets/mysql.webp";
import python from "../assets/python.webp";
import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <div className="resources-main">
      <div className="resource-container">
        <h1 className="cheatSheet">Download Notes</h1>
        <div className="resource-boxes">
          <div className="box-lng html">
            <img className="lng-img" src={html} alt="" />
            <b>
              <p className="lng-p">HTML Notes</p>
            </b>
            <p className="lng-p2">Download Notes Here</p>
            <Link to ="#" className="notes-btn">PDF Notes</Link>
            <Link to ="#" className="notes-btn wise">Chapterwise Notes</Link>
          </div>

          <div className="box-lng javascript">
            <img className="lng-img" src={js} alt="" />
            <b>
              <p className="lng-p">JavaScripts Notes</p>
            </b>
            <p className="lng-p2">Download Notes Here</p>
             <Link to ="#" className="notes-btn">PDF Notes</Link>
            <Link to ="#" className="notes-btn wise">Chapterwise Notes</Link>
          </div>

          <div className="box-lng css">
            <img className="lng-img" src={css} alt="" />
            <b>
              <p className="lng-p">CSS Notes</p>
            </b>
            <p className="lng-p2">Download Notes Here</p>
             <Link to ="#" className="notes-btn">PDF Notes</Link>
            <Link to ="#" className="notes-btn wise">Chapterwise Notes</Link>
          </div>
          <div className="box-lng python">
            <img className="lng-img" src={python} alt="" />
            <b>
              <p className="lng-p">Python Notes</p>
            </b>
            <p className="lng-p2">Download Notes Here</p>
             <Link to ="#" className="notes-btn">PDF Notes</Link>
            <Link to ="#" className="notes-btn wise">Chapterwise Notes</Link>
          </div>
          <div className="box-lng c">
            <img className="lng-img" src={c} alt="" />
            <b>
              <p className="lng-p">C Notes</p>
            </b>
            <p className="lng-p2">Download Notes Here</p>
             <Link to ="#" className="notes-btn">PDF Notes</Link>
            <Link to ="#" className="notes-btn wise">Chapterwise Notes</Link>
          </div>
          <div className="box-lng c++">
            <img className="lng-img" src={cplus} alt="" />
            <b>
              <p className="lng-p">C++ Notes</p>
            </b>
            <p className="lng-p2">Download Notes Here</p>
             <Link to ="#" className="notes-btn">PDF Notes</Link>
            <Link to ="#" className="notes-btn wise">Chapterwise Notes</Link>
          </div>
          <div className="box-lng dsa">
            <img className="lng-img" src={dsa} alt="" />
            <b>
              <p className="lng-p">DSA Notes</p>
            </b>
            <p className="lng-p2">Download Notes Here</p>
             <Link to ="#" className="notes-btn">PDF Notes</Link>
            <Link to ="#" className="notes-btn wise">Chapterwise Notes</Link>
          </div>
          <div className="box-lng sql">
            <img className="lng-img" src={sql} alt="" />
            <b>
              <p className="lng-p">SQL Notes</p>
            </b>
            <p className="lng-p2">Download Notes Here</p>
             <Link to ="#" className="notes-btn">PDF Notes</Link>
            <Link to ="#" className="notes-btn wise">Chapterwise Notes</Link>
          </div>
          <div className="box-lng mongodb">
            <img className="lng-img" src={mongodb} alt="" />
            <b>
              <p className="lng-p">MongoDB Notes</p>
            </b>
            <p className="lng-p2">Download Notes Here</p>
             <Link to ="#" className="notes-btn">PDF Notes</Link>
            <Link to ="#" className="notes-btn wise">Chapterwise Notes</Link>
          </div>
          <div className="box-lng java">
            <img className="lng-img" src={java} alt="" />
            <b>
              <p className="lng-p">Java Notes</p>
            </b>
            <p className="lng-p2">Download Notes Here</p>
             <Link to ="#" className="notes-btn">PDF Notes</Link>
            <Link to ="#" className="notes-btn wise">Chapterwise Notes</Link>
          </div>

        </div>
      </div>
          <div>
            <h1 className="cheatSheet">Download CheatSheets</h1>
            <div className="resource-boxes">
                <div className="box-lng html">
            <img className="lng-img" src={html} alt="" />
            <b>
              <p className="lng-p">HTML CheatSheet</p>
            </b>
            <p className="lng-p2">Download CheatSheet Here</p>
            <Link to ="#" className="notes-btn">Download</Link>
            
          </div>

           <div className="box-lng javascript">
            <img className="lng-img" src={js} alt="" />
            <b>
              <p className="lng-p">JavaScripts CheatSheet</p>
            </b>
            <p className="lng-p2">Download CheatSheet Here</p>
             <Link to ="#" className="notes-btn">Download</Link>
            
          </div>

          <div className="box-lng css">
            <img className="lng-img" src={css} alt="" />
            <b>
              <p className="lng-p">CSS CheatSheet</p>
            </b>
            <p className="lng-p2">Download CheatSheet Here</p>
             <Link to ="#" className="notes-btn">Download</Link>
            
          </div>
          <div className="box-lng python">
            <img className="lng-img" src={python} alt="" />
            <b>
              <p className="lng-p">Python CheatSheet</p>
            </b>
            <p className="lng-p2">Download CheatSheet Here</p>
             <Link to ="#" className="notes-btn">Download</Link>
            
          </div>

            <div className="box-lng dsa">
            <img className="lng-img" src={dsa} alt="" />
            <b>
              <p className="lng-p">DSA CheatSheet</p>
            </b>
            <p className="lng-p2">Download CheatSheet Here</p>
             <Link to ="#" className="notes-btn">Download</Link>
            
          </div>
          <div className="box-lng sql">
            <img className="lng-img" src={sql} alt="" />
            <b>
              <p className="lng-p">SQL CheatSheet</p>
            </b>
            <p className="lng-p2">Download CheatSheet Here</p>
             <Link to ="#" className="notes-btn">Download</Link>
            
          </div>
          <div className="box-lng mongodb">
            <img className="lng-img" src={mongodb} alt="" />
            <b>
              <p className="lng-p">MongoDB CheatSheet</p>
            </b>
            <p className="lng-p2">Download CheatSheet Here</p>
             <Link to ="#" className="notes-btn">Download</Link>
            
          </div>
          <div className="box-lng java">
            <img className="lng-img" src={java} alt="" />
            <b>
              <p className="lng-p">Java CheatSheet</p>
            </b>
            <p className="lng-p2">Download CheatSheet Here</p>
             <Link to ="#" className="notes-btn">Download</Link>
            
          </div>

            </div>
          </div>
    </div>
  );
};

export default Resources;
