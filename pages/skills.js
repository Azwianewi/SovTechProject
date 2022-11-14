import { FaPhp } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { AiOutlineHtml5} from "react-icons/ai";
import { SiMysql } from "react-icons/si";
import { Element } from "react-scroll";
import {FaCss3Alt} from "react-icons/fa"

function services() {
	return (
		<Element id="skills" name="skills">
			<div className="w-full my-40 h-auto flex flex-col justify-center items-center ">
			<p className="text-sm uppercase text-gray-400">My Skills</p>
				<h1 className="text-indigo-900 text-6xl font-bold text-center">
					My Expertice
				</h1>
				<div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
					<div className="flex  flex-col justify-center items-center">
						{/* first block */}
						<div className="flex justify-center items-center cursor-pointer">
							<FaPhp className="w-10 h-10 bg-yellow-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-indigo-600 font-semibold">
								PHP
							</h2>
							<DiJavascript className="w-10 h-10 bg-red-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-indigo-600 font-semibold">
							     JAVA
							</h2>
							<div className="flex justify-center items-center cursor-pointer">
							<SiMysql className="w-10 h-10 bg-green-500 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-indigo-600 font-semibold ">
								SQL
							</h2>
							<AiOutlineHtml5 className="w-10 h-10 bg-blue-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-indigo-600 font-semibold">
								HTML
							</h2>
							<FaCss3Alt className="w-10 h-10 bg-blue-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-indigo-600 font-semibold">
								CSS
							</h2>
						</div>
					</div>
				</div>
					</div>		
					</div>
		</Element>
	);
}

export default services;
