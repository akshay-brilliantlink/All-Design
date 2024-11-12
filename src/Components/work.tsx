import React from "react";
import Image from "next/image";
import { LuArrowUpRight } from "react-icons/lu";

const WorkData = [
  {
    id: 1,
    img: "/work1.jpg",
  },
  {
    id: 2,
    img: "/work2.png",
  },
  {
    id: 3,
    img: "/work3.pmg.avif",
  },
  //   {
  //     id: 4,
  //     img: "/work4.png",
  //   },
  //   {
  //     id: 5,
  //     img: "/work5.png",
  //   },
  //   {
  //     id: 6,
  //     img: "/work6.png",
  //   },
  //   {
  //     id: 7,
  //     img: "/work7.png",
  //   },
  //   {
  //     id: 8,
  //     img: "/work8.png",
  //   },
  //   {
  //     id: 9,
  //     img: "/work9.png",
  //   },
  //   {
  //     id: 10,
  //     img: "/work10.png",
  //   },
];
function Work() {
  return (
    <div className="">
      <div className=" flex  gap-[50px] overflow-hidden pb-[50px] ">
        {WorkData.map((item, i) => (
          <div key={i}>
            <Image src={item.img} width={580} height={380} alt="*" className=" rounded-[10px]" />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <div
          className="flex border-double border-[6px] border-black rounded-[50px] p-[25px] items-center gap-[20px] hover:bg-black group hover:border-white hover:cursor-pointer
        w-[280px] h-[86px] overflow-hidden"
        >
          <p className="text-[16px] font-[500] group-hover:text-white">View My Recent Work</p>
          <div className="flex flex-col  items-center gap-[30px] pt-[65px] pb-[10px]">
            <LuArrowUpRight className="w-[24px] h-[24px] group-hover:text-white transition duration-300 group-hover:-translate-y-[60px]  group-hover:translate-x-[25px]" />
            <LuArrowUpRight className="w-[24px] h-[24px] group-hover:text-white transition duration-300 group-hover:-translate-y-[55px] group-hover:translate-x-[5px] " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
