import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";


class LandingComp extends React.Component {
  render() {
    return (
      <div className="first first-page">
        <div className="first-backgroundimg"></div>
        <div className="blackbackground"></div>
        <div className="container">
          <div className="appname">
            <h1>D A P</h1>
            <p>-Let your imagination go wild-</p>
          </div>
          <Link to="/login" className="taptobegin">Tap here to begin</Link>
        </div>
      </div>
    )
  }
}

export default LandingComp;