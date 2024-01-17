import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <section className="flex justify-between w-full">
      <div>
        <Image src="/hyggex.png" alt="logo" height={39} width={191} />
      </div>
      <div>
        <ul className="flex items-center gap-10">
          <li>Home</li>
          <li>Flashcard</li>
          <li>Contact</li>
          <li>FAQ</li>
          <li>
            <button className="px-[20px] py-[8px] rounded-[32px] bg-gradient-to-b from-blue-900 to-blue-500 text-base font-medium leading-normal text-white font-inter">
              Login
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
