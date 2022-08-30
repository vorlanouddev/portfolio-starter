import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import Vactor2glassesimoji from "../../img/glassesimoji.png";
import FloationgDiv from "../FloationgDiv/FloationgDiv";

const IntroDuaction = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am</span>
          <span>Andrew Thomas</span>
          <span>
            {" "}
            Frontend Developer with high level of experience iin web designing
            and development, Producting the Quality work
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-cons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <img src={Vactor2glassesimoji } alt="" />
        
        <div style={{top:"-4%",left:"58%"}}>
          <FloationgDiv img={crown} txt1="Web" txt2="Developer" />
        </div>
        <div style={{top:"18rem",left:"0rem"}}>
          <FloationgDiv img={thumbup} txt1="Best" txt2="Award" />
        </div>
        <div className="blur" style={{backgroundColor:"rgb(238 210 255)"}}></div>
   <div className="blur" style={{backgroundColor:"#c1f5ff",top:"17rem",width:"21rem",height:"11rem",left:"-9rem",zIndex:-1}}></div>
      </div>
    </div>
  );
};

export default IntroDuaction;
