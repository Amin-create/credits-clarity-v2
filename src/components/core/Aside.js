import React from "react";

function Aside({ children, className, wider }) {
  return <aside className={`w-full max-w-[372px] ${className}`}>{children}</aside>;
}

export default Aside;
