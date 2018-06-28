import axios from "axios";

export default {
    //gets current users and high scores
    getUsers: function() {
        return axios.get("/api/users");
    },
    //adds new users and their scores
    addUsers: function() {
        return axios.post("/api/users", userData);
    }
}