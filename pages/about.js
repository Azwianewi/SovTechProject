import { Element } from "react-scroll"

const about = () => {
  return (
    <Element id="about" name="about">
 <div className="flex flex-col md:ml-20 mx-10 mt-10">
                <h1 className="font-bold text-7xl text-left mb-5">
                Why i want to be a <span className="text-indigo-900">Developer at SovTech</span>
                </h1>
        
				<p className="text-left font-normal font mb-5 flex-wrap">
                I want to be a software developer because designing computer programs lets me use my creative and problem-solving skills.
                I am highly self-motivated and self-managed, 
                I have strong organizational skills, time and priority management, able to meet all deadlines and
                I have the capability of making quick decisions, high level of integrity and discretion, ethical
                and professional in person presentation, performance and conduct.  
				</p>
	</div>
    </Element>
  )
}

export default about