import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import BlogCard from "./components/BlogCard";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/Home">
            <div>
              <Hero />
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/Instagram">
            <div>Instagram</div>
          </Route>
          <Route exact path="/Twitter">
            <div>Twitter</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
