"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import submitUser from '../api/reg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {

    const [state, setState] = useState();

    const handleSubmit = async (FormData) => {
        setState("Waiting");

        try {

            const res = await submitUser({
                name: FormData.get("firstName"),
                email: FormData.get("email"),
                password: FormData.get("password"),
                address: FormData.get("streetAddress"),
                city: FormData.get("city"),
                state: FormData.get("state"),
                country: FormData.get("country"),
                zip: FormData.get("zip"),


            });

            if (res.status === 200) {
                toast.success("Regestration completed successfuly")
                setState("sucsess")
            } else {
                setState('erroer')
                console.log("statuseData", res)

            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>

            <form id="login" action={handleSubmit}>
                <div className="bg-white dark:bg-gray-800">
                    <div className="container mx-auto bg-white dark:bg-gray-800 rounded">
                        <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5 bg-white dark:bg-gray-800">
                            <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
                                <p className="text-lg text-gray-800  font-bold">Register</p>
                                <div className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                        <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="mx-auto">

                        </div>
                    </div>
                    <div className="container mx-auto bg-white dark:bg-gray-800 mt-10 rounded px-4">

                        <div className="mx-auto pt-4">
                            <div className="container mx-auto">
                                <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                    <label htmlFor="FirstName" className="pb-2 text-sm font-bold text-gray-800 ">
                                        First Name
                                    </label>
                                    <input type="text" id="FirstName" name="firstName" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder />
                                </div>
                                <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                    <label htmlFor="Password" className="pb-2 text-sm font-bold text-gray-800 ">
                                        password
                                    </label>
                                    <input type="password" id="password" name="password" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder />
                                </div>
                                <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                    <label htmlFor="Email" className="pb-2 text-sm font-bold text-gray-800 ">
                                        Email
                                    </label>
                                    <div className="border border-green-400 shadow-sm rounded flex">
                                        <div className="px-4 py-3  flex items-center border-r border-green-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <rect x={3} y={5} width={18} height={14} rx={2} />
                                                <polyline points="3 7 12 13 21 7" />
                                            </svg>
                                        </div>
                                        <input type="email" id="Email" name="email" required className="pl-3 py-3 w-full text-sm focus:outline-none placeholder-gray-500 rounded bg-transparent text-gray-500 dark:text-gray-400" placeholder="example@gmail.com" />
                                    </div>

                                </div>
                                <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                    <label htmlFor="StreetAddress" className="pb-2 text-sm font-bold text-gray-800 ">
                                        Street Address
                                    </label>
                                    <input type="text" id="StreetAddress" name="streetAddress" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder />
                                </div>
                                <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                    <label htmlFor="City" className="pb-2 text-sm font-bold text-gray-800 ">
                                        City
                                    </label>
                                    <div className="border border-gray-300 dark:border-gray-700 shadow-sm rounded flex">
                                        <input type="text" id="City" name="city" required className="pl-3 py-3 w-full text-sm focus:outline-none border border-transparent focus:border-indigo-700 bg-transparent rounded placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="Los Angeles" />
                                        <div className="px-4 flex items-center border-l border-gray-300 dark:border-gray-700 flex-col justify-center text-gray-500 dark:text-gray-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 15 12 9 18 15" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                    <label htmlFor="State/Province" className="pb-2 text-sm font-bold text-gray-800 ">
                                        State/Province
                                    </label>
                                    <input type="text" id="State/Province" name="state" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="California" />
                                </div>
                                <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                    <label htmlFor="Country" className="pb-2 text-sm font-bold text-gray-800 ">
                                        Country
                                    </label>
                                    <input type="text" id="Country" name="country" required className="border bg-transparent border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="United States" />
                                </div>
                                <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                    <div className="flex items-center pb-2">
                                        <label htmlFor="ZIP" className="text-sm font-bold text-gray-800 ">
                                            ZIP/Postal Code
                                        </label>
                                        <div className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                                <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                                            </svg>
                                        </div>
                                    </div>
                                    <input type="text" name="zip" required id="ZIP" className="bg-transparent border border-red-400 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder={86745} />
                                    <div className="flex justify-between items-center pt-1 text-red-400">
                                        <p className="text-xs">Incorrect Zip Code</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x-circle">
                                            <circle cx={12} cy={12} r={10} />
                                            <line x1={15} y1={9} x2={9} y2={15} />
                                            <line x1={9} y1={9} x2={15} y2={15} />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto mt-10 rounded bg-gray-100 dark:bg-gray-700 w-11/12 xl:w-full">
                        <div className="xl:w-full py-5 px-8">
                            <div className="flex items-center mx-auto">
                                <div className="container mx-auto">
                                    <div className="mx-auto xl:w-full">
                                        <p className="text-lg text-gray-800  font-bold">Alerts</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 pt-1">Get updates of any new activity or features. Turn on/off your preferences</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="container mx-auto w-11/12 xl:w-full">
                        <div className="w-full py-4 sm:px-0 bg-white dark:bg-gray-800 flex justify-end">
                            <div className="flex justify-between mr-5 items-center pt-1 text-green-400">
                                <p className="text-lg">{state}</p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                    <path
                                        className="heroicon-ui"
                                        d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0
                              0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                                        stroke="currentColor"
                                        strokeWidth="0.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                            <button className="bg-gray-200 focus:outline-none transition duration-150 ease-in-out hover:bg-gray-300 dark:bg-gray-700 rounded text-indigo-600 dark:text-indigo-600 px-6 py-2 text-xs mr-4">Cancel</button>
                            <button className="bg-indigo-700 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm" type="submit">
                                Save
                            </button>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </form>


        </div>
    )
}

export default Page
