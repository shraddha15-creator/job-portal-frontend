import { Header } from "../components/Header";
import PostJob from "./PostJob";
import { Applications } from "./Applications";
import { Assesments } from "./Assessments";
import {Home} from "./Home";
import  MyJobs  from "./MyJobs";
import SavedJobs from "./SavedJobs";
import { Recruit } from "./Recruit";

const { Switch, Route } = require("react-router");

function App() {
  return (
    <div className="App">
      <Header />
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/postjob" component={PostJob}/>
        <Route path="/recruit" component = { Recruit } />
        <Route path="/saved" component={SavedJobs} />
        <Route path="/applications" component={Applications} />
        <Route path="/assesments" component={Assesments} />
        <Route path="/jobs" component={MyJobs} />
      </Switch>

    </div>
  );
}

export default App;
