

const Intro = () => {
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10">
        <h1 className="text-white">Hi, I am</h1>
        <h1 className="text-7xl sm:text-3xl text-secondary font-semibold">V HARI PRADAP</h1>
        <h1 className="text-5xl sm:text-3xl text-white font-semibold">MERN/PERN/NEXTJS developer</h1>

        <p className="text-white w-2/3"> Enthusiastic and dedicated MERN stack developer. Passionate about web
           development with a focus on building efficient, scalable,
            and user-friendly applications. Committed to continual
             learning and growth, aiming to contribute to innovative
            projects and solve real-world problems </p>
            <button className=" border-2 border-tertiary text-tertiary px-10 py-3 rounded-lg">Get Started</button>
    </div>
  )
}

export default Intro