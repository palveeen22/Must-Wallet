import React from "react";
import { Icon } from "@iconify/react";
import { coinList, tradeDeals } from "../../components/Constants";
import bit from "../../assets/bit.png";

const CointList = () => {
  return (
    <section className="bg-[#111315] w-full paddingX paddingYShorter flex flex-col md:flex-row lg:flex-row justify-center gap-5">
      <div className="md:w-[65%] w-full flex flex-col justify-start gap-2">
        <div className="flex flex-col md:flex-row lg:flex-row justify-between">
          <p className="text-[#ffffff] font-light text-2xl">
            {" "}
            Portofolio Balance
          </p>
          <span className="flex justify-between gap-3">
            <a className="text-xl font-extralight">0Xzab3457...v3</a>
            <Icon icon="akar-icons:copy" className="self-center" width={25} />
          </span>
        </div>

        {coinList?.map((e, index) => {
          return (
            <div className="bg-[#181a1c] flex justify-between paddingXShorter2 paddingYShorter3 rounded-lg">
              <div className="flex gap-4">
                <div className="w-10 self-center">
                  <img src={e?.image} className="w-full object-cover" />
                </div>
                <p className="text-white self-center text-xl font-light">
                  {e?.label}
                </p>
              </div>
              <p className="text-white text-xl self-center font-light">
                {e?.num}
                <span /> {e?.cur}
              </p>
              <p className="text-white text-xl self-center font-light">
                {e?.price}
              </p>
              <div className="flex items-center gap-2">
                <p
                  className={`font-light ${
                    index % 2 === 0 ? "text-[#BB331B]" : "text-[#249833]"
                  }`}
                >
                  {e?.percent}
                </p>
                <Icon
                  icon={e?.icon}
                  size={15}
                  color={index % 2 === 0 ? "#BB331B" : "#249833"}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="md:w-[40%] w-full flex flex-col justify-start gap-2">
        <p className="text-[#ffffff] font-light text-2xl">Trade Deals</p>
        {tradeDeals?.map((e) => {
          return (
            <div className="bg-[#181a1c] flex flex-col justify-center rounded-xl">
              {/* sec1 */}
              <div className="flex justify-between paddingXShorter3 paddingYShorter3">
                <div className="flex gap-6">
                  <div className="w-12 h-12 self-center">
                    <img src={e?.image} className="w-full object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-white self-center text-lg font-light">
                      {e?.conitName} Perpetual
                    </p>
                    <a className="text-lg font-extralight">
                      Cross {e?.cross} X{" "}
                    </a>
                  </div>
                </div>
                <div className="flex flex-col">
                  <a className="self-center text-xl font-light text-[#249833]">
                    {e?.roe}
                  </a>
                  <a className="self-center text-end font-extralight">ROE</a>
                </div>
              </div>
              {/* sec2 */}
              <div className="flex justify-between paddingXShorter3 text-center">
                <div className="flex flex-col">
                  <a className="text-md font-extralight">size USDT</a>
                  <p className="text-white self-center text-lg font-light">
                    {e?.size}
                  </p>
                </div>
                <div className="flex flex-col">
                  <a className="text-md font-extralight">Maring</a>
                  <p className="text-white self-center text-lg font-light">
                    {e?.maring}
                  </p>
                </div>
                <div className="flex flex-col">
                  <a className="text-md text-end font-extralight">Risk</a>
                  <p className="self-center text-lg font-light text-[#249833]">
                    {e?.risk}{" "}
                  </p>
                </div>
              </div>
              {/* sec3 */}
              <div className="flex justify-between paddingXShorter3 paddingTopShorter2">
                <div className="flex flex-col">
                  <a className="text-md font-extralight">Entry Price</a>
                  <p className="text-white self-center text-lg font-light">
                    {e?.entry}{" "}
                  </p>
                </div>
                <div className="flex flex-col">
                  <a className="text-md font-extralight">Mark Price</a>
                  <p className="text-white self-center text-lg font-light">
                    {e?.mark}{" "}
                  </p>
                </div>
                <div className="flex flex-col">
                  <a className="text-md text-end font-extralight">Liq, Price</a>
                  <p className="self-center text-lg font-light text-white">
                    {e?.liq}{" "}
                  </p>
                </div>
              </div>
              {/* button */}
              <div className="paddingXShorter3 paddingTopShorter2 paddingBottomShorter2 flex justify-between">
                <button className="bg-[#333333] rounded-lg px-2 py-2 ">
                  Close Position
                </button>
                <button className="bg-[#333333] rounded-lg px-2 py-2 ">
                  Adjust Leverage
                </button>
                <div className="flex justify-between gap-3">
                  <button className="bg-[#333333] rounded-lg px-2 py-2 ">
                    Stop Profit
                  </button>
                  <div className="flex items-center bg-[#BB331B] rounded-md px-2 py-2">
                    <button className="mr-2">S</button>
                    <Icon
                      icon="formkit:arrowdown"
                      size={15}
                      className="self-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CointList;
