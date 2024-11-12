import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosHeart } from "react-icons/io";

function MarkButton({ children }: { children: React.ReactNode }) {
  return (
    <div
      className=" group group-hover:duration-[2s]  flex items-center  gap-[15px] 
     h-[66px] border-double border-[6px] border-black rounded-[50px] space   hover:bg-black hover:border-white hover:cursor-pointer"
    >
      <IoIosHeart className="w-[24px] h-[24px] hidden group-hover:block group-hover:text-white   " />
      <Image src="/mark.png" width={36} height={36} alt="*" className="rounded-[20px] group-hover:hidden" />
      <p className="text-[16px] font-[400] group-hover:text-white  group-hover:duration-[1s] group-hover:transition-all">{children}</p>
      <FaArrowRight
        className="w-[24px] h-[24px] text-white 
       hidden  group-hover:block "
      />
    </div>
  );
}

export default MarkButton;
