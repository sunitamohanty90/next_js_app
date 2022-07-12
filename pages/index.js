import Link from "next/link"
import React, { useState } from "react";
import {useRouter} from "next/router";
import axios from "axios";


export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errormsg, seterror] = useState('')

    const router = useRouter();

    const submit =async event => {
        event.preventDefault()

       try {
        const response = await axios.post('http://localhost/api/login',
        {
             email,password
        })
        // }).then((e)=>{
        //     console.log(e);
        // }).catch((e)=>{
        //     console.log(e);
        // });
    
        console.log(response);
        console.log(response.data.token);
        console.log(response.data.user.email);
        localStorage.setItem('token',response.data.token);
        localStorage.setItem('user',response.data.user.email);
        localStorage.setItem('id',response.data.user.id);
        
        axios.defaults.headers.common['Authorization'] = 'Bearer'+' '+ localStorage.getItem('token');
        await router.push('/home');
           
       } catch (error) {
           console.log(error.message);
        //    if (res.status === 200) {
        //     const userObj = await res.json()
        //     // set user to useSWR state
        //     mutate(userObj)
        //   } else {
            seterror('Incorrect username or password. Try better!')
        //   }
           
       }
      
    }
    
    return(
        
 <div className=""
    style={{
    backgroundImage: `url('/images/login.png')`,
     height: "668px",
    }}>
        <section className="pt-32">
            <div className="container mx-auto md:px-20 ">
                <h1 className="font-bold text-3xl pb-12 text-center text-white hover:">Log in</h1>
                <div className="flex justify-center contents-center  ">
            
            <div className="info flex justify-center flex-col">
           
            <form onSubmit={submit} >
               <div className="">
                   <input className="px-4 h-12 my-2 border border-1 border-gray-300 rounded-xl" type="text" placeholder="Enter email" name="email" required onChange={event => setEmail(event.target.value)}/>
               </div>
            
               <div className="">
                   
                   <input className="px-4 h-12 my-2 border border-1 border-gray-300 rounded-xl" type="password" placeholder="Enter password" name="password" required onChange={event => setPassword(event.target.value)}/>
               </div>
               <div>
               {errormsg && <p className="error text-white my-2 py-1 rounded-xl w-72 text-center">{errormsg}</p>}
               </div>
               <div>
                   <button className=" bg-blue-600 hover:bg-blue-700 text-white my-2 py-1 rounded-xl w-72 " type="submit" >Login</button>
                   
                </div>
  
                <div className="flex justify-center items-center">
                    <Link href={"/register"}><a className="bg-green-600 hover:bg-green-700 text-white my-2 py-1 rounded-xl w-72 text-center" >create an account</a></Link>
                </div>
             </form >
            
            </div>

        </div>


            </div>
        </section>
        </div>
        
    )
}

