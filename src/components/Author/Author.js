import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Author.css';
import store, {UPDATE_AUTHORFIRST, UPDATE_AUTHORLAST} from "../../store";

class Author extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();  // references the state in our store.js
    this.state = {
      authorFirst: reduxState.authorFirst,  //refrences the authorFirst property of our state in store.js
      authorLast: reduxState.authorLast
    };
  }

  handleAuthorFirstChange(nameVal) {
    this.setState({
      authorFirst: nameVal
    });
  }

  handleAuthorLastChange(nameVal) {
    this.setState({
      authorLast: nameVal
    });
  }
  saveChanges() {
    store.dispatch({                     //sends actions to the reducer
      type: UPDATE_AUTHORFIRST,         //which case type to check for to change
      payload: this.state.authorFirst  // Send data to Redux state
    })                                 
    store.dispatch({
      type: UPDATE_AUTHORLAST,
      payload: this.state.authorLast
    })
  }
  render() {
    return (
      <div className="Author forms">
        <div className="input_container">
          <h2>Author First Name:</h2>
          <input
            value={this.state.authorFirst}
            onChange={e => this.handleAuthorFirstChange(e.target.value)}
          />
        </div>
        <div className="input_container">
          <h2>Author Last Name:</h2>
          <input
            value={this.state.authorLast}
            onChange={e => this.handleAuthorLastChange(e.target.value)}
          />
        </div>
        <Link to="/add/name">
          <button onClick={() => this.saveChanges()} className="left_button">
            Previous
          </button>
        </Link>
        <Link to="/add/ingredients">
          <button onClick={() => this.saveChanges()} className="right_button">
            Next
          </button>
        </Link>
      </div>
    );
  }
}

export default Author;
