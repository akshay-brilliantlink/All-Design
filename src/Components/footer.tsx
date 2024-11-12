import React from "react";

function Footer() {
  return (
    <div className="px-[30px] pt-[100px] pb-[40px]">
      <div className="flex flex-col gap-[50px] justify-center pt-[200px] pb-[50px] bg-[#1E1A1C] rounded-[20px]">
        <h1 className="text-[#FFF7DE] text-[430px] mx-auto font-[100] leading-[400px]">AYCD</h1>
        <h4 className="text-[32px] text-[#BCBDBF] mx-auto">
          Awesome, you made it this far. Even if you don&apos;t use my services, <br /> go back and click on one of the images for a lil&apos; easter egg ;
        </h4>
        <div
          className="bg-gradient-to-r from-yellow-100  via-orange-400 to-purple-500 
               h-[3px] rounded-[10px] mx-[40px] "
        ></div>
        <p className="text-white pl-[40px] font-[300]">© 2024 All You Can Design. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
