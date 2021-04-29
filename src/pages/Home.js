import { connect } from "react-redux"
import JobCard from "../components/JobCard"
import { SideListItem } from "../components/SideList/SideListItem"

const Home = ({ allJobs }) => {
    return(<div className="w-screen bg-gray-100 h-screen flex justify-center">
        <div className="container flex space-x-6 mx-20 mt-20">
            <div className="w-1/5 h-auto ">

                <div className="divide-y-2 divide-gray-300 divide-solid border-gray-300 border-solid border-2 rounded">
                    <SideListItem title={"Assesments"}/>
                    <SideListItem title={"All Jobs"} url="/"/>
                    <SideListItem title={"Saved"} url="/saved"/>
                    <SideListItem title={"Applications"} />
                </div>

            </div>
            <div className="w-2/5 h-auto space-y-4">
                {allJobs.map(job => <JobCard job={job} key={job.id}/>)}
            </div>
            <div className="w-2/5 h-auto space-y-4">
                Srikanth Section JobDetails component
            </div>
        </div>
    </div>)
}

const mapStateToProps = ({ allJobs }) => ({ allJobs })

export default connect(mapStateToProps)(Home);
