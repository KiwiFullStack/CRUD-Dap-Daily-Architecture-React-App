import axios from 'axios';


var urlprefix = 'http://localhost:4000/api'

var ApiHook = {

    serverUrl : 'http://localhost:4000/',

    getPosts : () => {
        return axios.get(urlprefix+'/posts')
    },
    getSinglePost : (id) => {
        return axios.get(urlprefix+'/posts/'+id)
    },
    addPost : (data) => {
        return axios.post(urlprefix+'/posts',data)
    },
    deletePost : (id) => {
        return axios.delete(urlprefix+'/posts/'+id)
    },
    updatePosts : (id,data) => {
        return axios.put(urlprefix+'/posts/'+id,data)
    },
}

export default ApiHook
