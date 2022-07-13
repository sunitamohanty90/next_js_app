import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from '../components/navbar';
// import PostById from '../components/PostById';
import Posts from '../components/Posts';



export default function Post() {

  const router = useRouter();
  const [posts, setPosts] = useState([]);
  // const [errormsg, seterror] = useState('')

  const fetchData = async () => {
    try {
      const response1 = await axios.get(`http://localhost/api/loginuser/${localStorage.getItem('id')}`, {
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

  useEffect(() => {

    fetchData();

  }, []);
  const orig = 'http://localhost/images/'

  return (
    <>
      <div className=''
        style={{
          backgroundImage: `url('/images/post.jpg')`,

        }}>

        <Navbar />
        <div className='flex justify-center contents-center mt-8'>
          <Link href={"/createpost"}><a className=' bg-white text-black px-1 rounded-xl text-center'>CreatePost</a></Link>
        </div>
        <section className='flex flex-col-reverse'>
          {/* <PostById data={posts} orig={orig} /> */}
          <Posts data={posts} orig={orig} />

        </section>

      </div>
    </>
  )
}
