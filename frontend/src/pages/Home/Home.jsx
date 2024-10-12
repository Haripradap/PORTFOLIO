import Header from "../../components/Header"
import About from "./About"
import Experiences from "./Experiences"
import Intro from "./Intro"


const Home = () => {
  return (
    <div>
     <Header/>
     <div  className='bg-primary px-40 sm:px-5'>
     <Intro/>
     <About/>
     <Experiences/>
     </div>
    </div>
  )
}

export default Home