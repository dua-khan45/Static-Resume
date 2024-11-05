import React from "react"
// import { FaCheckDouble } from "react-icons/fa";
// import { FaCheckSquare } from "react-icons/fa";
// import { FaUserCheck } from "react-icons/fa6";
import { PiFlagCheckeredFill } from "react-icons/pi";
import{
     Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { TiTick } from "react-icons/ti";
import { University } from "lucide-react"
  //my education here
  let education =()=> {
    let education=[
        {
            Uniname: "karachi univerity karachi location",
            Date:  "15 mach 2024",
            Field: " B A Bachlar",
            Details: "Broad Education: A B.A. degree covers a wide range of subjects, such as literature, history, philosophy, sociology, and languages, providing students with a broad foundation of knowledge.and Analytical Skills Development: Throughout the degree, students are trained to analyze various topics and think critically, which enhances their analytical and critical thinking abilities.and Creativity: A Bachelor of Arts encourages creativity, which is beneficial in fields like media, writing, education, and other creative industries.",
        }
    ]
  }


const Skills =()=>{
    return(
        // tittil
        <Card data-aos="zoom-in-up" className="h-[85vh] overflow-scroll">
            <section className="text-gray-100 body-font bg-gray-800">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-indigo-500 tracking-widest font-bold title-font mb-1">
              Skills
            </h2>
            <h1 className="sm:text-3xl text-2xl font-extrabold title-font text-gray-200">
              My Skills
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* Skills  HTML*/}
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <PiFlagCheckeredFill className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-200 text-lg title-font font-extrabold">
                    HTML
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-8 w-full bg-gray-300 rounded-full">
                    <div className="absolute inset-3 bg-indigo-500 rounded-full"></div>
                  </div>
                  <p className="text-indigo-500 font-bold text-right">100%</p>
                </div>
              </div>
            </div>
             {/* Skills CSS*/}
             <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <PiFlagCheckeredFill className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-200 text-lg title-font font-extrabold">
                    CSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-8 w-full bg-gray-300 rounded-full">
                    <div className="absolute inset-3 bg-indigo-500 rounded-full w-[70%]"></div>
                    </div>
                  <p className="text-indigo-500 font-bold text-right">70%</p>
                </div>
              </div>
            </div>
             {/* Skills JS/TS*/}
             <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <PiFlagCheckeredFill className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-200 text-lg title-font font-extrabold">
                    JavaScript/TypeScript
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-8 w-full bg-gray-300 rounded-full">
                    <div className="absolute inset-3 bg-indigo-500 rounded-full w-[50%]"></div>
                  </div>
                  <p className="text-indigo-500 font-bold text-right">50%</p>
                </div>
              </div>
            </div>
             {/* Skills REACT.JS*/}
             <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <PiFlagCheckeredFill className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-200 text-lg title-font font-extrabold">
                    React.JS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-8 w-full bg-gray-300 rounded-full">
                    <div className="absolute inset-3 bg-indigo-500 rounded-full w-[60%]"></div>
                  </div>
                  <p className="text-indigo-500 font-bold text-right">60%</p>
                </div>
              </div>
            </div>
            {/* Skills NEXT.JS*/}
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <PiFlagCheckeredFill className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-200 text-lg title-font font-extrabold">
                    Next.js
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-8 w-full bg-gray-300 rounded-full">
                    <div className="absolute inset-3 bg-indigo-500 rounded-full w-[80%]"></div>
                  </div>
                  <p className="text-indigo-500 font-bold text-right">80%</p>
                </div>
              </div>
            </div>
             {/* Skills TAILWIND CSS*/}
             <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <PiFlagCheckeredFill className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-200 text-lg title-font font-extrabold">
                    Tailwind CSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-8 w-full bg-gray-300 rounded-full">
                    <div className="absolute inset-3 bg-indigo-500 rounded-full w-[75%]"></div>
                  </div>
                  <p className="text-indigo-500 font-bold text-right">75%</p>
                </div>
              </div>
            </div>
            {/* Skills CANVA*/}
            <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <PiFlagCheckeredFill className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-200 text-lg title-font font-extrabold">
                    Canva
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-8 w-full bg-gray-300 rounded-full">
                    <div className="absolute inset-3 bg-indigo-500 rounded-full w-[55%]"></div>
                  </div>
                  <p className="text-indigo-500 font-bold text-right">55%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        
        
          </Card>
    )
}
export default Skills
