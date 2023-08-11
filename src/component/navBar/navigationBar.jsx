import React from "react";
import { ReactDOM } from "react";


export function NavigationBar() {
    return (
        <div className="bg-blue-200 w-[15%] h-[100vh] flex  items-center flex-col">
            <h2 className="text-[1.5rem]">cHatMusic</h2>
            <div className="mt-[50px]">
                <h2 className="border-y-2 border-black flex items-center justify-center">Menu</h2>
                <div>
                    <ul className=" list-none">
                        <li className="mt-[.8rem] border p-[.3rem] bg-white rounded "><a href="#">Home</a></li>
                        <li className="mt-[.8rem] border p-[.3rem] bg-white rounded "><a href="#">Channels</a></li>
                        <li className="mt-[.8rem] border p-[.3rem] bg-white rounded "><a href="#">Music Chart</a></li>
                        <li className="mt-[.8rem] border p-[.3rem] bg-white rounded "><a href="#">Events</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}