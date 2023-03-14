import React from 'react'
import chatGpt from "../../images/chatGpt.png";
import calenderIcon from "../../images/icons/calender.svg";
import { BsArrowRightShort } from "react-icons/bs";

const SingleCard = () => {
  return (
    <div className="m-3 border border-gray-200 rounded-lg text-left p-4">
      <img src={chatGpt} alt="" className="rouneded-lg w-full mb-3" />
      <h3 className="text-[25px] text-textPrimary font-[600] "> Features</h3>
      <ul>
        <li className="list-decimal mb-2 text-[16px] font-normal text-textSecondary">
          Natural language processing
        </li>
      </ul>
      <hr className="my-4 text-gray-300" />
      <div className="flex items-center justify-between">
        <div className="">
          <h3 className="text-[25px] text-textPrimary font-[600] mb-3">
            {" "}
            ChatGpt
          </h3>
          <div className="flex items-center justify-center ">
            <img src={calenderIcon} alt="" className="w-full" />
            <span className="text-[16px] font-normal text-textSecondary ml-4">
              11/12/2023
            </span>
          </div>
        </div>
        {/* details button */}
        <button className="rounded-full w-[50px] h-[50px] bg-lightPink shadow shadow-gray-200 flex items-center justify-center">
          <span className="text-xl text-btnPrimary text-center ">
            <BsArrowRightShort />
          </span>
        </button>
      </div>
    </div>
  )
}

export default SingleCard