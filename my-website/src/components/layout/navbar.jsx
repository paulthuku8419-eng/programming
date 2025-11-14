import React,{useState} from 'react'
import { SlMenu } from "react-icons/sl";
function Navbar() {
    const [nav, setNav] = useState(false);
    const handleNav =() =>{
        setNav(!nav)
    }
  return (
    <nav className="bg-black-600 flex justify-between items-center h-24 max-w-[1240px] mx-auto p-4  text-white p-4 w-full fixed top-0 left-0 z-20">
           Navbar
          <ul className='hidden md:flex'>
              <li className='p-4'>Home</li>
              <li className='p-4'>About</li>
              <li className='p-4'>Contact</li>
              <li className='p-4'>Services</li>
          </ul>

          <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <SlMenu /> : <span className='text-2xl'>&times;</span>}
          </div>

          {nav && (
            <div className='fixed left-0 top-0 w-[60%] h-full bg-black ease-in-out duration-500'>
              <ul className='pt-24 uppercase md:hidden cursor-pointer'>
                <li className='p-4 border-b border-b-gray-600'>Home</li>
                <li className='p-4 border-b border-b-gray-600'>About</li>
                <li className='p-4 border-b border-b-gray-600'>Contact</li>
                <li className='p-4'>Services</li>

              </ul>
            </div>
          )}
    </nav>

  );
}

export default Navbar;
