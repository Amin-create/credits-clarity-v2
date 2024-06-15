import React from "react";
import Icon from "../icons";
import calender3 from '../../assets/images/icon/calendar.png' 

function MessageBox1({ data,className }) {
   
    let icon= '';
    switch (data?.icon ) {
        default:
            icon = "";
          break;
        case 'Calender3':
            icon = calender3;
          break;
        
      }

  return (
    <div className={`flex justify-start items-center gap-x-2 w-full h-[66px] rounded-[6px] bg-[#1695E3] px-6 ${className} `}> 
      <img className="w-[30px]" src={icon} alt="logo" />
      <span className="text-white text-[14px]">{data?.text}</span>
    </div>
  );
}

export default MessageBox1;
