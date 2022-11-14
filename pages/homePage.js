import React from 'react'
import Image from 'next/image'
import navLogo1 from "../public/images/navLogo1.png"
import { Element } from "react-scroll";


const homePage = () => {
  return (
    <Element id="home" name="home">
    <div>
        <div className="flex justify-between text-center md:mx-20 md:pt-32 pt-28 ">
            <div className=" w-3/4 h-96 shadow-xl rounded-full relative px-10 hidden md:block">
                <Image
                    src={navLogo1}
                    alt="navLogo1"
                    layout="fill"
                    objectFit="cover"
                    className=" rounded-full cursor-pointer hidden md:block"
                />
            </div>
            <div className="flex flex-col md:ml-20 mx-10 mt-10">
                <h1 className="font-bold text-7xl text-left mb-5">
                    Hello, I am <span className="text-indigo-900">Charity</span>
                </h1>
                <p className="text-left font-normal font mb-5 flex-wrap">
                My name is Azwianewi Charity Madzhie, I am originally from 
                Limpopo from a town called Tshilamba but currently staying in Daveyton.
                I came to Gauteng to further my studies I have completed my National
                Diploma in Information Technology at Vaal University of Technology and graduated 
                in May 2020, it was not an Easy Journey for me.
                As a fresher I am seeking for Software Development position
                in a challenging environment where I can utilize my skills and my career paths.
                </p>
                <a
                    href="#"
                    className="font-semibold text-white md:mt-10 mt-5 pt-5 bg-indigo-900 rounded-md w-60 h-16 text-lg hover:bg-black "
                >
                    See My Portfolio !
                </a>
            </div>
        </div>
    </div>
</Element>

  )
}

export default homePage