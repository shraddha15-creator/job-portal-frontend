import { Header } from "../components/Header";
import AddJob from "./AddJob";
import { Applications } from "./Applications";
import { Assesments } from "./Assessments";
import Home from "./Home";
import SavedJobs from "./SavedJobs";
const { Switch, Route } = require("react-router");

function App() {
  return (
    <div className="App"> 
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/add-a-job" component={AddJob}/>
        <Route path="/saved" component={SavedJobs} />
        <Route path="/applications" component={Applications} />
        <Route path="/assesments" component={Assesments} />
      </Switch>
      
    </div>
  );
}

export default App;
