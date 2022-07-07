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
        <section >
            
        <header className="text-white">
            <div className="xl:container xl:mx:auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
                <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
                    <h1 className=" italic text-3xl ">INNOVATION</h1>
                </div>
                <div className="shrink  sm:order-1">
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
                                 
                                  { posts.map((post) => (
     
     <div key={post.id} className="" >
        <section className="py-4  p-4">
                 <div className="container mx-auto md:px-20">
                     
                 
                 <div className="flex justify-center contents-center p-2">
                  <div className='w-96'>
                    <div className="info flex justify-center flex-col">
                     <div className="cat">
                        {post.email===localStorage.getItem('user')
                            ?<Link href={{pathname: '/profile',
                                   query: { id: post.user_id },}}>
                                       <span className="text-orange-600 text-xl hover:text-orange-800">{post.email} ,</span>
                            </Link> 
                               :<Link href={{pathname: '/view/[id]',
                                    query: { id: post.user_id },}}>
                                        <span className="text-orange-600 text-xl hover:text-orange-800">{post.email} ,</span>
                            </Link> }
                        
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
                          
                                     <div className="dropdown   ">
                                              <button className="dropbtn  absolute inset-x-0 bottom-0 ">...</button>
                                              <div className="dropdown-content absolute inset-x-0 bottom-0">
                                               
                                               <Link href={{pathname: '/edit/[id]',
                                                    query: { id: post.id },}}><a className="text-blue-500 hover:text-black ">Edit</a></Link>
                                                
                                                
                                               
                                              <button onClick={() => handleDelete(post.id)} ><a className="text-blue-500 hover:text-black ">Delete</a></button>
                                                
                                              </div>
                                     </div>
             </div>        
     
             </div>
     
     
                 </div>
         </section>
         </div>
 ))}       
                 
                            </div>
                            <div className="md:float-left p-4">
                                 <h1 className=" text-blue-600 text-3xl font-weight-800 text-center">About</h1>
                                   <div className="bg-white md:w-96  p-2 rounded-xl mt-8">
                                          <div>
                                              <h1 className="text-center text-blue-700">Intro</h1>
                                          </div>
                                          { profiles.map((profile) => (
                                         <div> 
                                               <div className="flex flex-col  ">
                                                   
                                                   <div className="">
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
                                                   <Link href={{pathname: '/editprofile/[id]',
                                                           query: { id: profile.id },}}><a className="bg-blue-500 hover:bg-blue-700 text-white my-2 py-2 rounded-xl text-sm text-center">Edit Details</a></Link>
                                                   
                                                </div>
                                                </div>
                                         ))}
                                    </div>
                 
                                    
                             </div>
                        </div>
                    </div>

            </div> 
        </section>
    </div> 
      
      
    )
  }
 