import Link from "next/link"

import axios from "axios"
import React, { useEffect, useState } from "react";
import {useRouter} from "next/router";



export default function Profile() {
    const router = useRouter()

    const [profiles, setProfiles] = useState([]);
    const [errormsg, seterror] = useState('')
    

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
               seterror(error.message);
           }
            //console.log(setPosts);
          };

        useEffect(() => { 
                
                fetchAbout();
              
        }, []);



    return (
    <>
    
                                 <h1 className=" text-blue-600 text-3xl font-weight-800 text-center">About</h1>
                                   <div className="bg-white md:w-96  p-2 rounded-xl mt-8">
                                          <div>
                                              <h1 className="text-center text-blue-700">Intro</h1>
                                          </div>
                                          <p className="text-red-500">{errormsg}</p>
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
                 
                                    
                             
 </>
    )
  }
 