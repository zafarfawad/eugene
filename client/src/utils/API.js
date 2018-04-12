import axios from "axios";
const BASEURL = "https://api.giphy.com/v1/gifs/search?";
const APIKEY = "api_key=h3ZfcokVkTszyvNg8AB93XpOtTMKzM7B";

//api.giphy.com/v1/gifs/search?api_key=h3ZfcokVkTszyvNg8AB93XpOtTMKzM7B&q=apple&limit=25&offset=0&rating=G&lang=en

export default {
  // Gets all books
  getItems: function() {
    return axios.get("/api/");
  },
  // Gets the book with the given id
  getItem: function(id) {
    return axios.get("/api/" + id);
  },
  // Deletes the book with the given id
  deleteItem: function(id) {
    console.log(id);
    return axios.delete("/api/" + id);
  },
  // Saves a book to the database
  saveItem: function(itemData) {
    return axios.post("/api/", itemData);
  },
 

  getImages: function(topic) {
    console.log('API TOPIC',topic)
    const myQuery = "&q=" + topic;
    const URL = BASEURL + APIKEY + myQuery + "&limit=1";
    console.log('APIURL',URL);
    return axios.get(URL);
  }
};