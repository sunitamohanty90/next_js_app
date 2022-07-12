import Link from 'next/link';


export default function PostNavbar() {
    

    return(
        <header className="text-white">
            <div className="xl:container xl:mx:auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
                <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
                    <h1 className=" italic text-3xl ">INNOVATION</h1>
                </div>
                <div className="shrink w- sm:order-1">
                <Link href={"/post"}><a>Posts</a></Link>
                    
                </div>
                <div className="w-96 order-3 flex justify-center">
                    <div className="flex gap-6">
                       
                       <Link href={"/home"}>
                    <a  className='text-white hover:bg-white hover:text-black px-1 rounded-xl text-center'>Home</a>
                    </Link>
                         <Link href={"/profile"}><a  className='text-white hover:bg-white hover:text-black px-1 rounded-xl text-center'>Profile</a></Link>
                         <Link href='/createpost' className=''><a className='text-white hover:bg-white hover:text-black px-1 rounded-xl text-center' >Createpost</a></Link>
                         
                       
                    </div>
                </div>

            </div>
        </header>
    )
    
}