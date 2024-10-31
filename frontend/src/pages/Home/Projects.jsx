import { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { projects } from "../../resources/projects";

const Projects = () => {

  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div>
        <SectionTitle title="Projects"/>
        <div className="flex py-10 gap-10 sm:flex-col">
            <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/4 sm:flex-row sm:overflow-x-scroll sm:w-full">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        onClick={() => {
                            setSelectedItem(idx);
                        }}
                        className="cursor-pointer"
                    >
                        <h1
                            className={`text-xl px-5 ${
                                selectedItem === idx
                                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a34] py-3 sm:"
                                    : "text-white"
                            }`}
                        >
                            {project.title}
                        </h1>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-center gap-10">
                {selectedItem !== null ? (
                    <>
                        {projects[selectedItem].image && (
                            <img 
                                src={projects[selectedItem].image} 
                                alt="project image" 
                                className="h-60 w-72" 
                            />
                        )}
                        <div className="flex flex-col gap-5">
                            <h1 className="text-secondary text-2xl">
                                {projects[selectedItem].title}
                            </h1>
                            <p className="text-white">
                                {projects[selectedItem].description}
                            </p>
                            <p className="text-white">
                                lorem ,jhvac ,jhgfau ,jwaf,  ,jagryjbh yfgrb kerfgeyul jhgvkugerrbvjhb vjhkuvybe ,jhvruyvjba
                            </p>
                        </div>
                    </>
                ) : (
                    <h1 className="text-secondary text-2xl">Select a project to view details</h1>
                )}
            </div>
        </div>
    </div>
  );
}

export default Projects;
