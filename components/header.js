import Link from "next/link"

export default function header(){
    return(
        <header className="bg-gray-200">
            <div className="xl:container xl:mx:auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
                <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
                    <input type="text" className="mt-1 block w-60 px-3 py-2 bg-white border-slate-300 rounded-full text-sm shadow-sm placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"  placeholder="search..." />
                </div>
                <div className="shrink w-80 sm:order-2">
                    <Link href={"/"}>
                    <a>Home</a>
                    </Link>
                    
                </div>
                <div className="w-96 order-3 flex justify-center">
                    <div className="flex gap-6">
                       <Link href={"/"}><a>Post</a></Link>
                         <Link href={"/"}><a>Profile</a></Link>
                         <Link href={"/"}><a>Logout</a></Link>
                       
                    </div>
                </div>

            </div>
        </header>
    )
}