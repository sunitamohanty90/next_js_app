
import Link from 'next/link';
import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();

    const handleLogout = async () => {

        localStorage.clear();
        router.push("/");
    };
    return (
        <header className="text-white">
            <div className="xl:container xl:mx:auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
                <div className="md:flex-none w-96 order-1 sm:order-1 flex justify-center py-4 sm:py-0">
                    <h1 className=" italic text-3xl ">INNOVATION</h1>
                </div>
                {/* <div className="shrink  sm:order-2"> */}


                    <div className="w-96 order-2 flex justify-center">
                        <div className="flex gap-6">
                            <Link href={"/home"}>
                                <a className='hover:bg-white hover:text-black px-1 rounded-xl'>Home</a>
                            </Link>

                            <Link href={"/post"}><a className='hover:bg-white hover:text-black px-1 rounded-xl'>Post</a></Link>
                            <Link href={"/profile"}><a className='hover:bg-white hover:text-black px-1 rounded-xl'>Profile</a></Link>
                            <button onClick={handleLogout} className='hover:bg-white hover:text-black px-1 rounded-xl'>Logout</button>

                        </div>
                    </div>
                {/* </div> */}

            </div>
        </header>
    )

}

