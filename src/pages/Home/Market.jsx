import React from "react";
import { Icon } from "@iconify/react";
import { marketData } from "../../components/Constants";

const Market = () => {
  return (
    <section className="bg-[#111315] paddingX paddingYShorter">
      <div className="flex flex-col justify-center gap-2 text-center">
        <a className="text-[#0A54C0]">Benefits</a>
        <h3 className="text-[#ffffff] text-4xl">Our Best Service</h3>
        <p className="mx-auto w-[70%]">
          Crypto Planet is a Crypto trading exchange UI template to sell,
          purchase, and hold crypto currencies. This template is designed with a
          lot of research and after creating a well researched UX. This enabled
          us to create the full Crypto trading exchange process.
        </p>
      </div>

      <div class="grid grid-cols-4 gap-4 paddingYShorter">
        {marketData?.map((e) => {
          return (
            <div className="bg-[#181a1c] flex flex-col justify-start rounded-lg gap-2 p-4">
              <Icon icon={e?.icon} color="#0A54C0" width={55} />
              <a className="text-[#ffffff]">{e?.title}</a>
              <p>{e?.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Market;
