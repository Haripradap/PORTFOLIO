import { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { experiences } from "../../resources/experiences";

const Experiences = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <div>
            <SectionTitle title="Experience" />
            <div className="flex py-10 gap-10 sm:flex-col">
                <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/4 sm:flex-row sm:overflow-x-scroll sm:w-full">
                    {experiences.map((exp, idx) => (
                        <div
                            key={idx}
                            onClick={() => {
                                setSelectedItem(idx);
                            }}
                            className="cursor-pointer"
                        >
                            <h1
                                className={`text-xl px-10 ${
                                    selectedItem === idx
                                        ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a34] py-3 sm:"
                                        : "text-white"
                                }`}
                            >
                                {exp.period}
                            </h1>
                        </div>
                    ))}
                </div>
                <div>
                    {selectedItem !== null ? (<>
                        <h1 className="text-secondary text-2xl">
                            {experiences[selectedItem].title}
                        </h1>
                        <h1 className="text-secondary text-2xl">
                            {experiences[selectedItem].company}
                        </h1>
                        <p className=" text-white">lorem ,jhvac ,jhgfau ,jwaf,  ,jagryjbh yfgrb kerfgeyul jhgvkugerrbvjhb vjhkuvybe ,jhvruyvjba</p>
                        </>
                    ) : (
                        <h1 className="text-secondary text-2xl">Select an experience to view details</h1>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Experiences;
