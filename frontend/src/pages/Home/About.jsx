import SectionTitle from "../../components/SectionTitle"


const About = () => {

    const skills = [
        "Javascript",
        "java",
        "react",
        "nodejs",
        "expressjs",
        "Postgresql",
        "mongodb",
        "nextjs"
    ]

  return (
    <div>
        <SectionTitle title="About" />
        <div className=" flex w-full items-center sm:flex-col">
            <div className=" h-[70vh] w-1/2 sm:w-full">
            <dotlottie-player src="https://lottie.host/aff884f2-66b2-4185-a166-d7e8c9d9edab/ZQbJZL1M9K.json" background="transparent" speed="1"  autoplay></dotlottie-player> 
            {/* <dotlottie-player src="https://lottie.host/42722a5c-44f6-4aec-8b4a-bf51aa3839d5/vp1vwYM6bo.json" background="transparent" speed="1"  autoplay></dotlottie-player> */}
            </div>
            <div className=" flex flex-col gap-5 w-1/2 sm:w-full">
                <p className=" text-white"> Enthusiastic and dedicated MERN stack developer. Passionate about web development with a focus on building efficient, scalable, and user-friendly applications. Committed to continual learning and growth, aiming to contribute to innovative projects and solve real-world problems</p>
                <p className=" text-white">Enthusiastic and dedicated MERN stack developer. Passionate about web development with a focus on building efficient, scalable, and user-friendly applications. Committed to continual learning and growth, aiming to contribute to innovative projects and solve real-world problems</p>
            </div>
        </div>
        <div className="py-5">
            <h1 className=" text-tertiary text-xl ">Here are the few technologies i've been working with:</h1>
            <h1>
                <div className=" flex flex-wrap gap-10 mt-5">
                {skills.map((skill,idx) => (
                    <div key={idx} className="border border-tertiary py-3 px-10 rounded-lg">
                        <h1 className=" text-tertiary">{skill} </h1>
                    </div>
                ))}
                </div>
            </h1>
        </div>
    </div>
  )
}

export default About