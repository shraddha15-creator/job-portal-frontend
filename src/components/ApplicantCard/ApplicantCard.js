import applicantPhoto from "../../assets/applicant.png";
import saveLogo from "../../assets/saveLogo.png";
import checked from "../../assets/checked.png";

export const ApplicantCard = ({ applicantName, applicantDetails, skills }) => {

    return (
        <div className="bg-white border-b-2 border-r-2 border-l-2 border-solid border-gray-200 w-full ">
            <div className="flex  justify-between items-center">

                <div className="flex flex-col">


                    <div className="ml-4 justify-around flex flex-col">
                        <div className="flex">
                            <div className="rounded-full p-4">
                                <img src={applicantPhoto} style={{ height: 60, width: 60, borderRadius: 50 }} />
                            </div>
                            <div className="font-semibold text-red-500 pt-6">{applicantName}</div>
                        </div>

                        <div className="flex w-86 mr-20 flex-wrap py-4 pl-10 ">{applicantDetails.map(applicantDetail => <div className=" font-medium text-sm pr-3" >{applicantDetail} </div>)} </div>
                    </div>
                    <div className="flex space-x-4 p-2 pl-14 ">{skills.map(skill => <div className="bg-red-400 rounded-md p-2 text-white font-semibold">{skill}</div>)}</div>
                </div>



                <div className="flex flex-col space-y-20 mr-4 my-2">
                    <img src={checked} style={{
                        height: 25,
                        width: 25,
                        left: 2.25,
                        top: 2.4000244140625,
                    }} />

                    <img src={saveLogo} style={{
                        height: 25,
                        width: 25,
                        left: 2.25,
                        top: 3.75,
                    }} />

                </div>

            </div>
        </div>
    )

}