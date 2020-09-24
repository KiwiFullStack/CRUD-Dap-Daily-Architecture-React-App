import axios from 'axios';
var urlprefix = 'http://localhost:4000/api'

var ApiHook = {

    getProjects : () => {
        return axios.get(urlPrefix+'/posts')
    },
    getSingleProject : (id) => {
        return axios.get(urlPrefix+'/posts/'+id)
    },
    addProjects : (data) => {
        return axios.post(urlPrefix+'/posts',data)
    },
    updateProjects : (id,data) => {
        return axios.put(urlPrefix+'/posts/'+id,data)
    },
}

export default ApiHook
