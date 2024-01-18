import React from "react";
import HyggexLogo from "./Svg/HyggexLogo";
import Plus from "./Svg/Plus";

const FlashcardSection = () => {
  return (
    <section>
      <div className="flex items-center justify-between mt-[90px]">
        <div className="flex gap-[21px] items-center relative ">
          <svg
            width="81"
            className=""
            height="81"
            viewBox="0 0 81 81"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="40.3" cy="40.3" r="40.3" fill="white" />
          </svg>
          {/* <div className="absolute top-0 left-0 bg-[url('/Rectangle.png')]  bg-fuchsia-950 bg-cover bg-center">
            sadsad
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
