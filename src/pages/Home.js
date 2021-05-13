import { connect } from "react-redux"
import { JobCard } from "../components/JobCard"
import icon from '..//assets/UserProfile.png';
import search from "../assets/search.png";
import heart from "../assets/heart.png"
import logo from "../assets/Frame.png";
// import companyLogo from "../assets/companyLogo";

import { JOBS_DATA } from "../data/jobs";
import { LeftSideMenu } from "../components/SideList/LeftSideMenu";

export const Home = () => {
    return (
        <div className="flex flex-row pt-4 space-x-4 mx-6 ">


            {/* ************left panel*********** */}
            <div className=" w-1/4 flex flex-col  pl-4 ">

                <div className="w-3/4 h-44  shadow bg-white rounded-sm">

                    <div className="flex flex-row text-blue-900 p-3 pt-4  ">
                        <img src={icon} style={{ height: 70, width: 100, paddingTop: 4 }} />

                        <div className="flex flex-col px-2">
                            <b className="font-poppins text-md pl-6 pt-2"> Rohit Balodi </b>

                            <p className=" text-black font-extralight text-xs pl-6 pt-2 mr-5"> lorem lipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <button className="bg-blue-900 p-1 px-10 mx-14 w-auto text-white text-sm font-medium rounded "> Edit Profile </button>
                </div>

                <div className="mt-4 w-3/4">
                    <LeftSideMenu />
                </div>

            </div>
            {/* *********************middle panel************ */}
            <div className="">

                <div className=" w-5/6 p-3 h-auto  py-4 space-y-4 bg-white shadow rounded-sm ">
                    <div className="shadow flex">
                        <img src={search} style={{
                            height: 25,
                            width: 25,
                            margin: 15
                        }} />
                        <input className="w-full rounded p-2 px-2" type="text" placeholder="Search..." />
                    </div>

                    <div className="flex flex-row justify-around h-auto space-x-6 text-black text-sm font-semibold">
                        <div className="flex w-full border-solid border-2 rounded border-blue-900 px-6 py-2  ">UI/UX Developer </div>
                        <div className="flex w-full border-solid border-2 rounded border-blue-900 px-6 py-2 ">Noida </div>
                    </div>
                </div>

                <div className="container w-5/6 h-auto mt-4 ">

                    <div className="flex flex-row justify-between bg-white text-lg border-gray-200 p-3 border-solid border-2">
                        <div>104 Jobs Available</div>
                        <div> Sort By: Latest </div>
                    </div>


                    {JOBS_DATA.map(job => <JobCard {...job} />)}
                </div>
            </div>


            {/* *********************right panel***************** */}


            <div className="w-2/6 h-full bg-white rounded mt-1 pb-4 shadow  ">
                <div className="h-40 ">
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
                                //src={companyLogo}
                                alt=""
                            />
                        </div>

                        <p className=" capitalize font-semibold text-2xl mx-3">UI/XI designer</p>

                        <p className="text-blue-900 font-semibold mx-3">Clevertech</p>
                    </div>
                    <div className="space-y-6">
                        <div class="flex mt-8  space-x-4 pl-24">
                            <img src={heart}
                                style={{
                                    width: 18,
                                    height: 15
                                }}
                            />
                        </div>
                        <p className="mr-2">100 Applicants</p>
                    </div>
                </div>
                <div className=" grid grid-cols-3 divide-x divide-gray-300 py-2  border-t-2 border-b-2">
                    <div className=" h-16 pl-2 shadow-sm">
                        <p className="font-semibold text-sm">Experience</p>
                        <p className="text-xs mt-4">Minimum 6 months</p>
                    </div>
                    <div className=" h-16 pl-2 shadow-sm">
                        <p className="font-semibold text-sm">Company</p>
                        <p className="text-xs mt-4">Information Tech...</p>
                    </div>
                    <div className=" h-16 pl-2 shadow-sm">
                        <p className="font-semibold text-sm">Offer Salary</p>
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
                    <div className="flex px-28">
                        <button className="bg-blue-900 hover:bg-red-500 text-white font-bold py-2 px-4 rounded mt-10">
                            Apply
                            </button>
                    </div>
                </div>
            </div>


        </div>

    )
}