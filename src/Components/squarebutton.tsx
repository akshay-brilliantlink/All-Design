import React from "react";
import Image from "next/image";

function Squarebutton({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex border-double border-4 border-black rounded-[10px] px-[20px] py-[10px] items-center gap-[20px] hover:bg-white    hover:cursor-pointer">
      <Image src="/sqaures.png" width={32} height={32} alt="*" className="rounded-[20px] hover:text-white" />
      <h3 className="text-[23px]">{children}</h3>
    </div>
  );
}

export default Squarebutton;
