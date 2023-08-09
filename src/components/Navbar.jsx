import React from "react";
import img1 from "../assets/motivator.png";
import { VscBellDot } from "react-icons/vsc";
import { Icon } from "@iconify/react";
const Navbar = () => {
  return (
    <section>
      <div className="navbar bg-[#111315] flex justify-between">
        <div className="flex justify-between">
          <img />
          <a className="btn btn-ghost normal-case text-xl text-white">
            Must Wallet
          </a>
        </div>
        <div className="flex gap-2">
          <a className="bg-[#333333] rounded-lg px-2 py-2">BTC $20,21.56</a>
          <a className="bg-[#333333] rounded-lg px-2 py-2">ETH $1,632.50</a>
          <a className="bg-[#333333] rounded-lg px-2 py-2">DOT $6.52</a>
          <a className="bg-[#333333] rounded-lg px-2 py-2">FTX $6.52</a>
          <button className="flex items-center space-x-1 px-4 py-2 rounded-md border border-[#333333]">
            <span>Set Watchlist</span>
            <Icon icon="material-symbols:settings-outline" width={20} />
          </button>
        </div>
        <div className="flex-none gap-4">
          <div className="bg-[#0A54C0] text-white w-fit py-2 px-4 rounded-lg">
            Earn 11% APR
          </div>
          <VscBellDot size={20} />
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-lg">
                <img src={img1} className="object-cover" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
