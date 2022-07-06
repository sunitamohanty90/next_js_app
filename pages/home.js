import Head from 'next/head'
import React, { useEffect, useState } from "react";
// import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from "next/router";
import axios from "axios";

//components



export default function Home() {
    const router = useRouter();
    
    const handleLogout = async () => {
        
        // await axios.post("http://localhost/api/logout",{
        //     headers: {
        //         Authorization: 'Bearer' + ' ' + localStorage.getItem('token')
        //         }
        // });
        
        
        localStorage.clear();
        router.push("/");
    };

    
    
        const [posts, setPosts] = useState([]);
      
        const fetchData = async () => {
          const {data} = await axios.get("http://localhost/api/getposts",{
            headers: {
                Authorization: 'Bearer' + ' ' + localStorage.getItem('token')
                }
          });
          setPosts(data);
          
        };
      
        
        useEffect(() => {
          fetchData();
        }, []);
   const orig = 'http://localhost/images/'
   
    
  return (
    <div className=''
    style={{
        backgroundImage: `url('/images/pureblack.jpeg')`,
        
        }}
    >
         <header className="text-white">
            <div className="xl:container xl:mx:auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
                <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
                    <h1 className=" italic text-3xl ">INNOVATION</h1>
                </div>
                <div className="shrink w- sm:order-1">
                    <Link href={"/home"}>
                    <a>Home</a>
                    </Link>
                    
                </div>
                <div className="w-96 order-3 flex justify-center">
                    <div className="flex gap-6">
                       <Link href={"/post"}><a>Post</a></Link>
                         <Link href={"/profile"}><a>Profile</a></Link>
                         <button onClick={handleLogout}>Logout</button>
                       
                    </div>
                </div>

            </div>
        </header>
        <h1 className="font-bold text-3xl pb-12 text-center">Posts</h1>
        { posts.map((post) => (
            <div key={post.id}>
                 
        {/* section */}
        <section className="py-8 ">
            <div className="container mx-auto md:px-20 ">
                
            {/* slide function */}
            <div className="flex justify-center contents-center ">
            
            <div className="info flex justify-center flex-col">
              <div className='float-root flex space-x-2 md:space-x-10'>
            
            <div className='float-left w-40 md:w-96'>
            <div className="cat ">
                {post.email===localStorage.getItem('user')
                 ?<Link href={{pathname: '/profile',
                        query: { id: post.user_id },}}>
                            <span className="text-orange-600 text-xl hover:text-orange-800">{post.email} ,</span>
                </Link> 
                   :<Link href={{pathname: '/view/[id]',
                        query: { id: post.user_id },}}>
                            <span className="text-orange-600 text-xl hover:text-orange-800">{post.email} ,</span>
                </Link> }
                  <span className="text-white text-sm ">{post.updated_at}</span>
               </div>
              
               <div>
                   <h2 className="text-3xl md:text-3xl font-bold text-white " >{post.title}</h2> 
               </div>
                 
               <p className="text-white py-3">{post.text}</p>
               </div>
               <div className="float-right image md:w-96 w-40 ">
                <img src={orig + post.image_path} className="w-96 h-96  rounded-l-2xl bg-white"/>
           
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
