import React from "react";

const Categories = () => {
  return (
    <div className="w-full mx-auto mt-[56px] ">
      <ul className="flex justify-center gap-[64px]">
        <li className="text-[20px] text-[#06286E] font-[700] text-center pb-3">
          Study
          <hr className="w-[82px] h-[2px]  bg-[#06286E]" />
        </li>

        <li className="text-[20px] text-[#696671] font-[500]">Quiz</li>
        <li className="text-[20px] text-[#696671] font-[500]">Test</li>
        <li className="text-[20px] text-[#696671] font-[500]">Game</li>
        <li className="text-[20px] text-[#696671] font-[500]">Others</li>
      </ul>
    </div>
  );
};

export default Categories;
