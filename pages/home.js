import React, { useEffect, useState } from "react";
import Link from 'next/link'
import { useRouter } from "next/router";
import axios from "axios";

import Navbar from "../components/navbar";
import Posts from "../components/Posts";


export default function Home() {
  const router = useRouter();

  const { name } = router.query
  console.log(name);

  const [posts, setPosts] = useState([]);

  const fetchData = async () => {

    try {

      if (name != null) {
        //search email 
        const res = await axios.get(`http://localhost/api/search/${name}`, {
          headers: {
            Authorization: 'Bearer' + ' ' + localStorage.getItem('token')
          }
        });

        setPosts(res.data);

      } 
     else {
        const res = await axios.get("http://localhost/api/getposts", {
          headers: {
            Authorization: 'Bearer' + ' ' + localStorage.getItem('token')
          }
        });

        setPosts(res.data);
      }


    } catch (error) {
      console.log(error.message);

      alert("Invalid Name");
      alert(error.message);

    }

  };

  useEffect(() => {
    fetchData();
  }, [name]);

  const orig = 'http://localhost/images/'

  return (
    <>
      <div className=''
        style={{
          backgroundImage: `url('/images/pureblack.jpeg')`,

        }}>
      
        <Navbar />
        <section className=" mt-8 flex flex-col-reverse">

          <Posts data={posts} orig={orig} />
        </section>

      </div>
    </>
  )

}

