import React from "react";
import "./card.css";



function Cards(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img 
        id={props.id}
        src={props.image}
        alt={props.name} 
        onClick={() => props.handleclick(props.id)}
     />
    </div>
    </div>
  );
}

export default Cards;