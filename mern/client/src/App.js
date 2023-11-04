import './App.css';
import ResponsiveNavBar from "./common/navbar.js";
let {BrowserRouter,Switch,Route,NavLink} = ReactRouterDOM;

function App() {
  return (
    <>
       <BrowserRouter>
        <ResponsiveNavBar />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/resources" component={Resources} />
            <Route path="/courses" component={Courses} />
            <Route path="/mentorship" component={Mentorship} />
            <Route path="/connect" component={Connect} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
