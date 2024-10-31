import SectionTitle from "../../components/SectionTitle"


const Contact = () => {
    const user = {
        name: "Hari pradap V",
        email: "haripradap03@gmail.com",
        age: 20,
        gender: "Male",
        mobile: 9566631735,
        country: "India",
    }
  return (
    <div>
    <SectionTitle title="Say Hello "/>
<div className=" flex sm:flex-col items-center justify-between">
   <div className="flex flex-col gap-1">
   {/* <h1 className=" ml-24 text-tertiary">Dont bother about the contact just a developer JSON</h1>
   <div className=" w-60 h-[1px] bg-tertiary ml-24"></div>
   <br/> */}
   <p className="text-tertiary">{"{"}</p>
   
    {Object.keys(user).map((key,i) => (
        <p  key={i} className=" ml-5 text-tertiary">
            <span className=" text-tertiary">{key} :</span> <span className=" text-tertiary">{user[key]}</span>
        </p>
    ))}
    <p className="text-tertiary">{"}"}</p>
   </div>
   <div className=" h-[400px] ">

    <dotlottie-player src="https://lottie.host/36d06e85-637e-49a7-bdff-c0b0eaf5d9a8/MmrjmGvOpZ.json" background="transparent" speed="1"  autoplay></dotlottie-player>
</div>
</div>

    </div>
  )
}

export default Contact