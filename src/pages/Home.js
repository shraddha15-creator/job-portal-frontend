import { connect } from "react-redux"
import { JobCard } from "../components/JobCard"
import icon from '..//assets/UserProfile.png';

import { SideListItem } from "../components/SideList/SideListItem"


import logo from "../assets/Frame.png";
// import companyLogo from "../assets/companyLogo";

import { JOBS_DATA } from "../data/jobs";

export const Home = () => {
    return (
        <div className="flex flex-row pt-4 space-x-4 mx-4 ">


        {/* ************left panel*********** */}
            <div className="container w-1/4 flex flex-col  pl-4 ">

                <div className="w-auto h-52 pl-2 py-4 space-y-4 shadow bg-white rounded-lg">

                    <div className="flex flex-row text-red-500 p-3  ">
                        <img src={icon} style={{ height: 100, width: 100 }} />

                        <div className="flex flex-col">
                            <b className="font-poppins text-2xl"> Rohit Balodi </b>

                            <p className=" text-black font-semibold text-xs pl-3 mr-5"> lorem lipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <button className="bg-red-500 p-2 ml-20 w-auto text-white font-semibold rounded-lg "> Edit Profile </button>
                </div>

                <div className="w-auto p-2 pt-4 ">
                    <div className="border-gray-800 shadow-lg border-solid border-2 p-4 rounded"> Assessments</div>
                    <div className="border-gray-800 shadow-lg border-solid border-2 p-4 rounded"> All Jobs</div>
                    <div className="border-gray-800 shadow-lg border-solid border-2 p-4 rounded"> Applications</div>
                    <div className="border-gray-800 shadow-lg border-solid border-2 p-4 rounded"> Saved Jobs</div>
                </div>
            </div>
{/* *********************middle panel************ */}
            <div className="space-x-4 w-4/5">

                <div className=" w-auto pr-3 h-52  py-4 space-y-4 bg-white shadow rounded-lg ">
                    <div className="shadow flex">
                        <input className="w-full rounded p-2" type="text" placeholder="Search..." />
                        <button className="bg-white w-full h-10 flex justify-end items-center text-gray-500 p-2 ">
                            <img src="https://img.icons8.com/pastel-glyph/64/000000/search--v2.png" />
                        </button>
                    </div>

                    <div className="flex flex-row justify-around h-auto space-x-6 text-red-500 font-semibold">
                        <div className="flex w-full border-solid border-2 rounded-md border-red-500 px-6 py-2  ">UI/UX Developer </div>
                        <div className="flex w-full border-solid border-2 rounded-md border-red-500 px-6 py-2 ">Noida </div>
                    </div>
                    <div className="flex justify-center space-y-3 w-full border-solid border-2 rounded-md border-red-500 px-6 py-2 text-red-500 font-semibold"> Filter  </div>


                </div>

                <div className="w-auto h-auto  ">

                    <div className="flex flex-row justify-between bg-white text-lg border-gray-200 p-3 border-solid border-2">
                        <div>104 Jobs Available</div>
                        <div> Sort By: Latest </div>
                    </div>


                    {JOBS_DATA.map(job => <JobCard {...job} />)}
                </div>
            </div>


{/* *********************right panel***************** */}

            
                <div className="w-2/6 h-auto bg-white rounded mt-2 shadow  ">
                    <div className="h-40 mr-10 ">
                        <img
                            className="w-full h-full rounded-sm"
                            src={logo}
                            alt="Display"
                        />
                    </div>

                    <div className="bg-white-600 flex mr-3 justify-between h-28">
                        <div class="space-y-4">
                            <div className="h-8 w-8 flex items-center justify-center ml-10 -my-3.5">
                                <img
                                    className="w-full h-full rounded-full"
                                    //   src={companyLogo}
                                    alt=""
                                />
                            </div>

                            <p className=" capitalize font-semibold text-2xl mx-3">UI/XI designer</p>

                            <p className="text-red-400 mx-3">Clevertech</p>
                        </div>
                        <div className="space-y-3">
                            <div class="flex mt-8 mr-2 space-x-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                </svg>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                                </svg>
                            </div>
                            <p className="mr-2">100 Applicants</p>
                        </div>
                    </div>
                    <div className=" grid grid-cols-3 divide-x divide-gray-300  border-t-2 border-b-2">
                        <div className=" h-16 pl-2 shadow-sm">
                            <p>Experience</p>
                            <p className="text-xs mt-4">Minimum 6 months</p>
                        </div>
                        <div className=" h-16 pl-2 shadow-sm">
                            <p>Company</p>
                            <p className="text-xs mt-4">Information Tech...</p>
                        </div>
                        <div className=" h-16 pl-2 shadow-sm">
                            <p>Offer Salary</p>
                            <p className="text-xs mt-4">RS.5,00,000 P.A</p>
                        </div>
                    </div>
                    <div className="ml-5 flex-col space-y-8 mt-4">
                        <p className="h-4">Job Description</p>
                        <p>Lorem ipsum dolor sit amet</p>
                        <p className="text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                            semper in arcu facilisi elementum laoreet. Nisi pellentesque
                            luctus turpis morbi mauris donec. Amet leo sed ipsum, mi. Velit
              tellus, mattis diam ipsum in sed mi.{" "}
                        </p>
                        <p className="text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                            semper in arcu facilisi elementum laoreet. Nisi pellentesque
              luctus turpis morbi mauris donec.{" "}
                        </p>
                        <div className="h-">
                            <button className="bg-red-400 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded ml-44 mt-10">
                                Apply
              </button>
                        </div>
                    </div>
                </div>
            

        </div>

    )
}