import Link from "next/link"
import axios from 'axios';
import React, { useEffect, useState } from "react";
import {useRouter} from "next/router";
import Navbar from "../components/navbar";
import Posts from '../components/Posts';
import Profile from '../components/Profile';

export default function profile() {
  const router = useRouter()

  const [posts, setPosts] = useState([]);
  const [profiles, setProfiles] = useState([]);
  
  
//loggedin user posts
       const fetchData = async () => {
         try {
           const response1 = await axios.get(`http://localhost/api/loginuser/${localStorage.getItem('id')}`,{
           headers: {
               Authorization: 'Bearer' + ' ' + localStorage.getItem('token')
               }
         });
         
         console.log(response1.data);
         
         setPosts(response1.data);
         
           
         } catch (error) {
           console.log(error);
         
          alert(error.message);
           
         }
         
         
       };
      //loggedin user profile
      const fetchAbout = async () => {
         try {
          const response2 = await axios.get(`http://localhost/api/loginprofile/${localStorage.getItem('id')}`,{
              headers: {
                  Authorization: 'Bearer' + ' ' + localStorage.getItem('token')
                  }
            });
            console.log(response2.data);
            setProfiles(response2.data);
         } catch (error) {
             console.log(error.message);
           
            alert(error.message)
         }
          
        };

      useEffect(() => { 
              fetchData();
              fetchAbout();
            
      }, []);
      const orig = 'http://localhost/images/'
  
    
    return (
    <div className=""
    style={{
        backgroundImage: `url('/images/pureblack.jpeg')`,
         
        }}>
        
            <Navbar />
        
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
                                  <Posts data={posts} orig={orig}/>  
                                 
                                 </section>         
                            </div>
                            <div className="md:float-left p-4">
                            <h1 className=" text-blue-600 text-3xl font-weight-800 text-center">About</h1>
                                   <div className="bg-white md:w-96  p-2 rounded-xl mt-8">
                                          <div>
                                              <h1 className="text-center text-blue-700">Intro</h1>
                                          </div>
                                         
                          
                              <Profile data={profiles} />
                              </div>
                   
                             </div>
                        </div>
                    </div>

            </div> 
        
    </div> 
      
      
    )
  }
 