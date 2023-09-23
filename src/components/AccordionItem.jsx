import React from "react";
import '../styles/Accordion.css';

const AccordionItem = () => {
  return (
    <>
      <div className="accordion--item active
       flex flex-col items-start w-[600px] p-5
        rounded-[15px] pl-[72px] cursor-pointer">
        <div className="icon--container active">
          <div className="stroke--one active"></div>
          <div className="stroke--two"></div>
        </div>
        <h1 className="accordion--title 
         text-black	text-base font-medium">Introduction to react JS</h1>
        <p className="accordion--content active
        max-h-0 text-black m-0 font-light overflow-hidden text-xs	">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </>
  );
};

export default AccordionItem;
