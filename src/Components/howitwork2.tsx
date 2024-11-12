import React from "react";
import Image from "next/image";

function Howitwork2() {
  return (
    <div className="px-[30px] py-[150px]">
      <div className="flex gap-[100px] justify-center py-[50px] bg-[#1E1A1C] rounded-[20px]">
        <div className=" mt-[100px] w-[700px] bg-[#1E1A1C]">
          <div className="flex justify-center  bg-[#1E1A1C] realtive">
            <Image src="/hotairballon.png" alt="*" width={640} height={820} className="rounded-[20px]" />
            <div className="gradiant2 w-[600px] h-[600px] absolute opacity-[0.6]"></div>
          </div>
        </div>
        <div className="w-[700px]">
          <h1 className="text-[100px] text-[#FFF7DE] leading-[100px] pb-[50px]">
            Pause or <br />
            cancel <br /> anytime.
          </h1>
          <div
            className="bg-gradient-to-r from-yellow-100  via-orange-400 to-purple-500 
              w-[500px] h-[3px] rounded-[10px] "
          ></div>
          <div className="flex flex-col gap-[30px] py-[50px] ">
            <p className="text-[19px] text-[#B6B7B9]">
              Don’t lock yourself into paying for a designer when <br />
              there’s no work to be done. Nope.
            </p>
            <p className="text-[19px] text-[#B6B7B9]">Just use All You Can…</p>
            <p className="text-[19px] text-[#B6B7B9]">…When You Need.</p>
          </div>
        </div>
      </div>

      <div className="flex gap-[100px] justify-center pt-[200px]">
        <div className="w-[700px]">
          <h1 className="text-[100px] leading-[100px] pb-[50px]">
            Clear pricing. <br />
            Premium <br /> design.
          </h1>
          <div
            className="bg-gradient-to-r from-yellow-100  via-orange-400 to-purple-500 
              w-full h-[3px] rounded-[10px]"
          ></div>
          <div className="flex flex-col gap-[30px] py-[50px] ">
            <p className="text-[19px]">
              Let’s be honest—quality design is an investment. But compared to <br />
              hiring a full-time designer, this is a smarter choice.
            </p>
            <p className="text-[19px]">
              You get premium, personalised design without the overhead of a <br />
              permanent hire. Plus, it’s flexible and tailored to your needs.
            </p>
          </div>
        </div>

        <div className="gradiant mt-[20px] w-[700px]">
          <div className="flex justify-center opacity-[0.8] ">
            <Image src="/bird.png" alt="*" width={640} height={620} className="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Howitwork2;
