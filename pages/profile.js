import Link from "next/link"
import React from "react";

import ProfileNavbar from "../components/ProfileNavbar";
import PostById from '../components/PostById';
import ProfileById from '../components/ProfileById';

export default function Profile() {
    
    return (
    <div className=""
    style={{
        backgroundImage: `url('/images/pureblack.jpeg')`,
         
        }}>
        
            <ProfileNavbar />
        
            <div className="container mx-auto md:px-20">
               <div className="image flex justify-center contents-center">
                   <img className="rounded-full mt-12" src={"/images/girl.jpeg"}width={500}height={500}/>
                </div>
                <div className="flex justify-center contents-center mt-4 ">
               
                                <h1 className="md:text-3xl sm:text-sm text-orange-600 hover:text-orange-800">{localStorage.getItem('user')}</h1>  
               
                 </div>
                 <div className="text-white flex justify-center contents-center mt-12  ">
                                <ul className="flex flex-row md:space-x-8 space-x-2">
                                    <Link  href="/profile"><a className='text-blue '>Posts</a></Link>
                                    
                                        <button className="dropbtn">About</button>
                                                     
                                    
                                    <Link  href=""><a className='text-white hover:bg-white hover:text-black px-1 rounded-xl text-center'>Frnds</a></Link>
                                    <Link  href=""><a className='text-white hover:bg-white hover:text-black px-1 rounded-xl text-center'>Photos</a></Link>
                                    <Link  href=""><a className='text-white hover:bg-white hover:text-black px-1 rounded-xl text-center'>videos</a></Link>
                                    <Link  href=""><a className='text-white hover:bg-white hover:text-black px-1 rounded-xl text-center'>More</a></Link>
                                </ul>
                            </div>
                
                 <div className="md:flex justify-center contents-center ">
                           
                        <div className="md:float-root mt-16">
                            <div className=" md:space-x-20  md:float-right">
                                  <h1 className=" text-blue-600 text-3xl font-weight-800 text-center">Posts</h1>
                                  <section className='flex flex-col-reverse'>  
                                  <PostById />  
                                 
                                 </section>         
                            </div>
                            <div className="md:float-left p-4">
                              <ProfileById />
                                      
                             </div>
                        </div>
                    </div>

            </div> 
        
    </div> 
      
      
    )
  }
 