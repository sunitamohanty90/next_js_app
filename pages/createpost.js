import Link from "next/link"
import React, { useState } from "react";
import {useRouter} from "next/router";
import axios from 'axios'



// export default Register(){
const Addpost = () => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [image, setImage] = useState("");
    const [errormsg, seterror] = useState('')
    const router = useRouter();

    const ImageUpload = (e) => {
        if (e.target.files && e.target.files[0]) {
              const i = e.target.files[0];
              console.log(i);
               setImage(i);
        }
        
        };

    const CreatePost = async event => {
        event.preventDefault()
        // imageUpload()
        
       
       
            const data = new FormData();
            
            data.append("title",title);
            data.append("text",text);
            data.append("image",image);
            
        console.log(title);
            
        try {
            await axios.post('http://localhost/api/createpost',data,
    
                 {
                    
                 headers: {
                     Authorization: 'Bearer' + ' ' + localStorage.getItem('token')  
                     }
                     
             });
        
        await router.push('/post');
            
        } catch (error) {
            console.log(error.message);
            seterror('Image must be an type of jpg,png,jpeg!')
            
        }    
    }
    return(
        <form onSubmit={CreatePost} >
        <section className="py-16 ">
            <div className="container mx-auto md:px-20">
                <h1 className="font-bold text-3xl pb-12 text-center">CreatePost</h1>
                <div className="flex justify-center contents-center bg-white ">
            
            <div className="info flex justify-center flex-col">
            <label for="title">Title</label>
                 <input  className="px-4 h-8 my-2 border border-1 border-gray-300 rounded-xl" type="text" name="title" placeholder="Title.." required onChange={event => setTitle(event.target.value)} />
                 
                 <label for="text">Text</label>
                 <textarea className="px-4 h-32 my-2 border border-1 border-gray-300 rounded-xl" name="text" placeholder="Description.." required onChange={event => setText(event.target.value)} ></textarea>
                 
                 <span className="mt-2 text-base leading-normal">Select a file</span>
                 <input type="file" name="image"  onChange={ImageUpload}/>
                 <div>
               { <p className="error text-red-500 my-2 py-1 rounded-xl w-72 text-center">{errormsg}</p>}
               </div>
                
                 <button className=" bg-blue-600 hover:bg-blue-700 text-white my-2 py-1 rounded-xl w-72" type="submit">Post</button>

            </div>

        </div>


            </div>
        </section>
        </form>
    )
}
export default Addpost;