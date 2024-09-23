"use client";

import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../../components/ui/select";

import { motion } from "framer-motion";
import contactData from "../../data/contactData";

const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { duration: 0.4, delay: 1.4, ease: "easeIn" },
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:w-[52%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">
                                Let&#39;s get in touch
                            </h3>
                            <p className="text-white/60">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Exercitationem impedit vel
                                corporis aspernatur quis.
                            </p>
                            {/* inputs */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {/* first name */}
                                <Input
                                    type="text"
                                    placeholder="First Name"
                                    className="w-full"
                                />
                                {/* last name */}
                                <Input
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-full"
                                />
                                {/* email */}
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full"
                                />
                                {/* phone */}
                                <Input
                                    type="text"
                                    placeholder="Phone"
                                    className="w-full"
                                />
                            </div>
                            {/* select */}
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>
                                            Select a service
                                        </SelectLabel>
                                        <SelectItem value="est">
                                            Web Development
                                        </SelectItem>
                                        <SelectItem value="cst">
                                            UI/UX Design
                                        </SelectItem>
                                        <SelectItem value="mst">
                                            Logo Design
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/* message */}
                            <Textarea
                                placeholder="Type a message..."
                                className="w-full h-[200px]"
                            />
                            {/* submit */}
                            <Button size="md" className="max-w-40" type="submit">Send Message</Button>
                        </form>
                    </div>
                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {contactData.map((data, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-6"
                                >
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] flex items-center justify-center bg-[#27272c] text-accent rounded-md">
                                        <div className="text-2xl xl:text-3xl">{data.icon}</div>
                                    </div>
                                    <div className="flex-1 ">
                                      <div className="text-white/60">{data.title}</div>
                                      <div className="text-xl">{data.description}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
