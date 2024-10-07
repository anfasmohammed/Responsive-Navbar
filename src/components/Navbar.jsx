import React,{useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
    const[extendNavbar,setExtentNavbar]=useState(false)
  return (
    <div className='bg-gradient-to-r from-gray-700 to-lime-800 text-white h-20 px-6'> 
        <div className='max-w-7xl mx-auto flex justify-between items-center h-20'>
            <h1 className='text-5xl font-semibold'>Logo</h1>
           <div className='flex gap-6'>
           <ul className={`lg:static flex gap-6 text-xl flex-col lg:flex-row absolute top-24 duration-500 ${extendNavbar?"left-10 text-black":"left-[-100px]"} `}>
                <li className='cursor-pointer hover:underline'>About</li>
                <li className='cursor-pointer hover:underline'>Career</li>
                <li className='cursor-pointer hover:underline'>Home</li>
                <li className='cursor-pointer hover:underline'>Login</li>
                <li className='cursor-pointer hover:underline'>Signup</li>
            </ul>
            <div onClick={()=>{setExtentNavbar(open=>!open)}} className='lg:hidden'>
                {
                    extendNavbar?<CloseIcon/>:<MenuIcon/>
                }
            </div>
           </div>
        </div>
    </div>
  )
}

export default Navbar