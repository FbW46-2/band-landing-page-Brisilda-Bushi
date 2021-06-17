import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useLocation,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import React from "react";
import Main from "./Pages/Main";
import Vocals from "./Pages/Vocals";
import Guitar from "./Pages/Guitar";
import Bass from "./Pages/Bass";
import Drums from "./Pages/Drums";
import PageNotFound from "./Pages/PageNotFound";
import Logo from "./images/logo.png";

function Content() {
  const location = useLocation();
  return (
    <div>
      <TransitionGroup>
        <CSSTransition classNames="fade" timeout={300} key={location.key}>
          <Switch location={location}>
            <Route path="/" exact component={Main} />
            <Route path="/vocals" exact component={Vocals} />
            <Route path="/guitar" exact component={Guitar} />
            <Route path="/bass" exact component={Bass} />
            <Route path="/drums" exact component={Drums} />
            <Route path="*" exact component={PageNotFound} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="Header">
        <div>
          <img className="logo" src={Logo} alt=""></img>
          <NavLink
            className="headerLink"
            activeClassName="is-active"
            activeStyle={{ color: "white" }}
            exact="true"
            to="/"
          >
            Red Hot Chili Peppers
          </NavLink>
        </div>
      </div>
      <div className="Navbar">
        <NavLink
          activeClassName="is-active"
          activeStyle={{ color: "white" }}
          to="/vocals"
        >
          Vocals
        </NavLink>
        <NavLink
          activeClassName="is-active"
          activeStyle={{ color: "white" }}
          to="/guitar"
        >
          Guitar
        </NavLink>
        <NavLink
          activeClassName="is-active"
          activeStyle={{ color: "white" }}
          to="/bass"
        >
          Bass
        </NavLink>
        <NavLink
          activeClassName="is-active"
          activeStyle={{ color: "white" }}
          to="/drums"
        >
          Drums
        </NavLink>
      </div>
      <Content />
    </Router>
  );
}

export default App;
