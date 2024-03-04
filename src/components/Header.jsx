import { useState } from "react"

function Header(){
  const [isOpen, setOpen] = useState(false)
  const handleOpen = ()=>{
    setOpen(true)
  }
  
  const handleClose = ()=>{
    setOpen(false)
  }
 

    return <div>
    <div className='bg-green-700 p-2 flex justify-between  text-white'>  
      <h1 className='text-5xl  text-white '>Image</h1>

      <i onClick={handleOpen } style={{display : isOpen == true ? "none":""}} class="fa-solid fa-bars text-5xl sm:hidden"></i>

      <i onClick={handleClose} style={{display: isOpen == true ? "block": "none"}} class="fa-solid fa-xmark  text-5xl sm:hidden"></i>

      
      <ul className="gap-16 text-3xl sm:flex hidden">
        <li>Home</li>
        <li>Service</li>
        <li>Blogs</li>
        <li>Contact Us</li>
      </ul>
     

      
  
  
    </div>
    <div>
      <ul style={{display: isOpen == true ? "flex" : "none"}}  className=" bg-orange-500 text-white flex-col space-y-5 gap-16 text-3xl  hidden">
        <li>Home</li>
        <li>Service</li>
        <li>Blogs</li>
        <li>Contact Us</li>
      </ul>
      </div>
    </div>
  
  
  }
  export default Header 