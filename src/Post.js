import React, {Component} from 'react'
import {Link} from '@reach/router'
import ApiHook from './Api'

class  Post extends Component {

	handleTrashClick = () => {
		var {id,loadPosts} = this.props
		API.deletePost(id)
		loadPosts()
	}
  	render(){
	  	var {id,name,description,location, description,photo} = this.props
	    return (
	      <div className="card project">
	        <img className="card-img-top" src={photo ? API.serverUrl+photo : '/project.jpg'} alt="Card image cap" />
	        <div className="card-body">
	          <h5 className="card-title">{name}</h5>
	          <p className="card-text">{description}</p>
	          <p>
	            <i className="fas fa-heart"></i>
	            <Link to={'/projects/'+id+'/edit'}><i className="fas fa-edit"></i></Link>
	            <i onClick={this.handleTrashClick} className="fas fa-trash"></i>
	          </p>
	        </div>
	      </div>
	    )
  	}
}

export default Post;
