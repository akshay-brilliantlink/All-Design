import React from "react";
import MarkButton from "./markButton";
import Image from "next/image";
import { FaRegCircleCheck } from "react-icons/fa6";
import Work from "./work";

function Homepage() {
  return (
    <div className=" py-[50px] ">
      <div className="py-[50px] px-[200px] ">
        <Image src="/logo.png" alt="*" width={180} height={70} />
      </div>
      {/* bg-gradient-to-r  from-pink-200 via-orange-200 via-yellow-100 to-white */}
      <div className="bg-[url('/dot1.png')]  bg-repeat relative ">
        <div className="opacity-[0.7] w-full h-[1600px] gradiant"></div>
        <div className="absolute top-[50px] left-[200px]">
          <div className="pb-[50px] ">
            <div className="flex gap-[50px]">
              <div className="flex gap-[20px] items-center">
                <FaRegCircleCheck className="text-[24px]" />
                <p className="font-[500]">Fast Turnaround</p>
              </div>
              <div className="flex gap-[20px] items-center">
                <FaRegCircleCheck className="text-[24px]" />
                <p className="font-[500]">Fixed Costs</p>
              </div>
              <div className="flex gap-[20px] items-center">
                <FaRegCircleCheck className="text-[24px]" />
                <p className="font-[500]">Pause or Cancel Anytime</p>
              </div>
            </div>
          </div>

          <div className="pb-[50px] pr-[200px]">
            <h1 className="text-[120px] leading-[140px]">The design partner for Health & Wellness brands.</h1>
          </div>

          <div className="flex gap-[5px] text-[25px] pb-[50px]">
            <h3>Design solution that bring</h3>
            <h3 className="font-bold">calm,deep connection,</h3>
            <h3>and</h3>
            <h3 className="font-bold">drive growth</h3>
            <h3>for your brand.</h3>
          </div>

          <div className="flex">
            <MarkButton>Book a Call with Marc</MarkButton>
          </div>
        </div>
        <div className="absolute bottom-[200px]">
          <Work />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
