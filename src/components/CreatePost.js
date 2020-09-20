import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";


class CreatePostComp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      activeView: 'CreatePost',
    }
  }


  render() {
    return (
      <div className="app">
        <div className="newsfeed-page">
        <div class="blackbackground">
          </div>
          <div className="gradient" />
          <div className="fixedtop">
            <div className="nav-top">
              <div className="update-profile">
                <i className="far fa-edit" />
              </div>
              <div className="heading">
                <div className="d">
                  D<div className="daily">aily</div>
                </div>
                <div className="a">
                  A<div className="architecture">rchitecture</div>
                </div>
                <div className="p">
                  P<div className="post">ost</div>
                </div>
              </div>
            </div>
            <div className="main-profilepic">
              <img src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-56-dsc2965456645345639.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=db42e7af25ea1c609baa0f34408a9fce" alt />
              <div className="email-updates">
                sarah2020@gmail.com
        <div className="profile-edit"></div>
              </div>
            </div>
            <div className="fixed-profile">
              <div className="tab1tab2">
                <div className="first-backgroundimg"></div>
              </div>
            </div>
          </div>
          <div className="addpost addpost-container">
            <div className="add-new-posts">
            <Link to="/newsfeed" className="close"><i className="fas fa-window-close" /></Link>
              <div className="add-a-new-post">- Add a New Post -</div>
              <form action>
                <div className="form-group2">
                  <input
                    type="text"
                    className="title-photo"
                    name="title-input"
                    id="title-input"
                    placeholder="Name of Building"
                  />
                </div>
                <div className="form-group2">
                  <input
                    type="text"
                    className="location-photo"
                    name="location-input"
                    id="location-input"
                    placeholder="Location"
                  />
                </div>
                <div className="form-group2">
                  <button className="inside-input">
                    <i className="fas fa-plus" />
                  </button>
                  <input
                    type="text"
                    className="upload-images"
                    name="location-input"
                    id="location-input"
                    placeholder=" Upload images"
                  />
                </div>
                <div className="form-group2">
                  <input
                    type="text"
                    className="description"
                    name="description-input"
                    id="description-input"
                    placeholder="Description of building"
                  />
                </div>
                <div className="buttons-addpostdone">
                  <button type="button" className="btn btn-newpostdone">
                    Done
          </button>
                </div>
              </form>
            </div>
            <div className="footer">
              <div className="footer-gradient" />
              <Link to="/newsfeed" className="tab-tab1"><i className="fas fa-building" /></Link>
              <div className="tab-tab2">
                <i className="fas fa-plus" />
              </div>
              <div className="tab-tab3">
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
        </div>


      </div>
    )
  }
}


export default CreatePostComp;