import { Button } from "../components/ui/button";
import Photo from "../components/Photo";
import Stats from "../components/Stats";
import { FiDownload } from "react-icons/fi";

// Components
import Socials from "../components/Socials";

const Home = () => {
    return (
        <section className="h-full">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    {/* text */}
                    <div className="text-center xl:text-left order-2 xl:order-none">
                        <span className="text-xl">Backend Developer</span>
                        <h1 className="h1 mb-6">
                            Hello, I'm <br />{" "}
                            <span className="text-accent">Harsh Kumar</span>
                        </h1>
                        {/* text */}
                        <p className="max-w-[500px] mb-9 text-white/80">
                            A backend developer with 2 years of experience
                            specializing in Node.js, Python, and backend
                            technologies. Passionate about building innovative
                            solutions and solving complex problems with a focus
                            on scalability and performance. Eager to learn new
                            technologies and deliver efficient, high-quality
                            applications.
                        </p>
                        {/* button and social */}
                        <div className="flex flex-col xl:flex-row items-center gap-8">
                            <Button
                                variant="outline"
                                size="lg"
                                className="uppercase flex items-center gap-2"
                            >
                                <span>Download Resume</span>
                                <FiDownload className="ml-2" />
                            </Button>
                            <div className="mb-8 xl:mb-0">
                                <Socials
                                    containerStyles="flex gap-6"
                                    iconStyles="w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-primary hover:transition-all duration-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* photo */}
                    <div className="order-1 xl:order-none pb-8 xl:mb-0">
                        <Photo />
                    </div>
                </div>
            </div>
            <Stats />
        </section>
    );
};

export default Home;
