import React from "react";
import Down from "./Svg/Down";

const Faq = () => {
  return (
    <div className="mt-[154.4px]">
      <p className="text-4xl font-semibold text-transparent uppercase leading-trim text-edge-cap font-inter bg-gradient-to-b from-blue-800 to-indigo-800 bg-clip-text">
        faq
      </p>

      <div className="mt-[48px] flex flex-col gap-[32px]">
        <div className="flex w-[848px] h-[58px] justify-between items-center rounded-[12px] px-[24px] py-[17px] border border-solid border-[#217EEC]">
          <p className="text-lg font-semibold leading-6 text-gray-800">
            Can education flashcards be used for all age groups?
          </p>
          <Down />
        </div>
        <div className="flex w-[848px] h-[58px] justify-between items-center rounded-[12px] px-[24px] py-[17px] border border-solid border-[#217EEC]">
          <p className="text-lg font-semibold leading-6 text-gray-800">
            How do education flashcards work?
          </p>
          <Down />
        </div>
        <div className="flex w-[848px] h-[58px] justify-between items-center rounded-[12px] px-[24px] py-[17px] border border-solid border-[#217EEC] mb-[307px]">
          <p className="text-lg font-semibold leading-6 text-gray-800">
            Can education flashcards be used for test preparation?
          </p>
          <Down />
        </div>
      </div>
    </div>
  );
};

export default Faq;
