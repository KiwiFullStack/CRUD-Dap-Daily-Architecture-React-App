import React from "react";
import { Link } from "react-router-dom";
import ApiHook from "../Api";
import Post from "../Post";
class FeedsComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          name: "Build a hut",
          description: "Nice project",
        },
        {
          id: 2,
          name: "Make a basket",
          description: "Pretty project",
        },
      ],
    };
  }

  loadPosts = () => {
    ApiHook.getPosts().then((res) => {
      this.setState({ posts: res.data });
    });
  };
  componentDidMount() {
    this.loadPosts();
  }

  render() {
    return (
      <div className="newsfeed-page">
        <div className="blackbackground"></div>
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
              alt="DAP"
              src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-56-dsc2965456645345639.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=db42e7af25ea1c609baa0f34408a9fce"
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
        <div className="post-container">
          {this.state.posts.map((post) => {
            var postProps = {
              ...post,
              key: post.id,
              loadPosts: this.loadPosts,
            };
            return <Post {...postProps} />;
          })}
        </div>
        <div className="footer">
          <div className="footer-gradient" />
          <div className="tab1">
            <i className="fas fa-building" />
          </div>
          <Link to="/create" className="tab2">
            <i className="fas fa-plus" />
          </Link>
          <div className="tab3">
            <i className="fas fa-star" />
          </div>
        </div>
      </div>
    );
  }
}

export default FeedsComp;
