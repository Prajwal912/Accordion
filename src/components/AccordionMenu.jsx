  import React from "react";
import AccordionItem from "./AccordionItem";

const AccodionMenu = () => {
  return (
    <>
      <div className="accordion--menu  flex flex-col justify-center items-center py-[50px] px-[30px] rounded-2xl border border-gray-300 shadow-md w-auto">
        <h1 className="flex items-center justify-center w-[600px] text-[#2f80ed] text-2xl font-medium">
          Accordion with REACT and TAILWIND
        </h1>

        <div className="accordion--items flex flex-col items-start pt-5 gap-[15px]">
        <AccordionItem
          title="Accordion #1"
          content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. first!!"
        />
        <AccordionItem
          title="Accordion #2"
          content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. second!!"
        />
        <AccordionItem
          title="Accordion #3"
          content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. third!!"
        />
        <AccordionItem
          title="Accordion #4"
          content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. fourth!!"
        />

          
        </div>
      </div>
    </>
  );
};

export default AccodionMenu;
