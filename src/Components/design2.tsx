import React from "react";
import MarkButton from "./markButton";
import Image from "next/image";

function Design2() {
  return (
    <div className="px-[200px] py-[100px]" id="aboutme">
      <div className="flex gap-[100px] justify-center py-[50px]">
        <div className="w-[700px]">
          <h1 className="text-[100px] leading-[100px] pb-[50px]">
            Design that <br />
            truly connects <br />
            with your <br />
            audience.
          </h1>
          <div
            className="bg-gradient-to-r from-yellow-100  via-orange-400 to-purple-500 
              w-full h-[3px] rounded-[10px]"
          ></div>
          <div className="flex flex-col gap-[30px] py-[50px] ">
            <p className="text-[19px]">
              You&apos;re passionate about your brand and the impact it can have. <br />
              But to everyone else, it&apos;s only as strong as the design that represents it.
            </p>
            <p className="text-[19px]">
              Design isn&apos;t just about looks—it&apos;s your first impression, your user <br />
              experience, and the trust you build with your audience.
            </p>
            <p className="text-[19px]">
              You&apos;ve poured your heart into creating something special, <br />
              so let&apos;s showcase it with thoughtful, impactful design <br />
              that reflects the value you bring.
            </p>
          </div>
          <div className="flex">
            <MarkButton>Book a Call with Marc</MarkButton>
          </div>
        </div>

        <div className="gradiant mt-[100px] w-[700px]">
          <div className="flex justify-center opacity-[0.7] ">
            <Image src="/metalbol.png" alt="*" width={640} height={820} className="" />
          </div>
        </div>
      </div>

      <div className="flex gap-[100px] justify-center py-[50px]">
        <div className="gradiant mt-[100px] w-[700px]">
          <div className="flex justify-center opacity-[0.8] ">
            <Image src="/markbig.png" alt="*" width={640} height={820} className="rounded-[20px]" />
          </div>
        </div>
        <div className="w-[700px]">
          <h1 className="text-[100px] leading-[100px] pb-[50px]">
            Expert design <br />
            for brands that <br /> really stand out.
          </h1>
          <div
            className="bg-gradient-to-r from-yellow-100  via-orange-400 to-purple-500 
              w-full h-[3px] rounded-[10px] "
          ></div>
          <div className="flex flex-col gap-[30px] py-[50px] ">
            <p className="text-[19px]">
              When you work with me, you get the expertise of a senior designer with <br />
              over 25 years of experience in design and user experience, plus business <br />
              insight from scaling and selling two successful digital companies.
            </p>
            <p className="text-[19px]">
              If you&apos;re after cookie-cutter solutions, we might not be the best fit. But <br />
              if you want designs that truly capture the essence of your brand and <br />
              help it stand out, I&apos;m your guy.
            </p>
            <p className="text-[19px]">
              My focus is on creating designs that are both visually beautiful <br />
              and deeply aligned with your brand’s mission—and I make the process <br />
              enjoyable, too!
            </p>
          </div>
          <div className="flex">
            <MarkButton>Book a Call with Marc</MarkButton>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center text-center gap-[50px] ">
        <div className="bg-[#FFF9E6] p-[100px] flex flex-col gap-[50px] rounded-[50px]">
          <div className="flex justify-center">
            <div className=" bg-gradient-to-r from-black  via-gray-600 to-gray-700 p-[3px] rounded-[100px]">
              <div className="bg-white rounded-[120px] p[10px]">
                <Image src="/mark4.png" alt="*" width={120} height={120} className="p-[3px] rounded-[100px]" />
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-[46px] bg-gradient-to-r from-[#FFC467] via-[#F09869] to-[#D56AE7] inline-block text-transparent bg-clip-text">
              &quot;I want to work with a designer who <br />
              cares about every last pixel. Marc is it.&quot;
            </h1>
          </div>
          <div className="bg-gradient-to-r from-yellow-100  via-orange-400 to-purple-500 w-[700px] mx-auto h-[2px] rounded-[10px]"></div>
          <div>
            <p className="text-[19px]">
              Marc is an exceptional designer. I was first introduced to his work many years ago, <br />
              and was blown away by his rigorous and meticulous attention to detail. I want to <br />
              work with a designer who cares about every last pixel. Marc is it.
            </p>
          </div>
          <div>
            <p className="text-[20px] font-[500] text-black  underline hover:no-underline hover:cursor-pointer">Jon Moore</p>
            <p className="text-[18px]">Principal Product Designer @Salesforce</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Design2;
