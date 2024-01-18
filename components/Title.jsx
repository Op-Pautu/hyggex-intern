import React from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });
const Title = () => {
  return (
    <div className={`${montserrat.className} mt-[68px] mr-auto`}>
      <p className="text-[32px] font-bold leading-normal text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-500">
        Relations and Functions ( Mathematics )
      </p>
    </div>
  );
};

export default Title;
