
import React, { useEffect, useState } from "react";
import Link from 'next/link'
import {useRouter} from "next/router";
import axios from "axios";


//components



export default function Home() {
     const router = useRouter();
    
    
        const [posts, setPosts] = useState([]);
        const [errormsg, seterror] = useState('')
        const fetchData = async () => {
         try {
            const {data} = await axios.get("http://localhost/api/getposts",{
                headers: {
                    Authorization: 'Bearer' + ' ' + localStorage.getItem('token')
                    }
              });
              setPosts(data);
         } catch (error) {
             console.log(error.message);
             seterror(error.message)
             
         }
          
        };
      
        
        useEffect(() => {
          fetchData();
        }, []);
   const orig = 'http://localhost/images/'
   
    
  return (
    <>
    <p className='text-red-500'>{errormsg}</p>
        { posts.map((post) => (
            <div key={post.id}>
                 
        {/* section */}
       <div className='py-8 '>
            <div className="container mx-auto md:px-20 ">
                
           
            <div className="flex justify-center contents-center ">
            
            <div className="info flex justify-center flex-col">
              <div className='md:float-root  md:space-x-10'>
            
            <div className='md:float-left flex-col  md:w-96 p-2'>
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
               <div className="md:float-right image md:w-96 ">
                <img src={orig + post.image_path} className="md:w-96 md:h-96 h-96 md:p-0 p-2 rounded-l-2xl "/>
           
            </div>
               </div>
            </div>
            

        </div>


            </div>
    </div>
        </div>
        ))}
        
    </>
  )

}
