import React from "react";
import { ReactDOM } from "react";

export default function WeeklyRadio() {
    return (
        <div className="bg-black text-white  flex flex-row justify-between rounded-[20px] h-[30%]">
            <div className="p-[15px]">
                <h2 className="text-[2.5rem]">The Weekend Radio</h2>
                <span className="text-[.7rem] mt-0">By cHatMusic</span>
                <div className="p-[.6rem]">
                    <button className="bg-white text-red-600 p-[5px] shadow-xl shadow-red-500/50">Listen Now</button>
                </div>
            </div>
            <div className=" h-[100%] w-[30%]">
                <img src="/./src/assets/beautiful-african.png"  alt="" width={100} className="w-[100%] h-[100%] object-cover"/>
            </div>
        </div>
    )
}