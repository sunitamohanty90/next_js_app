import Link from "next/link"
import Image from 'next/image'
import axios from "axios"
import React, { useEffect, useState } from "react";
import {useRouter} from "next/router";
import Post from "/components/Posts"
import Profile from "/components/Profile"



export default function ViewProfile() {
    const router = useRouter()
    const { id } = router.query
    console.log(id);
    
    const [posts, setPosts] = useState([]);
    const [profiles, setProfiles] = useState([]);
     //loggedin user posts

        const fetchData = async () => {
         try {
            const response1 = await axios.get(`http://localhost/api/loginuser/${id}`,{
                headers: {
                    Authorization: 'Bearer' + ' ' + localStorage.getItem('token')
                    }
              });
              console.log(response1.data);
              setPosts(response1.data);
         } catch (error) {
             alert(error.message)
         }
          
        };


        // loggedin user profile
        const fetchAbout = async () => {
            try {
                const response2 = await axios.get(`http://localhost/api/loginprofile/${id}`,{
              headers: {
                  Authorization: 'Bearer' + ' ' + localStorage.getItem('token')
                  }
            });
            console.log(response2.data);
            setProfiles(response2.data);
            } catch (error) {
                alert(error.message)
            }
        
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
              <div className="flex flex-col space-y-4 bg-white rounded-xl mt-10">
                          <Profile data={profiles}/>
              </div>
              </div>
              <div className=" md:space-x-20 md:float-right">
                                  <h1 className=" text-blue-400 text-3xl font-weight-800 text-center">Posts</h1>
                 <Post data={posts} orig={orig}/>                
           
                 
                            </div>
</div>
</div>
</div>


        )

        
    
}