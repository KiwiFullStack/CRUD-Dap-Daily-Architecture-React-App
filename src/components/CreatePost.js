import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import ApiHook from "../Api";

class EditPostComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        // name:'Sunset on Waiheke',
        // description:'Painting by a local artist'
      },
    };
  }

  componentDidMount() {
    var id  = this.props.match.params.id;
    ApiHook.getSinglePost(id).then((res) => {
      this.setState({ post: res.data });
    });
  }




  handleFormSubmit = (e) => {
    e.preventDefault()

    var formData = new FormData(this.form)

    ApiHook.uploadFile(formData)
      .then(res => res.data)

      .then(fileName => {
        var {currentUser} = this.props;
        var data = {
          name: formData.get("title-input"),
          description: formData.get("location-input"),
          location: formData.get("description-input"),
          photo: formData.get("photo-input"),
        };
        ApiHook.addPost(data).then(res => this.props.history.push('/newsfeed'));
      })

    }


  render() {
    var { id, name, description, location, description, photo } = this.state.post;
    return (
      <div className="app">
        <div className="newsfeed-page">
          <div class="blackbackground"></div>
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
              <img
                src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-56-dsc2965456645345639.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=db42e7af25ea1c609baa0f34408a9fce"
                alt
              />
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
              <Link to="/newsfeed" className="close">
                <i className="fas fa-window-close" />
              </Link>

              <div className="add-a-new-post">- Edit your post -</div>
              <form onSubmit={this.handleFormSubmit} ref={(el) => {this.form = el}}>
                <div className="form-group2">
                  <input
                    type="text"
                    className="title-photo"
                    name="title-input"
                    id="title-input"
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group2">
                  <input
                    type="text"
                    className="location-photo"
                    name="location-input"
                    id="location-input"
                    placeholder="Location of post"
                  />
                </div>
                <div className="form-group2">
                  <input
                    type="text"
                    className="post-desc"
                    name="description-input"
                    id="description-input"
                    placeholder="Write a description"
                  />
                </div>
                <div className="form-group2">
                  <input
                  className="upload-images"
                  name="photo-input"
                  id="photo-input"
                    placeholder="Add link to photo here."
                  />
                </div>

                <div className="buttons-addpostdone">
                  <button type="submit" className="btn btn-newpostdone">
                    Done
                  </button>
                </div>
              </form>
            </div>
            <div className="footer">
              <div className="footer-gradient" />
              <div className="tab-tab11">
                <i className="fas fa-building" />
              </div>
              <Link to="/create" className="tab-tab22">
                <i className="fas fa-plus" />
              </Link>
              <div className="tab-tab3">
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditPostComp;
