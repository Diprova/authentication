import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/homePage";
import SignUp from "./components/Auth/signUp";
import SignIn from "./components/Auth/signIn";
import Profile from "./components/dashboard/index";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/signIn" component={SignIn} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}
