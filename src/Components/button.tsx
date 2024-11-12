import React from "react";

function Button({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="  rounded-[50px] px-[20px] py-[10px]  
     bg-black text-white hover:bg-white hover:text-black hover:border-black border-[2px] hover:cursor-pointer"
    >
      <h1 className="text-[22px] ">{children}</h1>
    </div>
  );
}

export default Button;
