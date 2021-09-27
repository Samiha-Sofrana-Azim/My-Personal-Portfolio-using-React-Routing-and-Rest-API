import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Works from "./components/Works"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import ContactForm from "./components/ContactForm"
import FeedBack from "./components/FeedBack"
import Footer from "./components/Footer"
import './app.css'

const  App = () =>{
  return (
  
   <Router>
   <div className="app">
   <NavBar />
   <Switch>
   <Route exact path="/" component={Home} />
   <Route exact path="/about" component={About} />
   <Route exact path="/skills" component={Skills} />
   <Route exact path="/works" component={Works} />
   <Route exact path="/blog" component={Blog} />
   <Route exact path="/contact" component={Contact} />
   <Route exact path="/contactform" component={ContactForm} />
   <Route exact path="/feedback" component={FeedBack} />
   </Switch>
   <Footer />
   </div>
   </Router>
  )
  
}

export default App;