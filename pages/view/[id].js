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
<section >
<div className="">
<div className="float-root bg-gray-300">
<div className="float-right ">
<h1>Posts</h1>
<div>
            { posts.map((post) => (
                <div > 
       <div className="flex ">
          
          <div className="bg-white box-border p-4 border-8  flex flex-col p-4 rounded-xl text-center w-96 h-96 " >
                 <div> 
                       <span className="text-gray-500 text-sm ">
                          <span className="font-bold italic text-gray-800">{post.email}</span>,{post.updated_at}</span>
                      <h2 className="text-xl ">{post.title}</h2> 
                 </div>
                 <div className="flex justify-center contents-center"> 
                      <img className="w-72 h-52" src={orig + post.image_path}/>
                 </div>
                 <p className="text-md text-gray-700 pt-2 pb-2 font-light">{post.text}</p>

           </div>
          
       </div>
       </div>
                ))}  

</div>
</div>

<div className="float-left ">
<h2 className="">Profile</h2>
<div>
            { profiles.map((profile) => (
                <div > 
                       <div className="flex flex-col space-y-4 ">
                                                   <h1>work:</h1>
                                                   <h2 className="text-blue-500">{profile.work}</h2>
                                                   <h1>Study:</h1>
                                                   <h2 className="text-blue-500">{profile.study}</h2>
                                                   <h1>college:</h1>
                                                   <h2 className="text-blue-500">{profile.college}</h2>
                                                   <h1>currentlocation:</h1>
                                                   <h2 className="text-blue-500">{profile.currentlocation}</h2>
                                                   <h1>permanentlocation:</h1>
                                                   <h2 className="text-blue-500">{profile.permanentlocation}</h2>
                                                   <h1>joined at:</h1>
                                                   <h2 className="text-blue-500">{profile.join}</h2>
                                                   
                                                  
                                                </div>
      
       </div>
                ))}   
</div>
</div>
</div>
</div>
</section>


        )

        
    
}