import Image from "next/image"
import Link from "next/link"

export default function section1(){
    return(
        <section className="py-16">
            <div className="container mx-auto md:px-20">
                <h1 className="font-bold text-3xl pb-12 text-center">Posts</h1>
            {Slide()}


            </div>
        </section>
    )
}

function Slide(){
    return(
        <div className="flex justify-center contents-center bg-white">
            
            <div className="info flex justify-center flex-col">
            <div className="cat">
                   <Link href={"/"}><a className="text-orange-600 hover:text-orange-800">Id</a></Link>
                   <Link href={"/"}><a className="text-gray-600 hover:text-gray-800">Date</a></Link>
               </div>
               <div className="title">
                   <Link href=""><a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">Title</a></Link>
               </div>
            <div className="image">
                <Link href={"/"}><a><Image src={"/images/dog.png"}width={400}height={400}/></a></Link>
        
            </div>
               <p className="text-gray-500 py-3">djsuefhrdugdnbgjkndfjgfjefid</p>
            </div>

        </div>
    )
}