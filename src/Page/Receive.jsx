import React from "react";
import photo2 from "../assets/images/photo2.jpg";
import Dropdown from "../Componet/Dropdown";
import { FiCopy } from "react-icons/fi";
import { BsPatchQuestion } from "react-icons/bs";

function Recive() {
  return (
    <div className="p-6">
      <div className="text-center font-bold flex flex-col items-center">
        <img
          src={photo2}
          className="w-[250px] mt-12 items-center justify-center"
        />
      </div>
      <div className="font-bold">
        <p className="mt-10">Wallet Address :-</p>
        <h1 className="text-sm mt-5 flex justify-between">
          1JGyoU5FD9yUHUuiSWGVMYgPGav8zJVaAc <FiCopy />
        </h1>
      </div>
      <div className="mt-7 font-bold">
        <p>Network</p>
        <div className="mt-5">
          <Dropdown options={["BTC", "ETH"]} />
        </div>
        <div className="text-sm mt-5 flex justify-between">
          <h3 className="flex ">
            Minimum Deposite Amount <BsPatchQuestion className="ml-3" />
          </h3>
          <h3>0.000006BTC</h3>
        </div>
        <div className="text-sm mt-8 flex justify-between">
          <h2 className="flex">
            Deposite Arrival
            <BsPatchQuestion className="ml-3" />
          </h2>
          <h2>1 confirmations</h2>
        </div>
        <div className="text-sm mt-4 flex justify-between">
          <h2 className="flex">
            Withdrawal Unlocked
            <BsPatchQuestion className="ml-3" />
          </h2>
          <h2>2 confirmations</h2>
        </div>
      </div>
    </div>
  );
}

export default Recive;
