import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import {
    SiTailwindcss,
    SiMongodb,
    SiExpress,
    SiNextdotjs,
} from "react-icons/si";

const skillsData = {
    title: "My skills",
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quam? Ad similique culpa quis. Sint.",
    skillList: [
        {
            name: "HTML",
            icon: <FaHtml5 />,
        },
        {
            name: "CSS",
            icon: <FaCss3 />,
        },
        {
            name: "JavaScript",
            icon: <FaJs />,
        },
        {
            name: "React",
            icon: <FaReact />,
        },
        {
            name: "Tailwind",
            icon: <SiTailwindcss />,
        },
        {
            name: "MongoDB",
            icon: <SiMongodb />,
        },
        {
            name: "Express",
            icon: <SiExpress />,
        },
        {
            name: "Node.js",
            icon: <FaNodeJs />,
        },
        {
            name: "Next.js",
            icon: <SiNextdotjs />,
        },
    ],
};

export default skillsData;
