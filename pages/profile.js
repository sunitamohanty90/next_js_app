import Link from "next/link"
import Image from 'next/image'
import axios from "axios"
import React, { useEffect, useState } from "react";
import {useRouter} from "next/router";

export default function Profile() {
    const router = useRouter()
    const [posts, setPosts] = useState([]);
    const [profiles, setProfiles] = useState([]);
     //loggedin user posts

        const fetchData = async () => {
          const response1 = await axios.get(`http://localhost/api/loginuser/${localStorage.getItem('id')}`,{
            headers: {
                Authorization: 'Bearer' + ' ' + localStorage.getItem('token')
                }
          });
          console.log(response1.data);
          setPosts(response1.data);
          
        };

        const handleDelete = async deleteid =>{
            console.log(deleteid);
          await axios.delete(`http://localhost/api/delete/${deleteid}`,{
            headers: {
                    Authorization: 'Bearer' + ' ' + localStorage.getItem('token')
                    }

         });
         fetchData();
    }


        //loggedin user profile
        const fetchAbout = async () => {
            const response2 = await axios.get(`http://localhost/api/loginprofile/${localStorage.getItem('id')}`,{
              headers: {
                  Authorization: 'Bearer' + ' ' + localStorage.getItem('token')
                  }
            });
            console.log(response2.data);
            setProfiles(response2.data);
            //console.log(setPosts);
          };

          const handleDeleteprofile = async deleteid =>{
            console.log(deleteid);
          await axios.delete(`http://localhost/api/deleteabout/${deleteid}`,{
            headers: {
                    Authorization: 'Bearer' + ' ' + localStorage.getItem('token')
                    }

         });
         fetchAbout();
        }
        
        // for logout

        const handleLogout = async () => {
        
            // await axios.post("http://localhost/api/logout",{
            //     headers: {
            //         Authorization: 'Bearer' + ' ' + localStorage.getItem('token')
            //         }
            // });
            
            
            localStorage.clear();
            router.push("/");
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
        <section className="">
            
        <header className="text-white">
            <div className="xl:container xl:mx:auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
                <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
                    <h1 className=" italic text-3xl ">INNOVATION</h1>
                </div>
                <div className="shrink w- sm:order-1">
                <Link href={"/profile"}><a>Profile</a></Link>
                    
                </div>
                <div className="w-96 order-3 flex justify-center">
                    <div className="flex gap-6">
                       
                       <Link href={"/home"}>
                    <a  className='text-white hover:bg-white hover:text-black px-1 rounded-xl text-center'>Home</a>
                    </Link>
                         
                         <Link href={"/post"}><a className='text-white hover:bg-white hover:text-black px-1 rounded-xl text-center'>Posts</a></Link>
                         <button onClick={handleLogout} className='text-white hover:bg-white hover:text-black px-1 rounded-xl text-center'>Logout</button>
                         
                       
                    </div>
                </div>

            </div>
        </header>
            <div className="container mx-auto md:px-20">
               <div className="image flex justify-center contents-center">
                   <img className="rounded-full mt-12" src={"/images/girl.jpeg"}width={500}height={500}/>
                </div>
                <div className="flex justify-center contents-center mt-4">
               
                                <h1 className="text-3xl px-2 py-2 text-white">{localStorage.getItem('user')}</h1>  
               
                 </div>
                 <div className="text-white flex justify-center contents-center mt-12 ">
                                <ul className="flex flex-row space-x-8 ">
                                    <Link  href="/profile"><a className='text-blue '>Posts</a></Link>
                                    <div className="dropdown flex">
                                        <button className="dropbtn">About</button>
                                                     <div className="dropdown-content ">
                                                       <Link className="" href="/createabout">create</Link>
                                                       {/* <a  className="text-blue-500 hover:text-black">Delete</a> */}
                                                       
                                                     </div>
                                    </div>
                                    <Link  href=""><a className='text-white hover:bg-white hover:text-black px-1 rounded-xl text-center'>Frnds</a></Link>
                                    <Link  href=""><a className='text-white hover:bg-white hover:text-black px-1 rounded-xl text-center'>Photos</a></Link>
                                    <Link  href=""><a className='text-white hover:bg-white hover:text-black px-1 rounded-xl text-center'>videos</a></Link>
                                    <Link  href=""><a className='text-white hover:bg-white hover:text-black px-1 rounded-xl text-center'>More</a></Link>
                                </ul>
                            </div>
                {/* cut element */}
                <div className="flex justify-center contents-center ">
                           
                        <div className="float-root mt-16">
                            <div className=" space-x-8 float-right">
                                  <h1 className=" text-blue-600 text-3xl font-weight-800 text-center">Posts</h1>
                                  { posts.map((post) => (
                                         <div> 
                                <div className="flex ">
                                   
                                   <div className="bg-white box-border p-4 border-8  flex flex-col p-4 rounded-xl text-center w-96 h-96 " >
                                          <div> 
                                                <span className="text-gray-500 text-sm ">
                                                   <span className="font-bold italic text-gray-800">{localStorage.getItem('user')}</span>,{post.updated_at}</span>
                                               <h2 className="text-xl ">{post.title}</h2> 
                                          </div>
                                          <div className="flex justify-center contents-center"> 
                                               <img className="w-72 h-52" src={orig + post.image_path}/>
                                          </div>
                                          <p className="text-md text-gray-700 pt-2 pb-2 font-light">{post.text}</p>
                     
                                           <div className="dropdown flex content-end">
                                                     <button className="dropbtn text-blue-500 hover:text-black">...</button>
                                                     <div className="dropdown-content ">
                                                     <Link href={{pathname: '/edit/[id]',
                                                           query: { id: post.id },}}><a className="text-blue-500 hover:text-black">Edit</a></Link>
                                                       <button onClick={() => handleDelete(post.id)} ><a className="text-blue-500 hover:text-black">Delete</a></button>
                                                       
                                                     </div>
                                            </div>
                       
                                    </div>
                                   
                                </div>
                                </div>
                                         ))}     
                 
                            </div>
                            <div className="float-left mt-9">
               
                                   <div className="bg-white box-border h-96 w-96 p-4 border-8">
                                          <div>
                                              <h1 className="text-center text-blue-700">Intro</h1>
                                          </div>
                                          { profiles.map((profile) => (
                                         <div> 
                                               <div className="flex flex-col space-y-4 ">
                                                   <h2>{profile.work}</h2>
                                                   <h2>{profile.study}</h2>
                                                   <h2>{profile.college}</h2>
                                                   <h2>{profile.currentlocation}</h2>
                                                   <h2>{profile.permanentlocation}</h2>
                                                   <h2>{profile.join}</h2>
                                                   <Link href={{pathname: '/editprofile/[id]',
                                                           query: { id: profile.id },}}><a className="bg-blue-500 hover:bg-blue-700 text-white my-2 py-2 rounded-xl text-sm text-center">Edit Details</a></Link>
                                                   <button onClick={() => handleDeleteprofile(profile.id)} className="" ><a className="bg-blue-500 hover:bg-blue-700 text-white my-2 py-2 rounded-xl text-sm text-center ">Delete Details</a></button>
                                                </div>
                                                </div>
                                         ))}
                                    </div>
                 
                                    {/* <div className="bg-white box-border h-72 w-96 p-4 border-8">
                                        <div>Photos</div>
                                    </div>
                                    <div className="bg-white box-border h-72 w-96 p-4 border-8">
                                        <div>Frnds</div>
                                    </div> */}
                             </div>
                        </div>
                    </div>

            </div>
        </section>
    </div> 
      
      
    )
  }
 