import { connect } from "react-redux";
import { saveJob, unsaveJob } from '../../redux/actions/jobActions';


const JobCard = ({ job, saveJob, savedJobs, unsaveJob }) => {

    const { jobTitle, companyName, companyLogo, skills, id } = job;

    const isSaved = savedJobs.filter(savedJob => savedJob.id === id).length > 0;

    return(<div className="bg-white shadow rounded-lg w-full p-4">
        <div className="flex justify-between items-center">
            <div className="flex">

                <div className="border-2 h-20 w-20 text-center">logo</div>
                <div className="ml-4 justify-around flex flex-col">
                    <div className="font-bold text-xl">{companyName}</div>
                    <div className="font-semibold">{jobTitle}</div>
                </div>
            </div>
            <div className="flex space-x-4">{skills.map(skill => <div className="bg-yellow-200 p-2 rounded-lg text-yellow-700">{skill}</div>)}</div>
            <div> {isSaved ? <button onClick={() => unsaveJob(job)}>unsave</button> : 
                
                <button onClick={() => saveJob(job)}>save</button>
                }</div>
        </div>
    </div>)
}

const mapStateToProps = ({ savedJobs }) => ({savedJobs})

export default connect(mapStateToProps, { saveJob, unsaveJob } )(JobCard)