


import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Education from "./ui/education"
import Skills from "./ui/skills"
import Experience from "./ui/experience"
import Project from "./project";

export function Detail() {
  return (
    <Tabs defaultValue="account" className="w-[full p-3]">
      <TabsList className="grid w-full grid-cols-4 ">
        {/* Tab triger button */}
        <TabsTrigger className="font-bold" value="Education">Education</TabsTrigger>
        <TabsTrigger className="font-bold" value="Skills">Skills</TabsTrigger>
        <TabsTrigger className="font-bold" value="Project">project</TabsTrigger>
        <TabsTrigger className="font-bold" value="Experience">Experience</TabsTrigger>

      </TabsList>
      {/* Tab contect here  */}
      {/* Education */}
      <TabsContent value="Education">
        <Education/>
      </TabsContent>
      
      {/* skills*/}
      <TabsContent value="Skills">
        <Skills/>
      </TabsContent>
      
      {/* Experience */}
      <TabsContent value="Experience">
        <Experience/>
      </TabsContent>
      
      {/* projects */}
      <TabsContent value="Project">
        <Project/>
      </TabsContent>
    </Tabs>
  )
}
