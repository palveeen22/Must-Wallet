import React from "react";
import img1 from "../assets/motivator.png";
import { VscBellDot } from "react-icons/vsc";

const Navbar = () => {
  return (
    <section>
      <div className="navbar bg-[#000000]">
        <div className="flex-1">
          <img />
          <a className="btn btn-ghost normal-case text-xl text-white">
            Must Wallet
          </a>
        </div>
        <div className="flex-none gap-4">
          <div className="bg-sky-500 text-white w-fit py-2 px-4 rounded-lg">
            Earn 11% APR
          </div>
          <VscBellDot size={20} />
          {/* <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div> */}
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
