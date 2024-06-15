import React from "react";

function ContentMainBox({ children, className, wider }) {
  return <div className={`w-full max-w-[778px] ${className}`}>{children}</div>;
}

export default ContentMainBox;
