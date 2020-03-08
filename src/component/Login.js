import React, { Component } from "react";
import { connect } from "react-redux";
import { generateLoginToken } from '../actions/login.action';
import { PRODUCT } from '../routes/constant';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: null,
        password: null
    };
  }

  handleChange = (field, e) => {
      this.setState({
          [field]: e.target.value
      })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.generateLoginToken(this.state.name, this.state.password).then((response) => {
      if(response){
        this.props.history.push(PRODUCT);
      }
    })
  }

  render() {
    return (
      <div>
          Login
        <form>
            <div>Username</div>
            <input type="text" value={this.state.name} onChange={(e) =>this.handleChange('name', e)}/>
            <div>Password</div>
            <input type="password" value={this.state.password} onChange={(e) => this.handleChange('password', e)}/>
            <button onClick={this.handleSubmit}>Login</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

Login = connect(
  mapStateToProps,
  { generateLoginToken }
)(Login);

export default Login;