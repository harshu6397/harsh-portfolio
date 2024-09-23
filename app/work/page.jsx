"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
    TooltipProvider,
} from "../../components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

import projectsData from "../../data/projectsData";

// Components
import WorkSliderBtns from "../../components/WorkSliderBtns";

const Work = () => {
    const [projet, setProject] = useState(projectsData[0]);
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%] group">
                            {/* outline number */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline xl:text-9xl">
                                {projet.id}
                            </div>
                            {/* project category */}
                            <div className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                {projet.category}
                            </div>
                            {/* project title */}
                            <div className="text-[30px] font-bold leading-none text-accent group-hover:text-white transition-all duration-500 capitalize">
                                {projet.title}
                            </div>
                            {/* project description */}
                            <p className="text-white/60">
                                {projet.description}
                            </p>
                            {/* project stack */}
                            <ul className="flex gap-4">
                                {projet.stack.map((item, index) => (
                                    <li
                                        key={index}
                                        className="text-accent text-xl"
                                    >
                                        <span>
                                            {item.name}
                                            {index !== projet.stack.length - 1
                                                ? ","
                                                : ""}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            {/* border */}
                            <div className="border border-white/20"></div>
                            {/* buttons */}
                            <div className="flex gap-4 items-center">
                                {/* live project */}
                                <Link href={projet.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 group flex justify-center items-center">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent " />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                Live project
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/* github */}
                                <Link href={projet.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 group flex justify-center items-center">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent " />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                Github Repository
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* project image */}
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            onSlideChange={(swiper) =>
                                setProject(projectsData[swiper.realIndex])
                            }
                            className="xl:h-[520px] mb-12"
                        >
                            {projectsData.map((project, index) => (
                                <SwiperSlide key={index} className="w-full">
                                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                        {/* overlay */}
                                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                            {/* slider btn */}
                            <WorkSliderBtns
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Work;
