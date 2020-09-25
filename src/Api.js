import axios from 'axios';


var urlprefix = 'http://localhost:4000/api'

var ApiHook = {

    getProjects : () => {
        return axios.get(urlprefix+'/posts')
    },
    getSingleProject : (id) => {
        return axios.get(urlprefix+'/posts/'+id)
    },
    addProjects : (data) => {
        return axios.post(urlprefix+'/posts',data)
    },
    updateProjects : (id,data) => {
        return axios.put(urlprefix+'/posts/'+id,data)
    },
}

export default ApiHook
