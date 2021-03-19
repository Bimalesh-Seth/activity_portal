import React, { Component } from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {loginUser} from "../../actions/userAction";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      erpId: "",
      password: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const loginRequest = {
      erpId: this.state.erpId,
      password: this.state.password,
    };
    this.props.loginUser(loginRequest,this.props.history);
  };

  componentDidMount(){
     
    if(this.props.security.validToken && this.props.security.user.accessCode === "Student"){
      this.props.history.push("/studentProfile");
    }else if(this.props.security.validToken && this.props.security.user.accessCode === "Faculty"){
      this.props.history.push("/facultyProfile");
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.security.validToken && nextProps.security.user.accessCode === "Student"){
      this.props.history.push("/studentProfile");
    }else if(nextProps.security.validToken && nextProps.security.user.accessCode === "Faculty"){
      this.props.history.push("/facultyProfile");
    }
  }

  render() {
    return (
      <div className="loginMainDiv bgImage">
        <div className="centerMainDiv">
          <div className="loginTitle">
            <b>INTERNSHIP PORTAL</b>
          </div>
          <div id="loginformMain" >
            <input
              type="text"
              placeholder="Enter ERP ID"
              name="erpId"
              onChange={this.onChange}
              value={this.state.erpId}
            />
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={this.onChange}
              value={this.state.password}
            />
            <br />
            <br />

            <button className="btn btn-primary" onClick={this.onSubmit}>
              Login
            </button>
          </div>
          <Link to="/registerStudent">Not Registered? Click here</Link>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
    loginUser:PropTypes.func.isRequired,
    security:PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    security: state.security,
})


export default connect(mapStateToProps, {loginUser})(Login);
