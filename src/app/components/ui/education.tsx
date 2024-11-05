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


const Education =()=>{
    return(
        <Card data-aos="zoom-in-up" className="h-[85vh] overflow-scroll">
          <CardHeader>
            <CardTitle text-2xl font-semibold tracking-tight>Education</CardTitle>
           
          </CardHeader>
          <CardContent className="space-y-2">
          <section className="text-white body-font overflow-hidden bg-black">
  <div className="container px-5 py-24 mx-auto">
    <div className="-my-8 divide-y-2 divide-gray-100">
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className=" justify-center md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-300 uppercase">
            BA Bachlar
          </span>
          <span className="mt-1 text-gray-500 text-sm">15 march 2024</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-400 title-font mb-2">
            Karachi University In Karachi
          </h2>
          <p className="leading-relaxed">
          Broad Education: A B.A. degree covers a wide range of subjects, such as literature, history, philosophy, sociology, and languages, providing students with a broad foundation of knowledge.

 and Analytical Skills Development: Throughout the degree, students are trained to analyze various topics and think critically, which enhances their analytical and critical thinking abilities.


and Creativity: A Bachelor of Arts encourages creativity, which is beneficial in fields like media, writing, education, and other creative industries.


          </p>
          
        </div>
      </div>
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="justify-center md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-300 uppercase justify-center" >
            Anaesthesia Tecnhician
          </span>
          <span className="mt-1 text-gray-500 text-sm">12 Jun 2023</span>
        </div>
        <div className="md:flex-grow">
          <h2 className=" text-2xl font-medium text-gray-400 title-font md-2">
         Sindh Goverment Hospital karachi
          </h2>
          <p className="leading-relaxed">
          Anesthesia technology is a specialized field within healthcare that focuses on assisting anesthesiologists and ensuring safe and effective administration of anesthesia. Here are some important aspects of anesthesia technology:
 Patient Safety: Anesthesia technicians play a crucial role in patient safety by preparing, maintaining, and troubleshooting anesthesia equipment and monitoring devices. Their work ensures that anesthesia is delivered accurately and safely.
 Equipment Management: They handle and maintain anesthesia machines, monitors, ventilators, and other vital equipment, ensuring they are functioning correctly and prepared for use during surgeries or procedures.

          </p>
        </div>
      </div>
      <div className="py-8 flex flex-wrap md:flex-nowrap ">
        <div className=" justify-center md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-200  ">
            TEACHER
          </span>
          <span className="text-sm text-gray-500">18 oct 2022</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-400 title-font mb-2">
            Shaheen Educational World School
          </h2>
          <p className="leading-relaxed">
          A good teacher possesses several qualities that make them an effective educator. Here are some important characteristics:
 Strong Communication Skills - A good teacher should be able to convey their ideas clearly and effectively. Their way of explaining concepts should make it easy for students to understand, and they should encourage students to ask questions comfortably.
 Patience and Tolerance - Each student has a unique pace and style of learning. A teacher should be patient and understanding, answering questions calmly and teaching in a way that suits the student’s comprehension level.

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
export default Education
