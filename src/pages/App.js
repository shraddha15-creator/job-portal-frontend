import { Header } from "../components/Header";
import { Applications } from "./Applications";
import { Assesments } from "./Assessments";
import { Home } from "./Home";
import { Recruit } from "./Recruit";

import SavedJobs from "./SavedJobs";


const { Switch, Route } = require("react-router");

function App() {
  return (
    <div className="App font-poppins"> 
      <Header />
      <Switch>
        <Route exact path="/" component = {Home} />
        <Route path="/recruit" component = { Recruit } />
        <Route path="/saved" component={SavedJobs} />
        <Route path="/applications" component={Applications} />
        <Route path="/assesments" component={Assesments} />
      </Switch>
      
    </div>
  );
}

export default App;
