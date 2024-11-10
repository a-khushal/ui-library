"use client"

import { useState } from "react";

const data = [
    {
        title: "Is it accessible?",
        description: "Yes. It adheres to the WAI-ARIA design pattern."
    }, 
    {
        title: "Is it styled?",
        description: "Yes. It comes with default styles that matches the other components' aesthetic."
    }, 
    {
        title: "Is it animated?",
        description: "Yes. It's animated by default, but you can disable it if you prefer."
    }
]

export default function Accordian() {
    const [openIdx, setOpenIdx] = useState<null | number>(null)
    const [hoverIdx, setHoverIdx] = useState<null | number>(null)

    return <div className="md:w-[550px] w-full">
        {data.map((x, idx) => {
            const isOpen = (idx === openIdx)
            const isHover = (idx === hoverIdx)

            return (
                <div key={idx} className={`border-b border-zinc-700 hover:cursor-pointer`} onMouseEnter={() => setHoverIdx(isHover ? null : idx)} onMouseLeave={() => setHoverIdx(null)} onClick={() => setOpenIdx(isOpen ? null : idx)}>
                    <div className="py-2 flex justify-between items-center">
                        <div className={`pt-4 ${isHover ? "underline" : ""}`}>{x.title}</div>
                        {isOpen ? 
                        <div className="pt-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                            </svg>  
                        </div> 
                        : 
                        <div className="pt-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                        }
                    </div>
                    <div className="py-2">
                        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"}`}>
                            <div>{x.description}</div>
                        </div>
                    </div>
                </div>
            )})}
    </div>
}