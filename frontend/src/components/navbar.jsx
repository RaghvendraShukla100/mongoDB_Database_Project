import React from "react";

function Navbar() {
  return (
    <div className=" text-gray-100  h-16 bg-gray-900 flex justify-center items-center">
      <ul className="flex justify-center text-xl gap-5 font-semibold  uppercase w-fit">
        <li>home</li>
        <li>about</li>
        <li>features</li>
        <li>history</li>
      </ul>
      <div>
        <img src={""} alt={""} />
      </div>
    </div>
  );
}

export default Navbar;
