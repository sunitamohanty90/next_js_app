import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios';
import React, { useEffect, useState } from "react";
import {useRouter} from "next/router";



export default function Post() {
     
        const router = useRouter()
        
        
    const [posts, setPosts] = useState([]);
     
        const fetchData = async () => {
          const response1 = await axios.get(`http://localhost/api/loginuser/${localStorage.getItem('id')}`,{
            headers: {
                Authorization: 'Bearer' + ' ' + localStorage.getItem('token')
                }
          });
          console.log(response1.data);

          setPosts(response1.data);
          
          //console.log(setPosts);
        };
      
        
//deletepost
        const handleDelete = async deleteid =>{
                console.log(deleteid);
              await axios.delete(`http://localhost/api/delete/${deleteid}`,{
                headers: {
                        Authorization: 'Bearer' + ' ' + localStorage.getItem('token')
                        }

             });
             fetchData();
        }

        useEffect(() => {
            
                fetchData();
              
        }, []);
        const orig = 'http://localhost/images/'
 
  return (

    <div className=''
    style={{
      backgroundImage: `url('/images/post.jpg')`,
       
      }}>
   

<header className="text-white">
            <div className="xl:container xl:mx:auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
                <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
                    <h1 className=" italic text-3xl ">INNOVATION</h1>
                </div>
                <div className="shrink w- sm:order-1">
                <Link href={"/post"}><a>Posts</a></Link>
                    
                </div>
                <div className="w-96 order-3 flex justify-center">
                    <div className="flex gap-6">
                       
                       <Link href={"/home"}>
                    <a  className='text-white hover:bg-white hover:text-black px-1 rounded-xl text-center'>Home</a>
                    </Link>
                         <Link href={"/profile"}><a  className='text-white hover:bg-white hover:text-black px-1 rounded-xl text-center'>Profile</a></Link>
                         <Link href='/createpost' className=''><a className='text-white hover:bg-white hover:text-black px-1 rounded-xl text-center' >Createpost</a></Link>
                         
                       
                    </div>
                </div>

            </div>
        </header>

  {/* <div className=''> <h1 className="font-bold text-3xl pb-12 text-center text-white">Posts</h1></div> */}
   

   { posts.map((post) => (
     
            <div key={post.id} className="" >
       {/* {localStorage.setItem('postid',post.id)} */}
               <section className="py-4 mt-20 p-4">
                        <div className="container mx-auto md:px-20">
                            
                        {/* slide function */}
                        <div className="flex justify-center contents-center ">
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
                               {/* <h3 className="text-orange-600 hover:text-orange-800 text-xl">{localStorage.getItem('user')} ,</h3> */}
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
  )
}
