import React from 'react'
import "./ExploreSec.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./LandingPg";
import { productData, responsive } from "../Data/dataCarousel";
import { useState } from 'react';
import ChatBot from './ChatBot';

// const ExploreSec = () => {
//   return (
//     <div className="container">
//         ExploreSec</div>
//   )
// }

export default function ExploreSec() {
  const [isOpen, setIsOpen] = useState(false);
  const[back,setBack] = useState(setIsOpen);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ) );
 
  return (
    <div className="ExploreSec">
      <div className={`ExploreSec ${isChatbotOpen ? 'chatbot-open' : ''}`}>
      <Carousel id='carousel_id' showDots={true} responsive={responsive}>
         {product}
      </Carousel>
      </div>
     {/* <button  onClick={() => setIsOpen(!isOpen)}>Toggle Chatbot</button>
     {isOpen && <ChatBot />}  */}
     {/* render chatbot component only if isOpen state is true */}

{/*  */}

<div>
      {isChatbotOpen && (
        <div className="chatbot">
         <ChatBot/>
        </div>
      )}
       <button  onClick={() => setIsOpen(!isOpen && toggleChatbot)} >Toggle Chatbot</button>
     {isOpen && <ChatBot /> && toggleChatbot} 
    </div>
{/*  */}


     </div>
  );
}

// export default ExploreSec