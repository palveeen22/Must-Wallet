import React from "react";
import { Icon } from "@iconify/react";
import { coinList } from "./Constants";
import { VscCopy } from "react-icons/vsc";
import { VscArrowUp } from "react-icons/vsc";
import { VscArrowDown } from "react-icons/vsc";

import usc from "../../assets/usc.png";
import bit from "../../assets/bit.png";

const Coints = () => {
  return (
    <section className="bg-[#000000] min-h-screen paddingY paddingXLongger3">
      <div className="flex paddingX w-full justify-between">
        <label className="text-white font-light text-2xl">
          Portofolio Balance
        </label>
        <div className="flex justify-start gap-3">
          <label className="text-xl font-extralight">0Xzab3457...v3</label>
          <VscCopy className="self-center" size={18} />
        </div>
        <label className="text-white font-light  text-2xl">Trade Deals</label>
      </div>

      {/* coint list */}
      <div className="flex flex-col justify-between paddingX">
        {coinList?.map((e) => {
          return (
            <div className="bg-[#333333] w-[58%] flex justify-between paddingXShorter2 paddingYShorter3 rounded-lg">
              <div className="flex gap-4">
                <div className="w-10 self-center">
                  <img src={e?.image} className="w-full object-cover" />
                </div>
                <label className="text-white self-center text-xl font-light">
                  {e?.label}
                </label>
              </div>
              <label className="text-white text-xl self-center font-light">
                {e?.num}
                <span /> {e?.cur}
              </label>
              <label className="text-white text-xl self-center font-light">
                {e?.price}
              </label>
              <div className="flex items-center gap-2">
                <label className="font-light text-[#BB331B]">
                  {e?.percent}
                </label>
                <Icon icon={e?.icon} size={15} color="#BB331B" />
              </div>
            </div>
          );
        })}

        {/* trade deals */}
        <section className="bg-[#333333] w-[35%] rounded-xl">
          <div className="flex justify-between paddingXShorter3 paddingYShorter3">
            <div className="flex gap-6">
              <div className="w-10 self-center">
                <img src={bit} className="w-full object-cover" />
              </div>
              <div className="flex flex-col">
                <label className="text-white self-center text-xl font-light">
                  {" "}
                  BTCUSDT Perpetual
                </label>
                <label className="text-lg font-extralight">
                  Cross {""} 50 X{" "}
                </label>
              </div>
            </div>
            <div className="flex flex-col ">
              <label className="self-center text-xl font-light text-[#249833]">
                +2.96 %
              </label>
              <label className="self-center font-extralight">ROE</label>
            </div>
          </div>

          {/* 2 section */}
          <div className="flex justify-between paddingXShorter3">
            <div className="flex flex-col">
              <label className="text-md font-extralight">size USDT</label>
              <label className="text-white self-center text-lg font-light">
                4, 714 .82
              </label>
            </div>
            <div className="flex flex-col">
              <label className="text-md font-extralight">Maring</label>
              <label className="text-white self-center text-lg font-light">
                1,967.03
              </label>
            </div>
            <div className="flex flex-col">
              <label className="text-md text-end font-extralight">Risk</label>
              <label className="self-center text-lg font-light text-[#249833]">
                10.52%{" "}
              </label>
            </div>
          </div>

          {/* 3 section */}
          <div className="flex justify-between paddingXShorter3 paddingTopShorter2">
            <div className="flex flex-col">
              <label className="text-md font-extralight">Entry Price</label>
              <label className="text-white self-center text-lg font-light">
                50, 157. 60{" "}
              </label>
            </div>
            <div className="flex flex-col">
              <label className="text-md font-extralight">Mark Price</label>
              <label className="text-white self-center text-lg font-light">
                50, 128.30{" "}
              </label>
            </div>
            <div className="flex flex-col">
              <label className="text-md text-end font-extralight">
                Liq, Price
              </label>
              <label className="self-center text-lg font-light text-white">
                30, 634. 22{" "}
              </label>
            </div>
          </div>

          {/* button section */}
          <section className="paddingXShorter3 paddingTopShorter2 paddingBottomShorter2 flex justify-between">
            <div className="border rounded-lg px-2 py-2 ">Close Position</div>
            <div>Adjust Leverage</div>
            <div>Stop Profit</div>
          </section>
        </section>
      </div>
    </section>
  );
};

export default Coints;
