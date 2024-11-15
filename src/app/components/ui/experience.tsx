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


const Experience =()=>{
    return(
        <Card data-aos="zoom-in-up" className="h-[85vh] overflow-scroll">
          <CardHeader>
            <CardTitle text-2xl font-semibold tracking-tight>Experience</CardTitle>
           
          </CardHeader>
          <CardContent className="space-y-2 bg-black">
          <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="-my-8 divide-y-2 divide-gray-100">
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className=" justify-center md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-white underline ">
            Anaesthesia Technician
          </span>
          <span className="mt-1 text-gray-500 text-sm"></span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-white title-font mb-2 underline">
            Sindh Goverment Hospital Karachi
          </h2>
          <p className="leading-relaxed text-white">
          (2022-2023)<br></br>
          (  one year  )

          </p>
          
        </div>
      </div>
     
      <div className="py-8 flex flex-wrap md:flex-nowrap ">
        <div className=" justify-center md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-white underline  ">
            Teaching
          </span>
          <span className="text-sm text-gray-500"></span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-white title-font mb-2 underline ">
            Shaheen Educational World School
          </h2>
          <p className="leading-relaxed text-white">
         (2018-2022)<br></br>
         (4 years)
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

          </CardContent>
          
        
          </Card>
    )
}
export default Experience
