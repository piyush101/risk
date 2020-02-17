import React, { Component } from 'react';
import './App.css';
class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      user_id: '',
      password: '',
    };
  }

  useridchanger=(event)=>
  {
    this.setState={user_id:event.target.value};
  }
  userpasschange=(event)=>
  {
    this.setState={password:event.target.value};
  }
  mySubmitHandler=(event) =>
  {
    alert("you have submitted");
  }

  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      <div className="form-group" >
      <label>User ID:</label>
      <input
        type='text'
        name='User_id'
        className="form-control" id="User_id" placeholder="Enter User_id" 
        onChange={this.useridchanger}
      />
      </div>
      <div className="form-group">
      <label>Password:</label>
      <input
        type='Password'
        name="password"
        id="Password"
        className="form-control"
        onChange={this.userpasschange}
      />
      </div>
      <div>
      <input type="submit" className="btn btn-primary"></input>
      </div>

      </form>
    );
  }
}
export default App;
