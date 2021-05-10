import { JobListingCard } from "../components/JobListingCard";
import JobsHeader from "../components/JobsHeader";
import { connect } from "react-redux";

export const MyJobs = ({ jobs }) => {
    return (<div>
        <JobsHeader />

        { jobs.map(job => <JobListingCard job={job} key={job.id} />)}

    </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        jobs: state.allJobs
    })
}

export default connect(mapStateToProps)(MyJobs);