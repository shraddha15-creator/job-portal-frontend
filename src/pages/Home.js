import { connect } from "react-redux"
//import {JobCard} from "../components/JobCard"
//import { SideListItem } from "../components/SideList/SideListItem"

const Home = ({ allJobs }) => {
    return(<div className="w-screen bg-gray-200 h-screen flex ">
        
        
        <div className="container flex space-x-6 mx-20 mt-20">
            
           {/* <div>
                {allJobs.map(job => <JobCard job={job} key={job.id}/>)}
           </div>*/}
        
            
        </div>
    </div>)
}

const mapStateToProps = ({ allJobs }) => ({ allJobs })

export default connect(mapStateToProps)(Home);
