import Link from "next/link"
import Image from 'next/image'
import axios from "axios"
import React, { useEffect, useState } from "react";
import {useRouter} from "next/router";



export default function ViewProfile() {
    const router = useRouter()
    const { id } = router.query
    console.log(id);
    
    const [posts, setPosts] = useState([]);
    const [profiles, setProfiles] = useState([]);
     //loggedin user posts

        const fetchData = async () => {
          const response1 = await axios.get(`http://localhost/api/loginuser/${id}`,{
            headers: {
                Authorization: 'Bearer' + ' ' + localStorage.getItem('token')
                }
          });
          console.log(response1.data);
          setPosts(response1.data);
          
        };


        // loggedin user profile
        const fetchAbout = async () => {
            const response2 = await axios.get(`http://localhost/api/loginprofile/${id}`,{
              headers: {
                  Authorization: 'Bearer' + ' ' + localStorage.getItem('token')
                  }
            });
            console.log(response2.data);
            setProfiles(response2.data);
        
          };

        

        useEffect(() => {
            
                fetchData();
                fetchAbout();
              
        }, []);
        const orig = 'http://localhost/images/'
 
        return(
<div className=""
style={{
  backgroundImage: `url('/images/post.jpg')`,
  
  }}
>
<div className="flex justify-center items-center">
<div className="float-root">
              <div className="md:float-left ">
              <h1 className=" text-blue-400 text-3xl font-weight-800 text-center">About</h1>
              <div>
                          { profiles.map((profile) => (
                              <div > 
                                     <div className="flex flex-col space-y-4 bg-white rounded-xl mt-10 ">                       <div className="">
                                                                <div className="child"><img className="" src="/images/work4.png" width={30} height={30}/></div> 
                                                                <div className="child">: {profile.work}</div>
                                                              </div>
                                                              <div className="">
                                                                <div className="child"><img className="" src="/images/study1.png" width={30} height={30}/></div> 
                                                                <div className="child">: {profile.study}</div>
                                                              </div>
                                                              <div className="">
                                                                <div className="child"><img className="" src="/images/college.png" width={30} height={30}/></div> 
                                                                <div className="child">: {profile.college}</div>
                                                              </div>
                                                              <div className="">
                                                                <div className="child"><img className="" src="/images/location.png" width={30} height={30}/></div> 
                                                                <div className="child">: {profile.currentlocation}</div>
                                                              </div>
                                                              <div className="">
                                                                <div className="child"><img className="" src="/images/location.png" width={30} height={30}/></div> 
                                                                <div className="child">: {profile.permanentlocation}</div>
                                                              </div>
                                                              <div className="">
                                                                <div className="child"><img className="" src="/images/join.svg" width={30} height={30}/></div> 
                                                                <div className="child">: {profile.join}</div>
                                                              </div>
                                                                 
                                                                 
                                                                
                                                              </div>
                    
                     </div>
                              ))}   
              </div>
              </div>
              <div className=" md:space-x-20 md:float-right">
                                  <h1 className=" text-blue-400 text-3xl font-weight-800 text-center">Posts</h1>
                                 
            { posts.map((post) => (
     
                   <div key={post.id} className="" >
                      <section className="py-4 ">
                               <div className="container mx-auto md:px-20">
                                   
                               {/* slide function */}
                               <div className="flex justify-center contents-center ">
                                <div className='w-96'>
                                  <div className="info flex justify-center flex-col">
                                   <div className="cat">
                                      <h3 className="text-orange-600 hover:text-orange-800 text-xl">{post.email} ,</h3>
                                      <span className="text-white ">{post.updated_at}</span>
                                   </div>
                                    <div className="title">
                                      <h2 className="text-3xl md:text-3xl font-bold text-white">{post.title}</h2>
                                     </div>
                                    <div className="image flex justify-center contents-center">
                                   <img src={orig + post.image_path} className="w-96 h-96  rounded-l-2xl bg-white"/>
                           
                                     </div>
                                      <div><p className="text-white py-3 ">{post.text}</p></div>  
                               </div>
                                        
                                                   
                           </div>        
                   
                           </div>
                   
                   
                               </div>
                       </section>
                       </div>
             ))}
                 
                            </div>
</div>
</div>
</div>


        )

        
    
}