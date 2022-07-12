
import React from "react";
import Navbar from "../components/HomeNavbar";
import AllPosts from "../components/allposts";


export default function Home() {
    
  return (
    <>
    <div className=''
    style={{
        backgroundImage: `url('/images/pureblack.jpeg')`,
        
        }}
    >
        <Navbar />
        <section className=" mt-16 flex flex-col-reverse">
            <AllPosts />
        
         </section>
         
    </div>
    </>
  )

}
