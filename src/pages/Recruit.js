

import logo from "../assets/Frame.png";
import applicantPhoto from "../assets/applicant.png";
import saveLogo from "../assets/saveLogo.png";
import applicantBG from "../assets/applicantBG.png";
import { JobCard } from "../components/JobCard";
import icon from '..//assets/UserProfile.png';
import { ApplicantCard } from "../components/ApplicantCard/ApplicantCard";
import { APPLICANTS_DATA } from "../data/Applicants";

export const Recruit = () => {
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

                <div className="w-auto p-2 ">
                    <div className="border-gray-800 shadow p-4 rounded"> Job Applications</div>
                    <div className="border-gray-800 shadow p-4 rounded"> Shortlisted Candidates</div>
                    <div className="border-gray-800 shadow p-4 rounded"> On-Hold Candidates</div>
                    <div className="border-gray-800 shadow p-4 rounded"> My Jobs </div>
                    <div className="border-gray-800 shadow p-4 rounded"> Edit Company Profile </div>
                    <div className="border-gray-800 shadow p-4 rounded"> Applicant Tracker </div>
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
                        <div className="flex w-full  border-2 rounded-md border-red-500 px-6 py-2  ">UI/UX Developer </div>
                        <div className="flex w-full  border-2 rounded-md border-red-500 px-6 py-2 ">Noida </div>
                    </div>
                    <div className="flex justify-center space-y-3 w-full  border-2 rounded-md border-red-500 px-6 py-2 text-red-500 font-semibold"> Filter  </div>


                </div>

                <div className="w-auto h-auto  ">

                    <div className="flex flex-row justify-between bg-white text-lg border-gray-200 p-3  border-2">
                        <div>100 Jobs Applications</div>
                        <div> Sort By: Latest </div>
                    </div>




                    {APPLICANTS_DATA.map(application => <ApplicantCard {...application} />)}
                </div>
            </div>


            {/* *********************right panel***************** */}


            <div className="w-2/6 h-auto bg-white rounded mt-2 shadow  ">
                <div className="h-40 mr-10 ">
                    <img
                        className="w-full h-full rounded-sm"
                        src={applicantBG}
                        alt="Display"
                    />
                </div>

                <div className="bg-white-600 flex mr-3 justify-between h-28">
                    <div class="space-y-4">
                        <div className="h-8 w-8 flex items-center justify-center ml-10 -my-3.5">
                            <img
                                className="w-full h-full rounded-full"
                                src={applicantPhoto}
                                alt="photo"
                            />
                        </div>

                        <p className=" flex flex-row capitalize font-semibold text-red-400 text-2xl mx-3">Amit Kumar
                            {/* <img src={saveLogo} style={{
                                
                                height: 25,
                                width: 25,
                                left: 2.25,
                                top: 3.75
                                
                            }} /> */}
                        </p>


                    </div>
                    <div className="space-y-3">
                        <div class="flex mt-8 mr-2 space-x-4">




                        </div>

                    </div>
                </div>
                <div className=" grid grid-cols-3 divide-x divide-gray-300  border-t-2 border-b-2">
                    <div className=" h-16 pl-2 shadow-sm">
                        <p className="text-sm font-semibold">Currently Working</p>
                        <p className="text-xs">Software</p>
                    </div>
                    <div className=" h-16 pl-2 shadow-sm">
                        <p className="text-sm font-semibold">Education</p>
                        <p className="text-xs mt-4">Graduation...</p>
                    </div>
                    <div className=" h-16 pl-2 shadow-sm">
                        <p className="text-sm font-semibold">current CTC</p>
                        <p className="text-xs mt-4">RS.5,00,000 P.A</p>
                    </div>
                </div>
                <div className="ml-5 flex-col space-y-8 mt-4">
                    <p className="h-4 text-lg font-semibold">About</p>
                    <p>Lorem ipsum dolor sit amet</p>
                    <p className="text-left pr-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                        semper in arcu facilisi elementum laoreet. Nisi pellentesque
                        luctus turpis morbi mauris donec. Amet leo sed ipsum, mi. Velit
              tellus, mattis diam ipsum in sed mi.{" "}
                    </p>
                    <p className="text-left pr-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                        semper in arcu facilisi elementum laoreet. Nisi pellentesque
              luctus turpis morbi mauris donec.{" "}
                    </p>
                    <div className=" flex flex-row space-x-4 justify-between px-4">
                        <button className="bg-red-400 hover:bg-blue-900 text-white font-bold py-1.5 px-6 rounded ">
                            Shortlisted
                            </button>
                        <button className="bg-white hover:bg-blue-900 text-red-400  border-4 border-red-400 font-bold py-1.5 px-6 rounded">
                            Rejected
                            </button>
                    </div>
                </div>
            </div>


        </div>

    )
}