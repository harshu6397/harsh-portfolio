"use client";

import CountUp from "react-countup";
import profileStats from "../data/profileStats";

const Stats = () => {
  return (
    <section>
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {profileStats.map(({num, name}, index) => (
                    <div
                        key={index}
                        className="flex-1 flex items-center justify-center gap-4 xl:justify-start"
                    >
                        <CountUp
                            start={index === 0 ? 0 : profileStats[index - 1].num}
                            end={num}
                            duration={5}
                            delay={2}
                            className="text-4xl xl:text-6xl font-extrabold"
                        />
                        <p className={`${name.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80"`}>{name}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Stats