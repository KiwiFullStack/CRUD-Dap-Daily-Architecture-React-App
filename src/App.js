import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreatePostComp from './components/CreatePost';
import EditPostComp from './components/EditPost';
import LoginComp from './components/Login';
import ViewPost from './components/SeePost';
import LandingComp from './components/LandingPage';
import FeedsComp from './components/Feeds';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeView: 'CreatePost',
    }
    console.log('hi')
  }

  render() {
    return (
      <div className="app">
   
        <Router>
          <div>
            <Route exact path='/' component={LandingComp} />
            <Route path='/edit/:id' component={EditPostComp} />
            <Route path='/create' component={CreatePostComp} />
            <Route path='/show/:id' component={ViewPost} />
            <Route path='/login' component={LoginComp} />
            <Route path='/newsfeed' component={FeedsComp} />
          </div>
        </Router>

      </div>
    )
  }
}


export default App;
