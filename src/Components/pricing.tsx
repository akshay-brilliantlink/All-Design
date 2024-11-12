"use client";
import { useState, useEffect } from "react";
import Button from "./button";
import Image from "next/image";
import MarkButton from "./markButton";
function Pricing() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="px-[200px] py-[100px]" id="pricing">
      <div className="flex gap-[10px] items-center pb-[50px]">
        <h4 className="text-[32px] rotate-[-5deg] bg-gradient-to-r from-yellow-400  via-orange-400 to-purple-500  inline-block text-transparent bg-clip-text">
          Spots available for October 2024
        </h4>
        <Image src="/doteddown.png" alt="*" width={203} height={97} className="rotate-[12deg]" />
      </div>

      <div className="flex gap-[50px] pb-[50px]">
        <div className="border-double w-[650px] h-[820px] border-[6px] shadow border-black rounded-[20px] py-[50px] px-[30px]">
          <div className="flex pb-[20px]">
            <Button>One-Time</Button>
          </div>
          <h1 className="text-[93px]">$3,995</h1>
          <p className="text-[18px] pb-[50px]">
            Perfect for when you need a single, <br /> conversion-focused landing page.
          </p>
          <div className="flex pb-[20px]">
            <MarkButton>Secure your Oct Spot</MarkButton>
          </div>
          <p>
            or <span className="">Place your Order</span>
          </p>
          <p className="py-[30px] font-semibold">Here&apos;s what&apos;s included...</p>

          <div className="flex gap-[10px] items-center pb-[10px]">
            <Image src="/sqaures.png" alt="*" width={24} height={24} />
            <h2 className="text-[16px] font-semibold">Design & Copywriting</h2>
          </div>
          <div className="flex gap-[10px] items-center pb-[10px]">
            <Image src="/sqaures.png" alt="*" width={24} height={24} />
            <h2 className="text-[16px] font-semibold">2 Hero Iterations</h2>
          </div>
          <div className="flex gap-[10px] items-center pb-[10px]">
            <Image src="/sqaures.png" alt="*" width={24} height={24} />
            <h2 className="text-[16px] font-semibold">2x Rounds of Revisions</h2>
          </div>
          <div className="flex gap-[10px] items-center pb-[10px]">
            <Image src="/sqaures.png" alt="*" width={24} height={24} />
            <h2 className="text-[16px] font-semibold">Updates every 48 Hours</h2>
          </div>
          <div className="flex gap-[10px] items-center pb-[10px]">
            <Image src="/sqaures.png" alt="*" width={24} height={24} />
            <h2 className="text-[16px] ">Senior-Level Designer</h2>
          </div>
          <div className="flex gap-[10px] items-center pb-[10px]">
            <Image src="/sqaures.png" alt="*" width={24} height={24} />
            <h2 className="text-[16px]">Desktop, Tablet & Mobile Layouts</h2>
          </div>
        </div>

        <div className="border-double w-[650px] h-[990px] border-[6px] shadow border-black rounded-[20px] py-[50px] px-[30px]">
          <div className="flex pb-[20px] gap-[20px] items-center">
            <Button>Retainer</Button>
            <p className="text-[14px] font-semibold">Billed monthly. Pause/Cancel anytime</p>
          </div>
          <div className="flex gap-[10px]">
            <h1 className="text-[93px]">$5,995</h1>
            <h1 className="text-[18px] pt-[25px]">Per Month</h1>
          </div>

          <p className="text-[18px] pb-[50px]">
            Ideal for those who need ongoing <br />
            design/development support.
          </p>
          <div className="flex pb-[20px]">
            <MarkButton>Secure your Oct Spot</MarkButton>
          </div>
          <p>
            or <span className="">Place your Order</span>
          </p>
          <p className="py-[30px] font-semibold">Here&apos;s what&apos;s included...</p>

          <div className="flex gap-[10px] items-center pb-[10px]">
            <Image src="/sqaures.png" alt="*" width={24} height={24} />
            <h2 className="text-[16px] font-semibold">Full Service</h2>
          </div>
          <div className="flex gap-[10px] items-center pb-[10px]">
            <Image src="/sqaures.png" alt="*" width={24} height={24} />
            <h2 className="text-[16px] font-semibold">Design & Copywriting</h2>
          </div>
          <div className="flex gap-[10px] items-center pb-[10px]">
            <Image src="/sqaures.png" alt="*" width={24} height={24} />
            <h2 className="text-[16px] font-semibold">Framer Development</h2>
          </div>
          <div className="flex gap-[10px] items-center pb-[10px]">
            <Image src="/sqaures.png" alt="*" width={24} height={24} />
            <h2 className="text-[16px] font-semibold">Same Day Onboarding</h2>
          </div>
          <div className="flex gap-[10px] items-center pb-[10px]">
            <Image src="/sqaures.png" alt="*" width={24} height={24} />
            <h2 className="text-[16px] font-semibold">Updates every 48 Hours</h2>
          </div>
          <div className="flex gap-[10px] items-center pb-[10px]">
            <Image src="/sqaures.png" alt="*" width={24} height={24} />
            <h2 className="text-[16px] ">Senior-Level Designer</h2>
          </div>
          <div className="flex gap-[10px] items-center pb-[10px]">
            <Image src="/sqaures.png" alt="*" width={24} height={24} />
            <h2 className="text-[16px] ">Unlimited Brands</h2>
          </div>
          <div className="flex gap-[10px] items-center pb-[10px]">
            <Image src="/sqaures.png" alt="*" width={24} height={24} />
            <h2 className="text-[16px] ">Unlimited Users</h2>
          </div>
          <div className="flex gap-[10px] items-center pb-[10px]">
            <Image src="/sqaures.png" alt="*" width={24} height={24} />
            <h2 className="text-[16px] ">Unlimited Stock Images</h2>
          </div>
          <div className="flex gap-[10px] items-center pb-[10px]">
            <Image src="/sqaures.png" alt="*" width={24} height={24} />
            <h2 className="text-[16px] ">Pause or Cancel Anytime </h2>
          </div>
        </div>
      </div>

      <div className="pt-[100px] flex flex-col gap-[100px]">
        <div>
          <div className="flex gap-[10px] items-start">
            <div className=" border-double border-[4px] border-black  rounded-[50px]">
              <div className="bg-white  rounded-[50px]">
                <Image src="/person1.png" alt="*" width={60} height={60} className=" rounded-[50px]" />
              </div>
            </div>
            <h4 className="text-[32px] rotate-[-5deg] font-[400]">In the words of design guru , Chris Do</h4>
            <Image src="/doteddown.png" alt="*" width={190} height={60} className="rotate-[15deg]" />
          </div>
          <h2 className="text-[34px] pt-[20px]">
            &quot;If you think I&apos;m expensive, wait till you get the bill <br />
            from someone who doesn&apos;t know what they&apos;re doing.&quot;
          </h2>
        </div>

        <div className="flex flex-col gap-[50px]">
          <div className="flex flex-col gap-[20px]">
            <h1 className="text-[100px] leading-[100px]">
              All You Can vs. <br />
              All You Can&apos;t.
            </h1>
            <p className="text-[19px] text-[#1E1A1C] font-[300]">Check out what All You Can Design offers Vs Freelance Platforms and Employees. It&apos;s quite a lot!</p>
          </div>
          {isClient ? (
            <table className="justify-center w-[1080px]">
              <tr className="text-left border-double border-b-[4px] border-black">
                <th className="w-[430px]"></th>
                <th className="w-[216px]">
                  <h3 className="font-semibold py-[20px]">All You Can Design</h3>
                </th>
                <th className="w-[216px]">
                  <h3>Freelance Platforms</h3>
                </th>
                <th className="">
                  <h3>Employees</h3>
                </th>
              </tr>

              <tr className="border-b-[2px] border-black ">
                <td>
                  <p className="py-[15px] font-semibold">Cost</p>
                </td>
                <td>
                  <p>$</p>
                </td>
                <td>
                  <p>$$</p>
                </td>
                <td>
                  <p>$$$$</p>
                </td>
              </tr>

              <tr className="border-b-[2px] border-black ">
                <td>
                  <p className="py-[15px] font-semibold">Senior-Level Designer</p>
                </td>
                <td>
                  <p>Yup. That&apos;s me!</p>
                </td>
                <td>
                  <p>Umm. Maybe?</p>
                </td>
                <td>
                  <p>Hopefully!</p>
                </td>
              </tr>

              <tr className="border-b-[2px] border-black ">
                <td>
                  <p className="py-[15px] font-semibold">Turnaround Times</p>
                </td>
                <td>
                  <p>48 Hours</p>
                </td>
                <td>
                  <p>Weeks</p>
                </td>
                <td>
                  <p>Weeks</p>
                </td>
              </tr>

              <tr className="border-b-[2px] border-black ">
                <td>
                  <p className="py-[15px] font-semibold">Design Revisions</p>
                </td>
                <td>
                  <p>As Many as You Need</p>
                </td>
                <td>
                  <p>Limited</p>
                </td>
                <td>
                  <p>Limited</p>
                </td>
              </tr>

              <tr className="border-b-[2px] border-black ">
                <td>
                  <p className="py-[15px] font-semibold">Start Time</p>
                </td>
                <td>
                  <p>Today</p>
                </td>
                <td>
                  <p>Day</p>
                </td>
                <td>
                  <p>Weeks</p>
                </td>
              </tr>

              <tr className="border-b-[2px] border-black ">
                <td>
                  <p className="py-[15px] font-semibold">Client Portal</p>
                </td>
                <td>
                  <p>✔️</p>
                </td>
                <td>
                  <p>❌</p>
                </td>
                <td>
                  <p>❌</p>
                </td>
              </tr>

              <tr className="border-b-[2px] border-black ">
                <td>
                  <p className="py-[15px] font-semibold">Time & Cost Savings</p>
                </td>
                <td>
                  <p>✔️✔️✔️</p>
                </td>
                <td>
                  <p>❌❌❌</p>
                </td>
                <td>
                  <p>❌❌❌</p>
                </td>
              </tr>
            </table>  ) : ( "" )}
        </div>
      </div>
    </div>
  );
}

export default Pricing;

{
  /*  */
}
