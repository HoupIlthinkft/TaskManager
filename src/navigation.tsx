import { useState } from "react";


export function NavComponent({pages, activePage, setActivePage}) {

    return (
        <div className="flex flex-col gap-[clamp(10px,4vh,40px)] bg-plate-muted h-screen py-[64px] px-[20px]">
            <div>
                <p className="text-content text-center text-[clamp(1em,2vw,3em)] font-bold">Навигация</p>
                <i></i>
            </div>
            <nav className="flex flex-col gap-[clamp(5px,2vh,20px)]">
                {
                    pages.map((el, index) => (
                        <div 
                            className={`text-[clamp(1rem,1.5vw,2.5rem)] font-bold text-content h-fit py-[16px] px-[9px] hover:bg-plate-nav hover:text-white rounded-[15px] transition-all duration-200 ${activePage == index ? "text-white bg-plate-nav" : ""}`} 
                            key={index}
                            onClick={() => {setActivePage(index)}}
                            >{el}</div>
                    ))
                }    
            </nav>
        </div>
    )
}
