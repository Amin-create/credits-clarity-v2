import { useState } from "react";
import styles from "../../style";
import { Core } from "..";
import Icon from "../icons";
import Slider from "./Slider";
import { Link } from "react-router-dom";
import Chart from "./Chart";

// function Card({ data, card1, card2, card3, card4, card5, card6 }) {
function Tag({ number , children }) {
  
  const renderTag = () => {
    switch (number) {
      case 1:
        return (
          <span
            data-aos="fade- up"
            className={`inline ${children === "Very Good"? 'text-[#49C783]':""} ${children === "Good"? 'text-[#1988F1]':""}  text-[14] font-bold uppercase ${children === "Very Good"? 'bg-[#EEF4F2]':""} ${children === "Good"? 'bg-[#F1F7FC]':""} rounded-[3px] px-4 py-2`}
          >
           {children}
          </span>
        );
      case 2:
        return (
          <div
            data-aos="fade- up"
            className={`w-full ld:w-[33%] rounded-tr-[35px] md:rounded-tr-[60px] rounded-bl-[35px] md:rounded-bl-[60px] bg-white-1 py-10 md:py-16 px-6 md:px-10 ${styles.cardHover}`}
          >
           ffffff
          </div>
        );

      default:
        return null;
    }
  };

  return <>{renderTag()}</>;
}

export default Tag;
