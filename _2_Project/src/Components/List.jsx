import React from "react";

function List() {
  return (
    <div className="w-[100%] h-[263px] bg-hero bg-right bg-no-repeat flex justify-center items-center">
      <div className="text-white w-[390px] h-[190px] flex items-center list-outside">
        <ul className="">
          <li className='list-disc font-[400] text-[18px] list-image-[url("./src/assets/logo3.png")] leading-[30px]'>
            Was originally created by Jordan Walke
          </li>
          <li className="list-disc font-[400] text-[18px] list-image-[url('./src/assets/logo3.png')] leading-[30px]">
            Was first released in 2013
          </li>
          <li className="list-disc font-[400] text-[18px] list-image-[url('./src/assets/logo3.png')] leading-[30px]">
            Has well over 200K stars on GitHub
          </li>
          <li className="list-disc font-[400] text-[18px] list-image-[url('./src/assets/logo3.png')] leading-[30px]">
            Is maintained by Meta
          </li>
          <li className="list-disc font-[400] text-[18px] list-image-[url('./src/assets/logo3.png')] leading-[30px]">
            Powers thousands of enterprise apps, including mobile apps
          </li>
        </ul>
      </div>
    </div>
  );
}

export default List;
