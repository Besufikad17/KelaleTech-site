import React from 'react';
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Jobs from "./components/Jobs";
import Footer from "./components/FooterLayout";
import Newsletter from "./components/Newsletter";
import NewsletterDetail from './components/NewsletterDetail';
import "antd/dist/antd.css";
import "./components/assets/css/Main.css";
import {BrowserRouter, Route, Switch} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
        <div>
              <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/about" exact component={About} />
                    <Route path="/jobs" component={Jobs} />
                    <Route path="/newsletter" component={Newsletter} />
                    <Route path="/newsletterdetail" component={NewsletterDetail} />
              </Switch>
              <br/><br/><br/><br/><br/>
              <Footer/>
        </div>
      </BrowserRouter>
  );
}

export default App;
