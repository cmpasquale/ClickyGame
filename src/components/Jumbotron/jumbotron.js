    
import React from "react";
import "./jumbotron.css";

const Jumbotron = props => (
  
  <nav>
    <ul>
      <li className="brand animated wobble">
        <span className = "header">{props.title}</span>
      </li>

      <li id="message">{props.message}</li>

      <li id="gameScore">Current Score: {props.score}</li>

      <li id="highScore">Top Score: {props.highScore}</li>
    </ul>
    <br></br>
  </nav>



    );
    
    
    
    
    
    
export default Jumbotron;