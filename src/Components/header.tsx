import React from "react";
import Image from "next/image";
import MarkButton from "./markButton";
import Link from "next/link";

function Header() {
  return (
    <div className="flex justify-center bg-[#fffcf2b2] backdrop-blur-sm  fixed rounded-[100px] bottom-10 left-[528px] z-20">
      <div className="flex border-double border-[4px] border-black rounded-[100px] px-[30px] py-[10px] items-center gap-[60px]">
        <div>
          <Link href="/">
            <Image src="/A.png" alt="*" width={41} height={41} />
          </Link>
        </div>
        <div>
          <ul className="flex gap-[30px]">
            <li className="list-none">
              <Link href="#aboutme">About Me</Link>
            </li>
            <li>
              {" "}
              <Link href="#howitwork">How it Works</Link>
            </li>
            <li>
              <Link href="#pricing">Pricing</Link>
            </li>
            <li>
              <Link href={{ hash: "#faq" }}>FAQs</Link>
            </li>
          </ul>
        </div>
        <div>
          <MarkButton>Book a Call with Marc</MarkButton>
        </div>
      </div>
    </div>
  
  );
}

export default Header;
<Link href="/"></Link>;
