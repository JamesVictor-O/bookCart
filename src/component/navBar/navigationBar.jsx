import React from "react";
import { ReactDOM } from "react";


export function NavigationBar() {
    return (
        <div className="bg-blue-200 w-[15%] h-[100vh] flex  items-center flex-col pointer pt-[20px ]">
            <h2 className="text-[1.5rem]">cHatMusic</h2>
            <div className="mt-[50px] w-[70%] border-b-2 border-black pb-[40px]" >
                <h2 className="border-y-2 border-black flex items-center justify-center">Menu</h2>
                <div>
                    <ul className=" list-none">
                        <li className="mt-[.8rem] border items-center justify-center flex  p-[.2rem] hover:bg-sky-700 bg-white rounded "><a href="#">Home</a></li>
                        <li className="mt-[.8rem] border items-center justify-center flex p-[.2rem] hover:bg-sky-700 bg-white rounded "><a href="#">Channels</a></li>
                        <li className="mt-[.8rem] border items-center justify-center flex p-[.2rem] hover:bg-sky-700 bg-white rounded "><a href="#">Music Chart</a></li>
                        <li className="mt-[.8rem] border items-center justify-center flex p-[.2rem] hover:bg-sky-700 bg-white rounded "><a href="#">Events</a></li>
                    </ul>
                </div>
            </div>
            <div className="mt-[10px] w-[70%]">
                <ul>
                    <li className="mt-[6px] text-sky-blue-700"><a className="hover:text-sky-700 text-[1rem]" href="#">My playList</a></li>
                    <li className="mt-[6px] text-sky-blue-700 "><a className="hover:text-sky-700 text-[1rem]" href="#">Artist</a></li>
                    <li className="mt-[6px] text-sky-blue-700 "><a className="hover:text-sky-700 text-[1rem]" href="#">Album</a></li>
                    <li className="mt-[6px] text-sky-blue-100"><a className="hover:text-sky-700 text-[1rem]" href="#">Coming Soon</a></li>
                </ul>
            </div>
        </div>
    )
}