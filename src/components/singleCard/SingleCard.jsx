import React, { useState } from "react";
import chatGpt from "../../images/chatGpt.png";
import calenderIcon from "../../images/icons/calender.svg";
import { BsArrowRightShort } from "react-icons/bs";
import DetailsModal from "../detailsModal/DetailsModal";

const SingleCard = ({ tool }) => {
  // destructure all tools data
  const { id, name, image, features, published_in } = tool;

  const [toolInfo, setToolInfo] = useState("");

  //   pass the tool data when clicking on details button
  const handleShow = (tool) => {
    setToolInfo(tool);
  };
  console.log(toolInfo);
  return (
    <div className="m-3 border border-gray-200 rounded-lg text-left p-5 min-h-[507px]">
      <img
        src={image}
        alt=""
        className="rounded-lg w-[430px] h-[200px] max-w-full mb-3"
      />
      <h3 className="text-[25px] text-textPrimary font-[600] "> Features</h3>
      <ul>
        {features?.map((feature) => (
          <li className="list-decimal mb-2 text-[16px] font-normal text-textSecondary ml-5">
            {feature ? feature : "No data available"}
          </li>
        ))}
      </ul>
      <hr className="my-4 text-gray-300" />
      <div className="flex items-center justify-between">
        <div className=" text-left">
          <h3 className="text-[25px] text-textPrimary font-[600] mb-3">
            {name ? name : "No data available"}
          </h3>
          <div className="flex items-center ">
            <img src={calenderIcon} alt="" className="" />
            <span className="text-[16px] font-normal text-textSecondary ml-4">
              {published_in ? published_in : "No data available"}
            </span>
          </div>
        </div>
        {/* details button */}
        <label htmlFor="my-modal-3" onClick={() => handleShow(tool)}>
          <span className="text-[22px] text-btnPrimary text-center rounded-full w-[46px] h-[46px] bg-lightPink shadow shadow-gray-200 flex items-center justify-center">
            <BsArrowRightShort />
          </span>
        </label>
      </div>
      {/* details modal */}
      {toolInfo && (
        <DetailsModal toolInfo={toolInfo} setToolInfo={setToolInfo} />
      )}
    </div>
  );
};

export default SingleCard;
