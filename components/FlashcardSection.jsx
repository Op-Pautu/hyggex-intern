import React from "react";
import HyggexLogo from "./Svg/HyggexLogo";
import Plus from "./Svg/Plus";
import Image from "next/image";

const FlashcardSection = () => {
  return (
    <section>
      <div className="flex items-center  mt-[90px] relative">
        <div className="flex gap-[21px] items-center mr-auto ">
          <div className="">
            <Image
              src="/logo.png"
              alt="logo"
              width={80}
              height={80}
              className=""
            />
            {/* <span className=" bg-[url('/Rectangle.png')] w-[34px] h-[44px]  bg-cover  bg-center" /> */}
          </div>
          {/* <div className="rounded-full w-[80.6px] h-[80.6px] bg-[#FFF] relative ">
          </div> */}
          <div>
            <p className="text-[#696671] text-[12.4px] font-[700]">
              Published By
            </p>
            <HyggexLogo />
          </div>
        </div>
        <div className="flex items-center justify-center gap-[8px]">
          <Plus />
          <p className="text-[28px] font-[600] bg-clip-text bg-gradient-to-b from-blue-800 to-indigo-800 text-transparent">
            Create Flashcard
          </p>
        </div>
      </div>
    </section>
  );
};

export default FlashcardSection;
