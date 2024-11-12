import React from "react";
import Image from "next/image";

function Design() {
  return (
    <div className="py-[50px]">
      <div className="gradiant">
        <div className="flex justify-center opacity-[0.7]">
          <Image src="/plant.avif" alt="*" width={520} height={680} />
        </div>
      </div>
      <div className="flex flex-col justify-center text-center gap-[50px] px-[200px]">
        <h1 className=" justify-center text-[100px] leading-[100px] ">
          Need design that really <br />
          show what you&apos;re about ?
        </h1>
        <div className="bg-gradient-to-r from-yellow-100  via-orange-400 to-purple-500 w-full h-[5px] rounded-[10px]"></div>
        <div>
          <p className="text-[19px] font-[300]">Tired of designs that miss the mark?</p>
          <br />
          <p className="text-[19px] font-[300] ">
            Designers who don’t understand the health & wellness field may fail to <br />
            capture what you do—leaving your ideal clients feeling confused <br />
            and disconnected from your brand.
          </p>
          <br />
          <p className="text-[19px] font-[300]">
            My name is Marc Andrew, and I partner exclusively with Health & Wellness <br />
            brands, creating thoughtful, impactful designs that capture attention <br />
            and forge meaningful connections.
          </p>
          <br />
          <p className="text-[19px] font-[300] pb-[100px]">Bring your vision to life with designs that help your brand make a real impact.</p>
        </div>

        <div className="bg-[#FFF9E6] p-[100px] flex flex-col gap-[50px] rounded-[50px]">
          <div className="flex justify-center">
            <div className=" bg-gradient-to-r from-black  via-orange-400 to-red-400 p-[3px] rounded-[100px]">
              <div className="bg-white rounded-[120px] p[10px]">
                <Image src="/mark2.png" alt="*" width={120} height={120} className="p-[3px] rounded-[100px]" />
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-[46px] bg-gradient-to-r from-[#FFC467] via-[#F09869] to-[#D56AE7] inline-block text-transparent bg-clip-text">
              &quot;Marc is one of the most precious in our industry, <br />
              the way he approaches projects is an inspiration.&quot;
            </h1>
          </div>
          <div className="bg-gradient-to-r from-yellow-100  via-orange-400 to-purple-500 w-[700px] mx-auto h-[2px] rounded-[10px]"></div>
          <div>
            <p className="text-[19px] font-[300] ">
              From the first draft to final product, Marc&apos;s design expertise is on point. He really is <br />
              a true original. Marc is also one of the most precious in our industry,the way he <br />
              approaches projects is an inspiration, and I&apos;m proud that we got to work together.
            </p>
          </div>
          <div>
            <p className="text-[20px] font-[500] underline hover:no-underline hover:cursor-pointer">Jan Six</p>
            <p className="">Product Designer @GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Design;
