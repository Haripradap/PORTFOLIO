import 'remixicon/fonts/remixicon.css'

const LeftSider = () => {
  return (
    <div className=' fixed left-0 bottom-0 px-10  sm:static'>
    <div className=' flex flex-col items-center '>
    <div className="flex flex-col gap-3 sm:flex-row">
    <i className="ri-instagram-line text-gray-600 ">
       
    </i>
    <i className="ri-github-fill  text-gray-600 "></i>
    <i className="ri-mail-line  text-gray-600 "></i>
    <a href='https://www.linkedin.com/in/hari-pradap-490663260/'><i className="ri-linkedin-box-fill  text-gray-600 "></i></a>
    
    </div>
    <div className=' w-[1px] h-32 bg-[#125f63] sm:hidden'>

    </div>
    </div>
    </div>
  )
}

export default LeftSider