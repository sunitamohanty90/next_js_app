
import Link from 'next/link'
import axios from 'axios';
import React, { useEffect, useState } from "react";
import {useRouter} from "next/router";




export default function Post() {
     
        const router = useRouter();
    const [posts, setPosts] = useState([]);
    const [errormsg, seterror] = useState('')
     
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
            console.log(error.message);
            seterror(error.message);
            
          }
          
          
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

    <>
   <p className='text-red-500'> {errormsg}</p>
   

   { posts.map((post) => (
     
            <div key={post.id} className="" >
       
               <section className="py-4 mt-8 p-4">
                        <div className="container mx-auto md:px-20">
                            
                        
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
</>
  )
}
