import React from "react";
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaCloudDownloadAlt, FaInstagramSquare } from "react-icons/fa";
import Link from "next/link";
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"









const Sidebar = () =>{
    return(
        <div className=" h-screen flexflex-col  p-3 ">
            {/* image */}
              <Image src="/images/profile.jpg" alt="profile-pic"width={175} height={100}
              className=" rounded-[50%] h-100 w-150"/>  
            {/* name here */}
            <h1 className="text-2xl text-center font-bold tracking-tight uppercase text-gray-700 underline mt-10">Dua khan</h1>
            <h2 className="text-md text text-center font-semibold tracking-tight text-gray-700 mt-3"><Typewriter
              options={{
                strings: [`Web developer`,`ui/ux Designer`, `Geophysicist`,`Anaesthesia Techncian`],
                autoStart: true,
                loop: true,
              }}
            /></h2>
            <div>
             
              <span className="text-xl font-bold underline text-gray-700 mt-3">About Me</span>
              <p className="mt-3 ">
Hello! I’m Dua Khan, a driven and passionate individual dedicated to achieving excellence in my work.
</p>
</div>
            {/* scial media account */}
            <div className=" grid grid-cols-3 gap-3 mt-7">
            {/* linkdin */}
            <div> <Link href="" target="-blank" className="text-gery-600 hover:text-[#0077B5]">
            <FaLinkedin className="text-3xl " />
            </Link></div>
            {/* youtube */}
            <div> <Link href="a" target="-blank" className="text-gery-600 hover:text-[#FF0000]">
            <FaYoutube className="text-3xl" />
            </Link></div>
            {/* instagram */}
            <div> <Link href="a" target="-blank" className="text-gery-600 hover:text-[#d62976]">
            <FaInstagram className="text-3xl" />
            </Link></div>
            {/* download cv button */}    
            
            <div>
                <Link href={`/new image/new profile.jpg`} className="mt-4" target="-blank">
      <button className="mr-2 h-10 w-40 flex items-center justify-center bg-black text-white rounded hover:bg-black 600 mt-2">
        <FaCloudDownloadAlt className="mr-2" />
        Login with Email
      </button>
      </Link>
    </div>

            </div>
        </div>
    ) 
}
export default Sidebar