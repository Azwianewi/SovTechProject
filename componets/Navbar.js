import React, { useState } from "react";
import {Transition} from "@headlessui/react";
import {Link} from "react-scroll";
import Image from "next/image";



function Navbar() {
  const [isOpen, setIsOpen]=useState(false);
return (
    <nav>
    <div className='fixed z-20  bg-white w-full '>
        <div className='w-full'>
          <div className='flex items-center h-20 w-full'>
            <div className='flex items-center sm:mx-10 md:mx-20 justify-between w-full'>
            <div className='flex  justify-center items-center flex-shrink-0'>
            <h1 className='font-bold text-xl cursor-pointer'>
                    Welcome<span className='text-blue-600'></span>
                </h1>
              </div>
              <div className='hidden md:block'>
                 <div className='ml-4 flex items-baseline space-x-2'>
                <Link 
                      activeClass='Home' 
                      to="home" 
                      smooth={true} 
                      offset={50} 
                      duration={500} 
                      className="cursor-pointer hover:text-blue-600 px-3 py-2 text-md"
                > 
                      <h1 className='font-bold text-xl cursor-pointer'>
                    Home<span className='text-blue-600'>&nbsp;&nbsp;</span>
                </h1>
                </Link>
                <Link
                      activeClass='Skills' 
                      to="skills"
                      smooth={true} 
                      offset={50} 
                      duration={500} 
                      className="cursor-pointer hover:text-blue-600 px-3 py-2 text-md"
                >
                        <h1 className='font-bold text-xl cursor-pointer'>
                     About<span className='text-blue-600'>&nbsp;&nbsp;</span>
                </h1>
                </Link>
                <Link 
                      activeClass='About' 
                      to="about" 
                      smooth={true} 
                      offset={50} 
                      duration={500} 
                      className="cursor-pointer hover:text-blue-600 px-3 py-2 text-md"
                >
              <h1 className='font-bold text-xl cursor-pointer'>
                  skills <span className='text-blue-600'>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </h1>
                </Link>
                <Link activeClass='Resume' 
                      to="resume" 
                      smooth={true} 
                      offset={50}
                       duration={500} 
                       className="cursor-pointer  hover:text-blue-600 px-3 py-2 text-md"
                 >
                                                <h1 className='font-bold text-xl cursor-pointer'>
                    Resume<span className='text-blue-600'>&nbsp;&nbsp;</span>
                </h1>
                 </Link>
                 <Link activeClass='Contact' 
                      to="contact" 
                      smooth={true} 
                      offset={50} 
                      duration={500} 
                      className="cursor-pointer hover:text-blue-600 px-3 py-2 text-md"
                >     
                   <h1 className='font-bold text-xl cursor-pointer'>
                    contact<span className='text-blue-600'>&nbsp;&nbsp;</span>
                </h1>
                </Link>
                 </div>
              </div>

            </div>
            <div className="mr-14 flex md:hidden">

              <button
               onClick={() => setIsOpen(!isOpen)} 
               type="button" 
               className="bg-blue-600 inline-flex iteams-center justify-center p-2 rounded-md text-white hover:bg-black focus:outline-none focus:ring-white"
               aria-controls="mobile-menu"
                aria-expanded="false">
                  <span className="sr-only"> 
                  Menu
                  </span>
                  {/*menu functionionality*/}
                  {!isOpen ? (
                  <svg className="block h-6 w-6" 
                  xmlns="https://www.w3.org/200/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stoke="currentColor" 
                  aria-hidden="true"
                  >
                  <path 
                  strokeLinecap="round"
                   strokeLinejoin="round"
                    strokeWidth="2" 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                  </svg>
                  ) :(
                    <svg  className="block h-6 w-6" 
                    xmlns="https://www.w3.org/200/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stoke="currentColor" 
                    aria-hidden="true"
                    >
                    <path 
                    strokeLinecap="round"
                     strokeLinejoin="round"
                      strokeWidth="2" 
                      d="M6 18L18 6M6 6l12 12" 
                    />
                    </svg>
                  )}
              </button>
            </div>
          </div>
        </div>
        {/*small size: mobile*/}
        <Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
          	{(ref) => (
						<div className="md:hidden" id="mobile-menu">
							<div
								ref={ref}
								className="bg-white mx-4 mr-20 pt-4 pb-4 space-y-1"
							>
								<Link
									href="/home"
									activeClass="home"
									to="home"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Home
								</Link>
								<Link
									href="/about"
									activeClass="about"
									to="about"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									About
								</Link>

								<Link
									href="/skills"
									activeClass="skills"
									to="skills"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Skills
								</Link>
								<Link
									href="/resume"
									activeClass="resume"
									to="Resume"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Resume
								</Link>

								<Link
									href="/contact"
									activeClass="contact"
									to="contact"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Contact
								</Link>

							</div>
						</div>
					)}
				</Transition>
        </div>
    </nav>
   
  )
   }
   export default Navbar;