import { Header } from "../components/Header";
//import JobCard from "../components/JobCard";
//import Header2 from "../components/Header2";

//import { Applications } from "./Applications";
//import { Assesments } from "./Assessments";
import Home from "./Home";
import  MyJobs  from "./MyJobs";
//import SavedJobs from "./SavedJobs";

const { Switch, Route } = require("react-router");

function App() {
  return (
    <div className="App">
      <Header />
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/jobs" component={MyJobs} />
        {/*<Route path="/applications" component={Applications} />
        <Route path="/assesments" component={Assesments} />*/}
      </Switch>

    </div>
  );
}

export default App;
