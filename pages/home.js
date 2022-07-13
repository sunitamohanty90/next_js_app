import React, { useEffect, useState } from "react";
import Link from 'next/link'
import {useRouter} from "next/router";
import axios from "axios";

import Navbar from "../components/navbar";
import Posts from "../components/Posts";


export default function Home() {
    const router = useRouter();
    
    
    const [posts, setPosts] = useState([]);
    // const [errormsg, seterror] = useState('')
    const fetchData = async () => {
       
     try {
        const res = await axios.get("http://localhost/api/getposts",{
            headers: {
                Authorization: 'Bearer' + ' ' + localStorage.getItem('token')
                }
          });
          
          setPosts(res.data);
       
     } catch (error) {
         console.log(error.message);
        //  seterror(error.message)
         alert(error.message);
         
     }
      
    };
  
    
    useEffect(() => {
      fetchData();
    }, []);
const orig = 'http://localhost/images/'


    
  return (
    <>
    <div className=''
    style={{
        backgroundImage: `url('/images/pureblack.jpeg')`,
        
        }}
    >
        <Navbar />
        <section className=" mt-16 flex flex-col-reverse">
            {/* <p className="text-red-500">{errormsg}</p> */}
            <Posts data={posts} orig={orig}/>

        
         </section>
         
    </div>
    </>
  )

}

