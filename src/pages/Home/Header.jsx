import React from "react";
import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <section className="bg-[#111315] paddingYShorter3 paddingXLongger3">
      <div className="flex flex-col md:flex-row lg:flex-row justify-between paddingX">
        <div className="flex flex-col justify-start">
          <label className="text-white text-3xl font-light">
            83,376.00 <span className="font-extralight" /> USDT
          </label>
          <label className="font-extralight">Balance</label>
        </div>
        <section className="flex flex-col md:flex-row lg:flex-row justify-end gap-3">
          {/* tougle */}
          <div className="flex justify-between bg-[#181a1c] w-fit px-4 py-3 rounded-xl gap-4">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <label className="font-light text-white">140</label>
                <Icon icon="formkit:arrowdown" width={15} color="#249833" />
              </div>
              <div className="flex items-center gap-2">
                <label className="font-extralight ">Trades</label>
                <label className="font-light text-[#249833] ">+15%</label>
                <label className="font-light ">
                  / <span /> 24
                </label>
              </div>
            </div>
            <Icon icon="tabler:menu" className="self-center" />
          </div>
          {/* tougle */}
          <div className="flex justify-between bg-[#181a1c] w-fit px-4 py-3 rounded-xl gap-4">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <label className="font-light text-white">$1,790.00</label>
              </div>
              <div className="flex items-center gap-2">
                <label className="font-extralight ">Revenue</label>
                <label className="font-light text-[#249833] ">+4.29%</label>
              </div>
            </div>
            <Icon icon="tabler:menu" className="self-center" />
          </div>
          {/* tougle */}
          <div className="flex justify-between bg-[#181a1c] w-fit px-4 py-3 rounded-xl gap-4">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <label className="font-light text-[#BB331B]">1,000.95</label>
              </div>
              <div className="flex items-center gap-2">
                <label className="font-extralight ">Marginal Profit</label>
                <label className="font-light text-[#BB331B] ">2.85%</label>
              </div>
            </div>
            <Icon icon="tabler:menu" className="self-center" />
          </div>
        </section>
      </div>
      {/* <Coints /> */}
    </section>
  );
};

export default Header;
