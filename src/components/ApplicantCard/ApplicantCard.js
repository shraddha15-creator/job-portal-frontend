import applicantPhoto from "../../assets/applicant.png";
import saveLogo from "../../assets/saveLogo.png";
import checked from "../../assets/checked.png";

export const ApplicantCard = ({ applicantName, applicantDetails, skills }) => {

    return (
        <div className="bg-white border-b-2 border-r-2 border-l-2 border-solid border-gray-200 w-full ">
            <div className="flex  justify-between items-center">

                <div className="flex flex-col">
                    <div className="rounded-full p-3">
                        <img src={applicantPhoto} style={{ height: 60, width: 60, borderRadius: 50 }} />
                    </div>

                    <div className="flex flex-col pl-4">
                        <div className="font-semibold text-blue-900 pt-2 pl-2">{applicantName}</div>
                        <div className="flex w-86 mr-20 flex-wrap py-4 pl-2 ">{applicantDetails.map(applicantDetail => <div className=" font-medium text-sm pr-3" >{applicantDetail} </div>)} </div>
                        <div className="flex space-x-4 p-2 pl-2 ">{skills.map(skill => <div className="bg-blue-900 rounded-md p-2 text-white text-sm font-extralight">{skill}</div>)}</div>
                    </div>
                    
                </div>
                <div className="flex flex-col space-y-20 mr-4 my-2">
                    <img src={checked} style={{
                        height: 25,
                        width: 30,
                        left: 2.25,
                        top: 2.4000244140625,
                    }} />

                    <img src={saveLogo} style={{
                        height: 25,
                        width: 30,
                        left: 2.25,
                        top: 3.75,
                    }} />

                </div>

            </div>
        </div>
    )

}