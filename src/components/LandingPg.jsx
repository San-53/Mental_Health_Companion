import React from "react";

export default function Product(props) {
  return (
      <div className="card">
    <div>
        <img className="product--image" src={props.url} alt="product image" />
        <h2>{props.name}</h2>
        <p className="price">{props.price}</p>
        <p>{props.description}</p>
        <p>Link - {props.link}</p>
        
      </div>
      <div className="info">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et saepe tenetur illo, ipsa vitae debitis eligendi similique sunt dolor odio inventore quam? Vitae similique libero ratione rerum alias exercitationem aliquid.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptatibus exercitationem quis beatae voluptatum vel error officiis maxime quo voluptatem nulla animi, omnis delectus? Tempora modi iste in neque numquam.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum et, numquam deserunt voluptatum alias dolore iusto dolores aspernatur recusandae harum distinctio vitae velit hic ex repudiandae! Esse quia alias soluta!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
      </div>
    </div>
  );
}
