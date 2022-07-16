import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { useRouter } from "next/router";

export default function Search() {
    const router = useRouter();
    const [search, setSearch] = useState([]);
    const handleSearch = (event) => {
        event.preventDefault();
        router.push({
            pathname: '/home',
            query: { name: search },
        })
        setSearch("");

    }
    return (
        <>
            <form onSubmit={handleSearch}>
                <input type="text" className=" block w-60 px-3 py-2 bg-white border-slate-900 rounded-full text-sm shadow-sm placeholder-slate-500 focus:outline-none focus:border-sky-800 focus:ring-1 focus:ring-sky-500 text-black" placeholder="search name....." onChange={(event) => { setSearch(event.target.value) }} value={search} />
            </form></>
    )

}