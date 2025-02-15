import Header from "../../components/Header"
import About from "./About"
import Contact from "./Contact"
import Courses from "./Courses"
import Experiences from "./Experiences"
import Footer from "./Footer"

import Intro from "./Intro"
import LeftSider from "./LeftSider"
import Projects from "./Projects"


const Home = () => {
  return (
    <div>
     <Header/>
     <div  className='bg-primary px-40 sm:px-5'>
     <Intro/>
     <About/>
     <Experiences/>
     <Projects/>
     <Courses/>
     <Contact/>
     <Footer/>
     <LeftSider/>
     </div>
    </div>
  )
}

export default Home