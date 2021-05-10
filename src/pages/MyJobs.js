import {JobCard} from "../components/JobCard";
import Header2 from "../components/JobsHeader";
import { connect } from "react-redux";

export const MyJobs = ({ jobs }) => {
    return (<div>
        <Header2 />

       { jobs.map(job=> <JobCard job={job} key={job.id}/>)}
        
    </div>
    )
}

const mapStateToProps = (state) => {
    return ({
       jobs:  state.allJobs
    })
}

export default connect(mapStateToProps)(MyJobs);