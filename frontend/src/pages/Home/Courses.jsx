import { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { courses } from "../../resources/courses.js";

const Courses = () => {

  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div>
        <SectionTitle title="Courses"/>
        <div className="flex py-10 gap-10 sm:flex-col">
            <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/4 sm:flex-row sm:overflow-x-scroll sm:w-full">
                {courses.map((course, idx) => (
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
                            {course.title}
                        </h1>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-center gap-10">
                {selectedItem !== null ? (
                    <>
                        
                        <div className="flex flex-col gap-5">
                            <h1 className="text-secondary text-2xl">
                                {courses[selectedItem].title}
                            </h1>
                            
                            <p className="text-white">
                                lorem ,jhvac ,jhgfau ,jwaf,  ,jagryjbh yfgrb kerfgeyul jhgvkugerrbvjhb vjhkuvybe ,jhvruyvjba
                            </p>
                            
                        </div>
                        {courses[selectedItem].image && (
                            <img 
                                src={courses[selectedItem].image} 
                                alt="project image" 
                                className="h-52 w-80" 
                            />
                        )}
                    </>
                ) : (
                    <h1 className="text-secondary text-2xl">Select a course to view details</h1>
                )}
            </div>
        </div>
    </div>
  );
}

export default Courses;
