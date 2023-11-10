import React, { useState } from "react";

interface AccordionProps {
  title: string;
  children: any;
}

export default function Accordion(props: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-100 rounded-md p-2">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleAccordion}>
        <h2 className="text-lg font-semibold">{props.title}</h2>
        <span
          className={`transform ${
            isOpen ? "rotate-180" : "rotate-0"
          } transition-transform`}>
          &#9660;
        </span>
      </div>
      {isOpen && <div className="mt-2">{props.children}</div>}
    </div>
  );
}
