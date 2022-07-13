import Link from "next/link"
import React, { useState } from "react";
import {useRouter} from "next/router";
import axios from 'axios'



// export default Register(){
const Register = () => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");
    const [gender, setGender] = useState("");
    const [password, setPassword] = useState("");
   

    const router = useRouter();

    const submit =async event => {
        event.preventDefault()

        try {

          const response1 =  await axios.post('http://localhost/api/register',
        {
            firstname,lastname, email,birthday,gender,password
        });
        await router.push('/');
        } catch (error) {
            console.log(error.response.data.message);
            console.log(error.message);
            alert(error.message)
            alert(error.response.data.message);
        }
        
    }
    return(
        <div className=""
        style={{
            backgroundImage: `url('/images/register.jpg')`,
             height: "668px",
            }}
        >
        <form onSubmit={submit}>
        <section className="py-16 ">
            <div className="container mx-auto md:px-20">
                <h1 className="font-bold text-3xl pb-12 text-center text-white">Signup</h1>
                <div className="flex justify-center contents-center  ">
            
            <div className="info flex justify-center flex-col">
               <div className="">
                   <input className="px-4 h-12 my-2 border border-1 border-gray-300 rounded-xl" type="text" placeholder="Enter firstname" name="firstname"  required onChange={event => setFirstName(event.target.value)}/>
               </div>

               <div className="">
                   <input className="px-4 h-12 my-2 border border-1 border-gray-300 rounded-xl" type="text" placeholder="Enter lastname" name="lastname" required onChange={event => setLastName(event.target.value)}/>
               </div>

               <div className="">
                   <input className="px-4 h-12 my-2 border border-1 border-gray-300 rounded-xl" type="text" placeholder="Enter email" name="email" required onChange={event => setEmail(event.target.value)}/>
               </div>
               
               <div className="">
                   <input className="px-4 h-12 my-2 border border-1 border-gray-300 rounded-xl" type="date" placeholder="Enter birthday" name="birthday" required onChange={event => setBirthday(event.target.value)}/>
               </div>
               <div className="">
                    <input type="radio" name="gender" value="male" onChange={event => setGender(event.target.value)}/> 
                    <label className="text-white" for="male">Male</label>
                    
                    <input type="radio" name="gender" value="female" onChange={event => setGender(event.target.value)}/> 
                    <label className="text-white" for="female">female</label>
                   
               </div>
               <div className="">
                   
                   <input className="px-4 h-12 my-2 border border-1 border-gray-300 rounded-xl" type="password" placeholder="Enter password" name="password" required onChange={event => setPassword(event.target.value)}/>
               </div>
               <div>
                   <button class=" bg-blue-600 hover:bg-blue-700 text-white my-2 py-1 rounded-xl w-72 " type="submit" >sign up</button>
                </div>
  
                <div class="flex justify-center items-center">
                    <Link href={"/"}><a class="bg-green-600 hover:bg-green-700 text-white my-2 py-1 rounded-xl w-72 text-center" >I already have an account</a></Link>
                </div>
            </div>

        </div>


            </div>
        </section>
        </form>
        </div>
    )
}
export default Register;
