import React from "react";

const ProfitCard = () => {
  return (
    <section className="w-full flex justify-center gap-8">
      <div className="bg-[#0A54C0] w-[50%] rounded-lg paddingXShorter3 paddingYShorter3">
        <div className="flex flex-col text-[#ffffff] gap-4">
          <p>Total Profit</p>
          <div className="flex justify-between">
            <a>Jan - April 2022</a>
            <a>$ 15 , 892</a>
          </div>
          {/* level bar */}
          <div className="h-1 w-full bg-[#ffffff] dark:bg-[#000000]">
            <div className="h-1 bg-[#ffffff]" style={{ width: "75%" }}></div>
          </div>
          <div className="flex justify-between">
            <a className="text-[#000000] rounded-lg bg-[#16CF1C] px-2 py-1">
              172 , 5 %
            </a>
            <div className="flex gap-4 items-center">
              <a>BTC</a>
              <a>USDT</a>
              <a>BNB</a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#181a1c] w-[50%] rounded-lg paddingXShorter3 paddingYShorter3">
        <div className="flex flex-col text-[#ffffff] gap-4">
          <p>Total Profit</p>
          <div className="flex justify-between">
            <a>Jan - April 2022</a>
            <a>$ 15 , 892</a>
          </div>
          <div className="h-1 w-full bg-[#ffffff] dark:bg-[#000000]">
            <div className="h-1 bg-[#ffffff]" style={{ width: "25%" }}></div>
          </div>
          <div className="flex justify-between">
            <a className="text-[#000000] rounded-lg bg-[#BB331B] px-2 py-1">
              45 , 5 %
            </a>
            <div className="flex gap-4 items-center">
              <a>BTC</a>
              <a>USDT</a>
              <a>BNB</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfitCard;
