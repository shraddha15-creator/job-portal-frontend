import { connect } from "react-redux";
import { saveJob, unsaveJob } from '../../redux/actions/jobActions';


import companyLogo from "../../assets/companyLogo.png";
import heart from "../../assets/heart.png";
import checked from "../../assets/checked.png";
import people from "../../assets/people.png";

export const JobCard = ({ jobTitle, companyName, logo, skills, employees, details }) => {

    return (
        <div className="bg-white border-b-2 border-r-2 border-l-2 border-solid border-gray-200 w-full ">
            <div className="flex  justify-between items-center">
                    
                   <div className="flex">
                    
                    <div className="rounded-full p-4">
                        <img src={companyLogo} style={{ height: 60, width: 60, borderRadius: 50 }} />
                    </div>
                    <div className="ml-4 justify-around flex flex-col">
                        <div className="font-semibold text-red-500 pt-6">{jobTitle}</div>
                        <div className="flex flex-row space-x-4 mt-3 font-semibold text-sm text-black ">{companyName}
                            <img src={people} style={{
                                marginTop: 4,
                                marginLeft: 8, 
                                height: 15,
                                width: 18,
                                left: 5,
                                top: 5,
                            }} />
                            <p className=" font-normal text-xs text-gray-600 mt-1 ml-8">{employees}</p>
                        </div>
                        <p className="text-gray-600 pt-4">lorem lipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className="flex w-86 mr-20 flex-wrap pt-3 ">{details.map(detail =><div className=" font-medium text-sm pr-3" >{detail} </div>)}
                            <p className="flex ml-28  pb-5 text-red-500 font-normal text-sm"> 1 Day </p>
                        </div>
                               
                    </div>
                </div>

                {/* <div className="flex space-x-4 ">{skills.map(skill =><div className="bg-blue-200 rounded-md p-2 text-blue-900 font-semibold">{skill}</div> )}</div> */}

                <div className="flex flex-col space-y-20 mr-4 my-2">
                    <img src={checked} style={{
                        height: 25,
                        width:25,
                        left: 2.25,
                        top: 2.4000244140625,
                    }} />

                    <img src={heart} style={{
                        height: 22,
                        width: 25,
                        left: 2.25,
                        top: 3.75,
                    }} />

                </div>
            </div>
        </div>
    )
}


