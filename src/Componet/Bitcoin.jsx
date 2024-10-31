import React from "react";
import { GrSend } from "react-icons/gr";
import { IoWalletOutline } from "react-icons/io5";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { VscIssueReopened } from "react-icons/vsc";
import { VscHistory } from "react-icons/vsc";
import { RiFolderReceivedLine } from "react-icons/ri";
import { TfiBarChart } from "react-icons/tfi";
import { VscAccount } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

function Bitcoin() {
  const navigate = useNavigate();
  return (
    <div className="py-9 mt-7 px-4 ">
      <div className="flex gap-14 text-sm ml-1 text-gray-500 text-center md:justify-center  ">
        <a className=" ">
          <GrSend
            color="#ADD8E6"
            className=" text-4xl md:text-7xl"
            onClick={() => navigate("/Send")}
          />
          <p>Send</p>
        </a>
        <a href="">
          <IoWalletOutline
            color="#ADD8E6"
            className=" text-4xl md:text-7xl"
            onClick={() => navigate("/Invest")}
          />
          <p>Invest</p>
        </a>
        <a>
          <RiMoneyDollarCircleLine
            color="#ADD8E6"
            className=" text-4xl md:text-7xl"
            onClick={() => navigate("/Send")}
          />
          <p>Sell</p>
        </a>
        <a href="">
          <VscIssueReopened color="#ADD8E6" className=" text-4xl md:text-7xl" />
          <p>Convert</p>
        </a>
      </div>
      <div className="flex gap-14 text-center ml-2 text-gray-500 text-sm mt-5 md:justify-center ">
        <a href="">
          <VscHistory color="#ADD8E6" className=" text-4xl md:text-7xl" />
          <p>History </p>
        </a>
        <a href="">
          <RiFolderReceivedLine
            color="#ADD8E6"
            className=" text-4xl md:text-7xl"
            onClick={() => navigate("/Recive")}
          />
          <p>Recive</p>
        </a>
        <a>
          <TfiBarChart
            color="#ADD8E6"
            className=" text-4xl md:text-7xl"
            onClick={() => navigate("/Trades")}
          />
          <p>Trade</p>
        </a>
        <a href="">
          <VscAccount
            color="#ADD8E6"
            className=" text-4xl md:text-7xl hover:text-blue-600"
          />
          <p>Invite</p>
        </a>
      </div>
    </div>
  );
}

export default Bitcoin;
