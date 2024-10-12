import { useState } from "react"
import SectionTitle from "../../components/SectionTitle"
import { experiences } from "../../resources/experiences"

const Experiences = () => {
    const [selectedItem,setSelectedItem] = useState(null);
  return (
    <div>
      <SectionTitle title="Experience"/>
      <div className="flex py-10 ">
        <div className=" flex flex-col gap-5">
            {experiences.map((exp,idx)=>(
                <div key={idx} onClick={() => {
                    setSelectedItem(idx);
                }} className=" cursor-pointer">
                    <h1 className= {`text-xl ${selectedItem === idx ? 'text-tertiary border-tertiary':'text-white' }`}>{exp.period} </h1>
                </div>
            ))}
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Experiences