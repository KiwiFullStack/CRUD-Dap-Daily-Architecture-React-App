import React from 'react';
import { Link } from "react-router-dom";
class FeedsComp extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
  
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
              <img src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-56-dsc2965456645345639.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=db42e7af25ea1c609baa0f34408a9fce"  />
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
            <div className="posts">
              <div className="post-group">
                <div className="profile-title-location">
                  <div className="post-profilepic">
                    <img src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-56-dsc2965456645345639.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=db42e7af25ea1c609baa0f34408a9fce"  />
                  </div>
                  <div className="title-of-photo">Glass Tower</div>
                  <div className="location">
                    <div className="location-thumbtack">
                      <i className="fas fa-thumbtack" />
                    </div>
            New York City, USA
          </div>
                </div>
                <div className="posted-image">
                  <img src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/p-hk-eye-0027.jpg?w=1300&dpr=1&fit=default&crop=default&q=80&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=db4aabdbe31885393fa28f3e76143641"  />
                </div>
                <div className="edit-like-fav">
                  <div className="left">
                    <Link to="/edit/:id"><i className="far fa-edit" /></Link>
                    <i className="fas fa-heart" />
                    <i className="fas fa-star" />
                  </div>
                  <div className="right">
                    <i className="fas fa-trash" />
                  </div>
                </div>
                <div className="comment comment1">
                  <img src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/277-pom-009777-chim.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=83bc3f756995eab9c6176211c3fbee62"  />
                  <div className="user-comment1">Wow! Nice view of the building.</div>
                </div>
                <div className="comment comment2">
                  <img src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/277-pom-009777-chim.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=83bc3f756995eab9c6176211c3fbee62"  />
                  <div className="user-comment2">What time did you take the photo?</div>
                </div>
                <div className="comment comment3">
                  <img src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-56-dsc2965456645345639.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=db42e7af25ea1c609baa0f34408a9fce"  />
                  <form action className="comment-form">
                    <input
                      type="text"
                      id="comment-input"
                      placeholder="Add a comment ..."
                    />
                    <button type="submit" id="comment-post">
                      Post
            </button>
                  </form>
                </div>
                <div className="footer">
                  <div className="footer-gradient" />
                  <div className="tab1">
                    <i className="fas fa-building" />
                  </div>
                  <Link to="/create" className="tab2"><i className="fas fa-plus" /></Link>
                  <div className="tab3">
                    <i className="fas fa-star" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    )
  }
}


export default FeedsComp;
