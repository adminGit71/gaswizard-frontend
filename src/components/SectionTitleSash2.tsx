import React from "react";

/* ----------------------------------------------------------- */

interface IProps {
  leftColor?: string;
  centerColor?: string;
  rightColor?: string;
}

/* ----------------------------------------------------------- */

export default function SectionTitleSash2({ leftColor = 'secondary', centerColor = 'darkPrimary', rightColor = 'secondary' }: IProps) {
  return (
    <div className="h-1 w-24 flex">
      <div className={`w-1/3 h-full bg-${leftColor}`}></div>
      <div className={`flex-1 h-full bg-${centerColor}`}></div>
      <div className={`w-1/3 h-full bg-${rightColor}`}></div>
    </div>
  )
}