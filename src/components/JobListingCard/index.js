import { connect } from "react-redux";
//import { saveJob, unsaveJob } from '../../redux/actions/jobActions';


export const JobListingCard = ({job}) => {

    const { jobTitle, companyName, date, companyLogo,id } =  job;

    //const isSaved = savedJobs.filter(savedJob => savedJob.id === id).length > 0;

    return (<div className="bg-white shadow-dm  w-full h-full mr-8  p-4">
        
        <div className="flex  ">
            <div className="flex">



                {/*<div className="border-2 h-12 w-12 text-center mt-2">logo</div>*/}
                <div className="shadow-2xl w-10 h-10  mt-2 ml-2   "><img src="https://www.spamweed.com/wp-content/uploads/2017/02/site.png " class="rounded-3xl justify-center"></img></div>
                <div className="ml-4  flex flex-col">
                    <div className="flex  space-x-96 ">
                    <div className="font-semibold text-sm mt-2 text-red-500">{jobTitle}</div>
                    <div className=" underline text-xs px-10 "><p>203 Applications</p></div>
                    </div>
                    <div className="flex space-x-2">
 
 
                         <div className="font-thin text-xs flex mt-2 ">{date}</div>






                    </div>


                    <div className="flex space-x-3 text-xs mt-2 mb-4 " ><p>Edit</p>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                        <p>Pause</p>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p>Delete</p>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </div>
                    <div className="border-b-2 border-red-500  px-4 "></div>

                </div>




            </div>
            {/*<div className="flex space-x-4">{skills.map(skill => <div className="bg-yellow-200 p-2 rounded-lg text-yellow-700">{skill}</div>)}</div>
            <div> {isSaved ? <button onClick={() => unsaveJob(job)}>unsave</button> : 
                
                <button onClick={() => saveJob(job)}>save</button>
                }</div>*/}
        </div>
    </div>)
}
