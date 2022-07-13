import Link from "next/link"

import axios from "axios"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";



export default function Profile({ data }) {


  return (
    <>


      {data.length > 0 && data.map((profile) => (
        <div>
          <div className="flex flex-col  ">

            <div className="">
              <div className="child"><img className="" src="/images/work4.png" width={30} height={30} /></div>
              <div className="child">: {profile.work}</div>
            </div>
            <div className="">
              <div className="child"><img className="" src="/images/study1.png" width={30} height={30} /></div>
              <div className="child">: {profile.study}</div>
            </div>
            <div className="">
              <div className="child"><img className="" src="/images/college.png" width={30} height={30} /></div>
              <div className="child">: {profile.college}</div>
            </div>
            <div className="">
              <div className="child"><img className="" src="/images/location.png" width={30} height={30} /></div>
              <div className="child">: {profile.currentlocation}</div>
            </div>
            <div className="">
              <div className="child"><img className="" src="/images/location.png" width={30} height={30} /></div>
              <div className="child">: {profile.permanentlocation}</div>
            </div>
            <div className="">
              <div className="child"><img className="" src="/images/join.svg" width={30} height={30} /></div>
              <div className="child">: {profile.join}</div>
            </div>
            <Link href={{
              pathname: '/editprofile/[id]',
              query: { id: profile.id },
            }}><a className="bg-blue-500 hover:bg-blue-700 text-white my-2 py-2 rounded-xl text-sm text-center">Edit Details</a></Link>

          </div>
        </div>
      ))}



    </>
  )
}
