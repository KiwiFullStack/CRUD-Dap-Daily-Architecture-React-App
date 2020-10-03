import axios from "axios";

var urlprefix = "http://localhost:4000/api";

var ApiHook = {
  serverUrl: "http://localhost:4000/",

  getPosts: () => {
    return axios.get(urlprefix + "/posts");
  },
  getSinglePost: (id) => {
    return axios.get(urlprefix + "/posts/" + id);
  },
  addPost: (data) => {
    return axios.post(urlprefix + "/posts", data);
  },
  deletePost: (id) => {
    return axios.delete(urlprefix + "/posts/" + id);
  },
  updatePost: (id, data) => {
    return axios.put(urlprefix + "/posts/" + id, data);
  },
  uploadFile: (formData) => {
    var settings = { headers: { "Content-Type": "multipart/form-data" } };
    return axios.post(urlprefix + "/posts", formData, settings);
  },
};

export default ApiHook;
