import Link from "next/link"
import React, { useState } from "react";
import {useRouter} from "next/router";
import axios from 'axios'
import { useParams } from 'react-router-dom';



// export default Register(){
const Editpost = () => {
    const router = useRouter()
    const { id } = router.query
    console.log(id);
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [image, setImage] = useState("");
    
    async function handleDeleteProfile() {
        await axios.delete(`http://localhost/api/delete/${id}`, {
              headers: {
                  Authorization: 'Bearer' + ' ' + localStorage.getItem('token')  
                  }
           
          })
      }
    const ImageUpdate = (e) => {
        if (e.target.files && e.target.files[0]) {
              const i = e.target.files[0];
              console.log(i);
               setImage(i);
        }
        
        };

    const UpdatePost = async event => {
        event.preventDefault()
        // imageUpload()
        
       
       
            const data = new FormData();
            
            data.append("title",title);
            data.append("text",text);
            data.append("image",image);
            
        console.log(title);
            // if (event.target.files && event.target.files[0]) {
            //   const i = event.target.files[0];
        
            //   setImage(i);
            //   console.log(i);
             
            // }
            await axios.post(`http://localhost/api/update/${id}`,data,
    
                 {
                    
                 headers: {
                     Authorization: 'Bearer' + ' ' + localStorage.getItem('token')  
                     }
                     
             });
        
        await router.push('/post');
    }
    return(
        <form onSubmit={UpdatePost} enctype="multipart/form-data">
        <section className="py-16 ">
            <div className="container mx-auto md:px-20">
                <h1 className="font-bold text-3xl pb-12 text-center">EditPost</h1>
                <div className="flex justify-center contents-center bg-white ">
            
            <div className="info flex justify-center flex-col">
            <label for="title">Title</label>
                 <input  className="px-4 h-8 my-2 border border-1 border-gray-300 rounded-xl" type="text" name="title" placeholder="Title.." onChange={event => setTitle(event.target.value)} />
                 
                 <label for="text">Text</label>
                 <textarea className="px-4 h-32 my-2 border border-1 border-gray-300 rounded-xl" name="text" placeholder="Description.." onChange={event => setText(event.target.value)} ></textarea>
                 
                 <span className="mt-2 text-base leading-normal">Select a file</span>
                 <input type="file" name="image"  onChange={ImageUpdate}/>
                
                 <button className=" bg-blue-600 hover:bg-blue-700 text-white my-2 py-1 rounded-xl w-72" type="submit">update</button>

            </div>
            
        </div>


            </div>
        </section>
        </form>
    )
}
export default Editpost;