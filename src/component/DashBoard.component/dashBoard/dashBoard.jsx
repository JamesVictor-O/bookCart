import React from "react";
import { ReactDOM } from "react";
import WeeklyRadio from "../weaklyRadio/weeklyRadio";

export function DashBoard() {
    return (
        <div className="bg-red-600 w-[85%] p-[20px]">
            <div>
              <h2 className="text-[2.1rem] text-white mb-[10px]">Discover</h2>
            </div>
            <WeeklyRadio/>
        </div>
    )
}