import React from "react";
import Image from "next/image";
import Squarebutton from "./squarebutton";

const WorkData = [
  {
    id: 1,
    img: "/lock.png",
    title: "Fixed Monthly Rate",
    para: "No surprises here! Pay the same fixed price each month. No sneaky extras on your bill.",
  },
  {
    id: 2,
    img: "/rocket.png",
    title: "Lightning-Fast Delivery",
    para: "Your design requests are provided to you within a few days, not weeks or months.",
  },
  {
    id: 3,
    img: "/pc.png",
    title: "Private Design Portal",
    para: "Easily manage your subscription, and design requests from your own personal portal.",
  },
  {
    id: 4,
    img: "/peacock.png",
    title: "Senior-Designer Expertise",
    para: "High-quality designs served up by a senior-level designer. Yup. That's me!",
  },
  {
    id: 5,
    img: "/feather.png",
    title: "Ultra-Custom Designs",
    para: "Cookie-cutter just ain't cutting it here. Designs perfectly suited to you and your audience.",
  },
  {
    id: 6,
    img: "/astronaut.png",
    title: "You're in Control",
    para: "From start to finish, you're in control, in the loop, and in good hands.",
  },
];

function Howitwork() {
  return (
    <div className="px-[200px] py-[100px]" id="howitwork">
      <div className="flex flex-col gap-[50px]">
        <div className="flex justify-center text-center">
          <h1 className="text-[100px] leading-[90px]">
            How do things work? <br />
            Well, I&apos;m glad you asked…
          </h1>
        </div>

        <div className="flex justify-evenly relative">
          <Image src="/dotedright.png" alt="8" width={300} height={64} className="absolute left-[360px] top-[90px]" />
          <Image src="/doteddown.png" alt="8" width={300} height={64} className="absolute left-[840px] top-[20px]" />
          <div className="flex flex-col gap-[30px] text-center w-[375px] pt-[50px] ">
            <div>
              <h1 className="text-[70px] text-[#FFC467]">01</h1>
            </div>
            <div className="flex flex-col gap-[10px]">
              <h2 className="text-[24px]">You pick a Plan</h2>
              <p className="text-[18px] ">
                Choose the plan that&apos;s perfectly <br />
                suited to your budget.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-[30px] text-center w-[375px] pt-[50px]">
            <div>
              <h1 className="text-[70px] text-[#F09869]">02</h1>
            </div>
            <div className="flex flex-col gap-[10px]">
              <h2 className="text-[24px]">Submit your design requests</h2>
              <p>
                Hop into your Private Portal where you can <br />
                start submitting your design requests.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-[30px] text-center w-[375px] pt-[50px]">
            <div>
              <h1 className="text-[70px] text-[#D56AE7]">03</h1>
            </div>
            <div className="flex flex-col gap-[10px]">
              <h2 className="text-[24px]">I&apos;ll revise till you&apos;re happy!</h2>
              <p>
                I&apos;ll keep revising your designs until you&apos;re <br />
                100% happy. No half-baked design here!
              </p>
            </div>
          </div>
        </div>

        <div className="gradiant w-[550px] h-[650px] mx-auto">
          <div className="flex justify-center opacity-[0.7]">
            <Image src="/mountain.png" alt="*" width={470} height={570} />
          </div>
        </div>

        <div className="flex  justify-center text-center">
          <h1 className=" text-[100px] leading-[90px]">
            What you&apos;ll love about <br />
            working with me.
          </h1>
        </div>
        <div
          className="bg-gradient-to-r from-yellow-100  via-orange-400 to-purple-500 
              w-[1050px] h-[3px] rounded-[10px] mx-auto"
        ></div>

        <div className="flex flex-wrap gap-[100px]">
          {WorkData.map((item, i) => (
            <div key={i} className="flex flex-col gap-[20px] w-[370px] h-[280px] mx-auto text-center ">
              <Image src={item.img} width={140} height={140} alt="*" className="mx-auto" />
              <h1 className="text-[29px]">{item.title}</h1>
              <p>{item.para}</p>
            </div>
          ))}
        </div>

        <div className="flex  justify-center text-center">
          <h1 className=" text-[100px] leading-[90px] pt-[100px]">
            Specialised expertise, <br />
            full-service design.
          </h1>
        </div>
        <div className="gradiant flex flex-col ">
          <div
            className="bg-gradient-to-r from-yellow-100  via-orange-400 to-purple-500 
              w-[1050px] h-[3px] rounded-[10px] mx-auto"
          ></div>
          <div className="flex gap-[50px] justify-center pt-[100px] ">
            <Squarebutton>Landing Pages</Squarebutton>
            <Squarebutton>Copywriting</Squarebutton>
            <Squarebutton>Branding</Squarebutton>
          </div>
          <div className="flex gap-[50px] justify-center pt-[20px]">
            <Squarebutton>Mobile App Design</Squarebutton>
            <Squarebutton>Web App Design</Squarebutton>
            <Squarebutton>Framer (No-Code) Development</Squarebutton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Howitwork;
