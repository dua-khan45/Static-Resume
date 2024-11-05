import React from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { University } from "lucide-react"
import Image from "next/image";
  //my project here
  let Projects =()=> {
    let Project=[
        {
            Uniname: "karachi univerity karachi location",
            Date:  "15 mach 2024",
            Field: " B A Bachlar",
            Details: "Broad Education: A B.A. degree covers a wide range of subjects, such as literature, history, philosophy, sociology, and languages, providing students with a broad foundation of knowledge.and Analytical Skills Development: Throughout the degree, students are trained to analyze various topics and think critically, which enhances their analytical and critical thinking abilities.and Creativity: A Bachelor of Arts encourages creativity, which is beneficial in fields like media, writing, education, and other creative industries.",
        }
    ]
  }


const project =()=>{
    return(
        <Card data-aos="zoom-in-up" className="h-[85vh] overflow-scroll">
          <CardHeader>
            <CardTitle text-2xl font-semibold tracking-tight>Projects</CardTitle>
           
          </CardHeader>
          <CardContent className="space-y-2">
          <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        Project
      </h1>
      
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          {/*  */}
           <Image
            alt="gallery"
            height={300}
            width={400}
            className="absolute inset-0  object-cover object-center"
            src="/images/fb.png"></Image>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
            MY PROJECT
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              FaceBook Clone page 
            </h1>
            <p className="leading-relaxed">
             This facebook page clone i use this next.js and tailwind css.
            </p>
           
          </div>
        </div>
      </div>
     
    </div>
  </div>
</section>

          <section className="text-gray-600 body-font overflow-hidden"></section>
  <div className="container px-5 py-24 mx-auto">
    <div className="-my-8 divide-y-2 divide-gray-100">
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className=" justify-center md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
         
          
        </div>
      
          
          
        </div>
      </div>

        </div>
        
                
   

          </CardContent>
          
        
          </Card>
    )
}
export default project;
