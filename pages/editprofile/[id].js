import Link from "next/link"
import React, { useState } from "react";
import {useRouter} from "next/router";
import axios from 'axios'



// export default Register(){
const Addabout = () => {
    const router = useRouter()
    const { id } = router.query
    console.log(id);
    const [work, setWork] = useState("");
    const [study, setStudy] = useState("");
    const [college, setCollege] = useState("");
    const [currentlocation, setCurrentlocation] = useState("");
    const [permanentlocation, setPermanentlocation] = useState("");
    const [join, setJoin] = useState("");
    

    const UpdateAbout = async event => {
        event.preventDefault()
        // imageUpload()
        
       
       
            const data = new FormData();
            
            data.append("work",work);
            data.append("study",study);
            data.append("college",college);
            data.append("currentlocation",currentlocation);
            data.append("permanentlocation",permanentlocation);
            data.append("join",join);
            
        
            
            await axios.post(`http://localhost/api/updateabout/${id}`,data,
    
                 {
                    
                 headers: {
                     Authorization: 'Bearer' + ' ' + localStorage.getItem('token')  
                     }
                     
             });
        
        await router.push('/profile');
    }
    
    
    return(
    <div className="flex justify-center items-center">  
        <div className="flex flex-col bg-white p-8 rounded-xl">
            <form onSubmit={UpdateAbout}>
                 <div className="">
                   <h2 className="text-blue-600 text-3xl font-weight-800">Update About</h2>
                   
                   
                     <div className="flex flex-col p-4 rounded-xl">
                          <label for="text">Work</label>
                          <textarea  className="px-4 h-32 my-2 border border-1 border-gray-300 rounded-xl" name="work" placeholder="work.." required onChange={event => setWork(event.target.value)} ></textarea>
                          
                          <label for="text">Study</label>
                          <textarea className="px-4 h-32 my-2 border border-1 border-gray-300 rounded-xl" name="study" placeholder="Study.." required onChange={event => setStudy(event.target.value)} ></textarea>
         
                          <label for="text">College</label>
                          <textarea className="px-4 h-32 my-2 border border-1 border-gray-300 rounded-xl" name="college" placeholder="College.." required onChange={event => setCollege(event.target.value)} ></textarea>
                          
                          <label for="text">Current location</label>
                          <textarea className="px-4 h-32 my-2 border border-1 border-gray-300 rounded-xl" name="currentlocation" placeholder="College.." required onChange={event => setCurrentlocation(event.target.value)}></textarea>
                         
                          <label for="text">permanentlocation</label>
                          <textarea className="px-4 h-32 my-2 border border-1 border-gray-300 rounded-xl" name="permanentlocation" placeholder="College.." required onChange={event => setPermanentlocation(event.target.value)}></textarea>
                          
         
                          <label for="text">Join</label>
                          <input className="px-4 h-12 my-2 border border-1 border-gray-300 rounded-xl" type="date" id="birthday" name="join" required onChange={event => setJoin(event.target.value)}/>
                          
         
                          <button className=" bg-blue-600 hover:bg-blue-700 text-white my-2 py-1 rounded-xl w-72" type="submit">Update</button>
         
                          
                     </div>
                 </div>   
            </form> 
        </div>
    </div>
        
    );
}
export default Addabout;