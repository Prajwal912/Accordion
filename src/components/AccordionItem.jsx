import React from "react";
import "../styles/Accordion.css";

const AccordionItem = ({ title, content, isActive, onClick }) => {
  return (
    <>
      <div
        className={`accordion--item ${
          isActive ? "active" : ""
        } flex flex-col items-start w-[600px] p-5
        rounded-[15px] pl-[72px] cursor-pointer`}
        onClick={onClick}
      >
        <div className={`icon--container ${isActive ? "active" : ""}`}>
          <div className={`stroke--one ${isActive ? "active" : ""}`}></div>
          <div className="stroke--two"></div>
        </div>
        <h1
          className="accordion--title 
         text-black	text-base font-medium"
        >
          {title}
        </h1>
        <p
          className={`accordion--content ${
            isActive ? "active" : ""
          } max-h-0 text-black m-0 font-light overflow-hidden text-xs`}
          onClick={onClick}
        >
          {content}
        </p>
      </div>
    </>
  );
};

export default AccordionItem;
