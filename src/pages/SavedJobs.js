import { connect } from "react-redux"
// import JobCard from "../components/JobCard"

const SavedJobs = ({ savedJobs }) => {
    return (<div className="w-4/5 h-auto space-y-4">
        {/* {savedJobs.map(job => <JobCard job={job} key={job.id} />)} */}
    </div>)
}

export default connect(({savedJobs}) => ({savedJobs}))(SavedJobs);