import React, {Component} from 'react';
import API from "../../utils/API";
import "./style.css";
import List from '../List'
import SwipeToDelete from "react-swipe-to-delete-component";


class AddList extends Component {
  state = {
    itemName: "",
    data: [],
    giphy: [],
    img: ""
  };

  componentDidMount() {
    this.loadItems();
  }

  loadImages = topic => {
    console.log(this.state)
    API.getImages(topic)
      .then(res =>
        this.setState({
          img: res.data.data[0].images.fixed_width.url
        })
      )
      .catch(err => console.log(err));
  };
  // console.log(res.data.data[0].images.fixed_width.url)
  //entering username and password
  handleChange = event => {
    const { name, value } = event.target;
    this.setState
    (
      { 
        [name]: value,
        img: this.loadImages(this.state.itemName)
      }
    );
  };

  //logging in
  handleSubmit = event => {
    event.preventDefault();

    console.log("state", this.state);
    //call a sign In function
    // const newItem = {itemName: this.state.itemName};
    const newItem = {
      itemName: this.state.itemName,
      img: this.state.img
      // "https://images.pexels.com/photos/39803/pexels-photo-39803.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    };
    this.addItem(newItem);
  };

  addItem = newList => {
    console.log("additem", this.state)
    API.saveItem(newList)
      .then(res => this.loadImages(this.state.itemName))
      .then(res => this.loadItems())
      .catch(err => console.log(err));
  };

  loadItems = () => {
    API.getItems()
      .then(res =>
        this.setState({
          data: res.data
        })
      )
      .catch(err => console.log(err));
  };

  onDelete = id => {
    API.deleteItem(id)
      // .then(res => this.loadImages(this.state.itemName))
      .then(res => this.loadItems())
      .catch(err => console.log(err));
  };

  onCancel = () => console.info("Canceled");

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <div className="input-group mb-3" onSubmit={this.handleSubmit}>
              <input
                type="text"
                className="form-control"
                placeholder="Add product"
                name="itemName"
                value={this.state.itemName}
                onChange={this.handleChange}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={this.handleSubmit}
                >
                  Add to list
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            {/* <List data = {this.state.data} onDelete = {this.onDelete} onCancel = {this.onCancel} /> */}
            <div className="panel panel-default">
              <ul className="list-group list-unstyled">
                {/* {this.list} */}
                {this.state.data.map(item => (
                  <SwipeToDelete
                    key={item._id}
                    tag="li"
                    classNameTag="tw feed"
                    onCancel={this.onCancel}
                  >
                    <a className="list-group-item d-flex justify-content-between">
                      <img
                        className="rounded"
                        src={item.img}
                      />
                      <h4 className="text-uppercase">{item.itemName}</h4>
                      <p className="text-uppercase " style={{ color: "gray" }}>
                        $26.50
                      </p>
                    </a>
                  </SwipeToDelete>
                ))}
              </ul>
            </div>;
          </div>
        </div>
      </div>
    );
  }
}

  export default AddList;