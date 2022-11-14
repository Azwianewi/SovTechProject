import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Element} from 'react-scroll';

const resume = () => {
  return (
    <Element id="resume" name="resume">
         <div className="w-full my-40 h-auto flex flex-col justify-center items-center ">
        <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className="text-indigo-900 text-6xl font-bold text-center">Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className="text-indigo-900 text-6xl font-bold text-center">Azwianewi Charity Madzhie</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/azwianewi-charity-madzhie-b9b9b1123'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/Azwianewi/SovTechProject.git'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className="flex flex-col md:ml-20 mx-10 mt-10">
          <div className='hidden sm:block'>
            <p className="text-left font-normal font mb-5 flex-wrap">
              Good interpersonal skills <span className='px-1'>|</span> Competent in Microsoft Word,Excel, Powerpoint and Outlook{' '}
              <span className='px-1'>|</span> Time Management
            </p>
          </div>
          <div className='block sm:hidden'>
            <p className="text-left font-normal font mb-5 flex-wrap">Good understaning of system and operations</p>
            <p className="text-left font-normal font mb-5 flex-wrap">Software Developer</p>
            <p className="text-left font-normal font mb-5 flex-wrap">Complex Problem Solving</p>
          </div>
        </div>
        <p>
         
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Technical Skills</h5>
          <p className='py-2'>
          <span className='px-2'></span> PHP
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>SQL
          </p>
        <h5 className='text-center underline text-[18px] py-4'>
          Education
        </h5>
        {/* Teartiary Qualifications */}
        <div className='py-6'>
          <p className="text-left font-normal font mb-5 flex-wrap">
            <span className='font-bold italic'>
            Vaal University of Technology
            </span>
            <span className='px-2'>|National Diploma in Information Technology</span>
            <span className='px-2'>|2016-2019</span>
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li className="text-left font-normal font mb-5 flex-wrap">
               Software Development Ado.net, vb.net, Java and JavaScript.
            </li>
            <li className="text-left font-normal font mb-5 flex-wrap">
              Web management Php, HTML, and CSS
            </li>
            <li className="text-left font-normal font mb-5 flex-wrap">
              Business Analysts PL/Sql, SQL, Oracle
            </li>
            <li className="text-left font-normal font mb-5 flex-wrap">
            System Software Installation of windows Server R2 2012, CCNA1 and CCNA2 and Introduction to Routing and Switching
            </li>
            <li className="text-left font-normal font mb-5 flex-wrap">
            Information Systems
            </li>
          </ul>
          <h5 className='text-center underline text-[18px] py-4'>Certificates</h5>
          <p className="text-left font-normal font mb-5 flex-wrap">
            <span className='font-bold italic'>
               National Certificate: End-user Cloud Computing L3
            </span>
            <span className='px-2'>|Proserv SA</span>
            </p>
            <p className="text-left font-normal font mb-5 flex-wrap">
            <span className='font-bold italic'>
               National Certificate: Management L3
            </span>
            <span className='px-2'>|Proserv SA</span>
            </p>
            <p className="text-left font-normal font mb-5 flex-wrap">
            <span className='font-bold italic'>
               CompTIA+ A+ Certificate
            </span>
            <span className='px-2'>|Cisco Networking Academy</span>
            </p>

          </div>
        </div>
        </div>
        </div>
    </Element>
  );
};

export default resume;
