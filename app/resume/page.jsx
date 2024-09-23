"use client";

import aboutData from "../../data/aboutData";
import experienceData from "../../data/experienceData";
import educationData from "../../data/educationData";
import skillsData from "../../data/skillsData";

import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
} from "../../components/ui/tabs";
import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
    TooltipProvider,
} from "../../components/ui/tooltip";
import { ScrollArea } from "../../components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <section>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
                }}
                className="min-h-[80vh] flex justify-center items-center py-12 xl:py-0"
            >
                <div className="container mx-auto">
                    <Tabs
                        defaultValue="experience"
                        className="flex flex-col xl:flex-row gap-[60px]"
                    >
                        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                            <TabsTrigger value="experience">
                                Experience
                            </TabsTrigger>
                            <TabsTrigger value="education">
                                Education
                            </TabsTrigger>
                            <TabsTrigger value="skills">Skills</TabsTrigger>
                            <TabsTrigger value="about">About Me</TabsTrigger>
                        </TabsList>
                        {/* content */}
                        <div className="min-h-[70vh] w-full">
                            {/* experience */}
                            <TabsContent value="experience" className="w-full">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">
                                        {experienceData.title}
                                    </h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {experienceData.description}
                                    </p>
                                    <ScrollArea className="w-full h-[400px]">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                            {experienceData.items.map(
                                                (item, index) => (
                                                    <li
                                                        key={index}
                                                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                    >
                                                        <span className="text-accent">
                                                            {item.duration}
                                                        </span>
                                                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                            {item.position}
                                                        </h3>
                                                        <div className="flex items-center gap-3">
                                                            {/* dot */}
                                                            <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                                                            <p className="text-white/60">
                                                                {item.company}
                                                            </p>
                                                        </div>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </ScrollArea>
                                </div>
                            </TabsContent>
                            {/* education */}
                            <TabsContent value="education" className="w-full">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">
                                        {educationData.title}
                                    </h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {educationData.description}
                                    </p>
                                    <ScrollArea className="w-full h-[400px]">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                            {educationData.items.map(
                                                (item, index) => (
                                                    <li
                                                        key={index}
                                                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                    >
                                                        <span className="text-accent">
                                                            {item.duration}
                                                        </span>
                                                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                            {item.degree}
                                                        </h3>
                                                        <div className="flex items-center gap-3">
                                                            {/* dot */}
                                                            <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                                                            <p className="text-white/60">
                                                                {item.institute}
                                                            </p>
                                                        </div>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </ScrollArea>
                                </div>
                            </TabsContent>
                            {/* skills */}
                            <TabsContent
                                value="skills"
                                className="w-full h-full"
                            >
                                <div className="flex flex-col gap-[30px]">
                                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                        <h3 className="text-4xl font-bold">
                                            {skillsData.title}
                                        </h3>
                                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                            {skillsData.description}
                                        </p>
                                    </div>
                                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                                        {skillsData.skillList.map(
                                            (item, index) => (
                                                <li key={index}>
                                                    <TooltipProvider
                                                        delayDuration={100}
                                                    >
                                                        <Tooltip>
                                                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                    {item.icon}
                                                                </div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className="capitalize">
                                                                    {item.name}
                                                                </p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </TabsContent>
                            {/* about me */}
                            <TabsContent
                                value="about"
                                className="w-full text-center xl:text-left"
                            >
                                <div className="flex flex-col gap-[30px]">
                                    <h3 className="text-4xl font-bold">
                                        {aboutData.title}
                                    </h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {aboutData.description}
                                    </p>
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                        {aboutData.info.map((item, index) => (
                                            <li
                                                key={index}
                                                className="flex justify-center items-center xl:justify-start gap-4"
                                            >
                                                <span className="text-white/60">
                                                    {item.fieldName}
                                                </span>
                                                <p className="text-xl">
                                                    {item.fieldValue}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </motion.div>
        </section>
    );
};

export default Resume;
