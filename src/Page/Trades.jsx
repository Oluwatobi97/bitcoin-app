import React from "react";
import Trading from "../Componet/Trading";
import Chart from "../Componet/Chart";
import { useNavigate } from "react-router-dom";

function Trades() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-5 text-blue-600">
        Trading
      </h1>
      <div className="flex gap-14 font-bold ml-3 mt-5">
        <h1
          className="border rounded-md bg-green-600 py-2 px-4"
          onClick={() => navigate("/Send")}
        >
          Buy
        </h1>
        <h1
          className="boder rounded-md bg-red-600 py-2 px-4"
          onClick={() => navigate("/Send")}
        >
          Sell
        </h1>
      </div>
      <div className="flex justify-center mt-8">
        <Chart />
      </div>
      <div className="justify-center">
        <Trading />
      </div>
    </div>
  );
}

export default Trades;
