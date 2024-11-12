import React, { useState } from "react";
import Image from "next/image";
import { LuArrowUpRight } from "react-icons/lu";

function Faq() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);

  return (
    <div id="faq" className="flex flex-col gap-[100px]">
      <div className="px-[200px] flex flex-col gap-[100px]">
        <div className="mx-auto text-center gap-[30px] flex flex-col">
          <h1 className="text-[100px] leading-[100px]">
            Questions about <br />
            how things work?
          </h1>
          <p className="text-[19px]">
            If you can&apos;t find your question here—<span>book a call</span> and let&apos;s chat!
          </p>
        </div>

        <div className="flex flex-col gap-[20px]">
          <div className="border-double border-[6px] border-black rounded-[20px] px-[30px] py-[10px] mx-auto overflow-hidden flex flex-col gap-[10px] w-[980px]">
            <div className="flex justify-between items-center">
              <h1 className="text-[22px]">Who does all the design work?</h1>
              <h1 className="text-[16px]" onClick={() => setShow1(!show1)}>
                {show1 === true ? "❌" : "➕"}
              </h1>
            </div>
            {show1 && (
              <div className="flex flex-col gap-[30px] " id="xyz">
                <p className="text-[17px]">As a Senior-Level Designer with over 25 years of experience, I’ll be handling all your design needs personally.</p>
                <p className="text-[17px]">My focus is on ensuring high standards and delivering thoughtful designs that truly connect with your audience.</p>
                <p className="text-[17px]">I’ll always keep you informed if I’m taking a vacation so you’re never left in the dark.</p>
              </div>
            )}
          </div>

          <div className="border-double border-[6px] border-black rounded-[20px] px-[30px] py-[10px] mx-auto overflow-hidden flex flex-col gap-[10px] w-[980px]">
            <div className="flex justify-between items-center">
              <h1 className="text-[22px]">Why not hire a full-time designer?</h1>
              <h1 className="text-[16px]" onClick={() => setShow2(!show2)}>
                {show2 === true ? "❌" : "➕"}
              </h1>
            </div>
            {show2 && (
              <div className="flex flex-col gap-[30px] " id="xyz">
                <p className="text-[17px]">
                  If you won’t settle for anything less than the best, it will cost you $120k+ for a senior designer at my level. Sure, if that&apos;s within your budget, it could
                  be a solid investment.
                </p>
                <p className="text-[17px]">
                  But if you&apos;d rather avoid the overhead costs associated with hiring a full-time designer—like healthcare, sick days, and vacation time—then this could be the
                  perfect solution.
                </p>
              </div>
            )}
          </div>

          <div className="border-double border-[6px] border-black rounded-[20px] px-[30px] py-[10px] mx-auto overflow-hidden flex flex-col gap-[10px] w-[980px]">
            <div className="flex justify-between items-center">
              <h1 className="text-[22px]">What if I want to pause or cancel the plan?</h1>
              <h1 className="text-[16px]" onClick={() => setShow3(!show3)}>
                {show3 === true ? "❌" : "➕"}
              </h1>
            </div>
            {show3 && (
              <div className="flex flex-col gap-[30px] " id="xyz">
                <p className="text-[17px]">No problem. You can pause it for as long as you like, or cancel it whenever you want.</p>
                <p className="text-[17px]">
                  I get that you might not always have enough design work to fill a whole month, so if you&apos;ve only a few requests you can simply pause your subscription until
                  a later date.
                </p>
                <p className="text-[17px]">
                  The billing cycle lasts for 31 days. So, if you sign up and use All You Can for 21 days, then choose to pause, you’ll still have 10 days left to use whenever you
                  need them in the future!
                </p>
              </div>
            )}
          </div>

          <div className="border-double border-[6px] border-black rounded-[20px] px-[30px] py-[10px] mx-auto overflow-hidden flex flex-col gap-[10px] w-[980px]">
            <div className="flex justify-between items-center">
              <h1 className="text-[22px]">How do we communicate during the design process?</h1>
              <h1 className="text-[16px]" onClick={() => setShow4(!show4)}>
                {show4 === true ? "❌" : "➕"}
              </h1>
            </div>
            {show4 && (
              <div className="flex flex-col gap-[30px] " id="xyz">
                <p className="text-[17px]">Everything happens through a dedicated online portal that I’ll set up for you.</p>
                <p className="text-[17px]">It’s user-friendly, and you’ll receive notifications whenever I make updates.</p>
                <p className="text-[17px]">This way, you can easily track progress and give feedback whenever it suits you.</p>
              </div>
            )}
          </div>

          <div className="border-double border-[6px] border-black rounded-[20px] px-[30px] py-[10px] mx-auto overflow-hidden flex flex-col gap-[10px] w-[980px]">
            <div className="flex justify-between items-center">
              <h1 className="text-[22px]">What if I don&apos;t love the designs?</h1>
              <h1 className="text-[16px]" onClick={() => setShow5(!show5)}>
                {show5 === true ? "❌" : "➕"}
              </h1>
            </div>
            {show5 && (
              <div className="flex flex-col gap-[30px] " id="xyz">
                <p className="text-[17px]">With 25 years of experience and a deep focus on listening to you and your audience, my designs tend to resonate well with clients.</p>
                <p className="text-[17px]">
                  Of course, this is a partnership, and I’m always ready to integrate your ideas and feedback—which is why you’ll receive unlimited revisions with the Retainer
                  package.
                </p>
                <p className="text-[17px]">I’ll work closely with you until you’re completely happy with the result.</p>
              </div>
            )}
          </div>

          <div className="border-double border-[6px] border-black rounded-[20px] px-[30px] py-[10px] mx-auto overflow-hidden flex flex-col gap-[10px] w-[980px]">
            <div className="flex justify-between items-center">
              <h1 className="text-[22px]">Can I get a refund if I don&apos;t like the designs?</h1>
              <h1 className="text-[16px]" onClick={() => setShow6(!show6)}>
                {show6 === true ? "❌" : "➕"}
              </h1>
            </div>
            {show6 && (
              <div className="flex flex-col gap-[30px] " id="xyz">
                <p className="text-[17px]">Due to the specialised nature and exceptional quality of my work, I don&apos;t provide refunds.</p>
                <p className="text-[17px]">However...</p>
                <p className="text-[17px]">
                  ...I&apos;m committed to ensuring your satisfaction and will happily make as many revisions needed to your designs until you&apos;re 100% happy. Sound good?
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-[url('/dot1.png')] bg-repeat mx-[30px] relative ">
        <div className="gradiant opacity-[0.8] h-[1100px]">
          <div className="flex justify-center  ">
            <Image src="/clock.png" alt="*" width={640} height={620} className="" />
          </div>
        </div>
        <div className=" items-center text-center absolute bottom-[0px] left-[561px]">
          <div className="flex flex-col gap-[30px]">
            <h1 className="text-[123px] leading-[100px]">
              Ready to <br />
              get started?
            </h1>
            <p className="text-[18px]">Pick the design package that works for you, and let’s create something amazing together.</p>
          </div>
        </div>
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

export default Faq;
