"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';


export default function Home() {
  const router = useRouter();


  const [token, setToken] = useState()



  let userid = useSelector(function (store) { return store.productSection.userlog; });







  return (
    <main >
      <div className="w-full">

        <div className="flex bg-white" style={{ height: "600px" }}>
          <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
                Feat wear <span className="text-indigo-600">Paradies</span>
              </h2>
              <p className="mt-2 text-sm text-gray-500 md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates. Cumque debitis dignissimos id quam vel!
              </p>
              <div className="flex justify-center lg:justify-start mt-6">
                {userid._id === undefined ?
                  <a
                    className="px-4 py-3 bg-gray-900 cursor-pointer text-gray-200 text-xs font-semibold rounded hover:bg-gray-800"
                    onClick={() => router.push(`/login`)}
                  >
                    Log in
                  </a> :
                  <a
                    className="px-4 py-3 bg-gray-900 cursor-pointer text-gray-200 text-xs font-semibold rounded hover:bg-gray-800"
                    onClick={() => router.push(`/home`)}
                  >
                    Home
                  </a>

                }
                <a
                  className="mx-4  px-4 py-3 bg-gray-300 cursor-pointer text-gray-900 text-xs font-semibold rounded hover:bg-gray-400"
                  onClick={() => router.push(`/adminLog`)}
                >
                  Admin panel
                </a>
              </div>
            </div>
          </div>
          <div className="lg:block  w-1/2 lg:w-1/2" style={{ clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)" }}>
            <div className="h-full relative">
              <Image className=' h-full '
                src="/wal.avif"
                // width={900}
                // height={900}
                layout="fill"
                objectFit="cover"

                alt="Picture of the author"
              />

              <div className="h-full bg-black opacity-25"></div>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}
