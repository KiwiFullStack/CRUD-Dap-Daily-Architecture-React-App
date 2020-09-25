import React, { Component } from "react";
import { Link } from "react-router-dom";
import ApiHook from "./Api";

class Post extends Component {
  handleTrashClick = () => {
    var { id, loadPosts } = this.props;
    ApiHook.deletePost(id);
    loadPosts();
  };
  render() {
    var { id, name, description, location, description, photo } = this.props;
    return (
      <div className="post-group">
        <div className="profile-title-location">
          <div className="post-profilepic">
            <img src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-56-dsc2965456645345639.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=db42e7af25ea1c609baa0f34408a9fce" />
          </div>
          <div className="post-info">
            <div className="title-of-photo">{name}</div>
            <div className="location">
              <div className="location-thumbtack">
                <i className="fas fa-thumbtack" />
              </div>
              {location}
            </div>
            <div className="description">
              <div className="location-thumbtack"></div>
              {description}
            </div>
          </div>
        </div>
        <div className="posted-image">
          <img src={photo} />
        </div>
        <div className="edit-like-fav">
          <div className="left">
            <Link to={"/posts/" + id + "/edit"}>
              <i className="fas fa-edit"></i>
            </Link>
            <i className="fas fa-heart" />
            <i className="fas fa-star" />
          </div>
          <div className="right">
            <i onClick={this.handleTrashClick} className="fas fa-trash"></i>
          </div>
        </div>
        <div class="commentsbox">
          <div className="comment comment1">
            <img src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/277-pom-009777-chim.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=83bc3f756995eab9c6176211c3fbee62" />
            <div className="user-comment1">Wow! Nice view of the building.</div>
          </div>
          <div className="comment comment2">
            <img src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/277-pom-009777-chim.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=83bc3f756995eab9c6176211c3fbee62" />
            <div className="user-comment2">
              What time did you take the photo?
            </div>
          </div>
          <div className="comment comment3">
            <img src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-56-dsc2965456645345639.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=db42e7af25ea1c609baa0f34408a9fce" />
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
        </div>
      </div>
    );
  }
}

export default Post;
