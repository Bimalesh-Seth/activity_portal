import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getBranches} from "../../actions/branchAction";
import {getDegrees} from "../../actions/degreeAction";
import {registerUser} from "../../actions/userAction";

class StudentRegistration extends Component{

  constructor(){
    super();
    this.state = {
      firstName:"",
      middleName:"",
      lastName:"",
      rollNo:"",
      erpId:"",
      email:"",
      mobileNo:"",
      password:"",
      year:"",
      division:"",
      branchId:"",
      degreeId:"",
      studentType:"",
      DOB:"",
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount(){
    this.props.getBranches();
    this.props.getDegrees();
  }


  onChange = (e) => {
    this.setState({[e.target.name]:e.target.value});
  }

  onSubmit = (e) => {
    e.preventDefault();
    const studentRegisterInfo = {
      firstName: this.state.firstName,
      middleName: this.state.middleName,
      lastName: this.state.lastName,
      rollNo: this.state.rollNo,
      erpId: this.state.erpId,
      email: this.state.email,
      mobileNo: this.state.mobileNo,
      password: this.state.password,
      year: this.state.year,
      division: this.state.division,
      branchId: this.state.branchId,
      degreeId: this.state.degreeId,
      studentType: this.state.studentType,
      DOB:this.state.DOB,
    }
    //console.log(studentRegisterInfo);
    this.props.registerUser(studentRegisterInfo, this.props.history);
  }


    render(){

      const {branches} = this.props.branch;

      const branchList = branches.map((branch) => (
        <option value={branch.id}>{branch.branchName}</option>
      ));

      const {degrees} = this.props.degree;

      const degreeList = degrees.map((degree) => (
        <option value={degree.id}>{degree.degreeName}</option>
      ))

        return(
        <div className="registerMainDiv">
        <div className="rcenterMainDiv">
            <div className="registerTitle"><b>INTERNSHIP PORTAL</b></div>

            <div id="registerformMain">
            <p>Enter Details:</p>
        
            <div className="row">      
              <div className="col-md-4">
                <input type="text" placeholder="First Name" id="fname" name="firstName" value={this.state.firstName} onChange={this.onChange} />
              </div>
              <div className="col-md-4">
                <input type="text" placeholder="Middle Name" name="middleName" value={this.state.middleName} onChange={this.onChange} />
              </div>
              <div className="col-md-4">
                <input type="text" placeholder="Last Name" name="lastName" value={this.state.lastName} onChange={this.onChange} />
              </div>
            </div>
              
            <div className="row">
              <div className="col-md-6">
                <input type="text" placeholder="Roll Number" name="rollNo" value={this.state.rollNo} onChange={this.onChange} />
              </div>
              <div className="col-md-6">
                <input type="text" placeholder="ERP ID" name="erpId" value={this.state.erpId} onChange={this.onChange} />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <input type="text" placeholder="Email ID" name="email" value={this.state.email} onChange={this.onChange} />
              </div>
              <div className="col-md-6">
                <input type="text" placeholder="Mobile Number" name="mobileNo" value={this.state.mobileNo} onChange={this.onChange} />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <input type="password" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.onChange} />
              </div>
              <div className="col-md-6">
                <input type="password" placeholder="Re-Enter Password" />
              </div>
            </div>

            <div className="row">
            <div className="col-md-6">
                <input type="text" placeholder="Year" name="year" value={this.state.year} onChange={this.onChange} />
              </div>
              <div className="col-md-6">
                <input type="text" placeholder="Division" name="division" value={this.state.division} onChange={this.onChange} />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
              <select id="selectDrp" name="branchId" value={this.state.branchId} onChange={this.onChange} >
                <option value="">Branch</option>
                {branchList}
              </select>
             </div>

             <div className="col-md-6">
              <select id="selectDrp" name="degreeId" value={this.state.degreeId} onChange={this.onChange} >
                <option value="">Degree Type</option>
                {degreeList}
              </select>
             </div>
            </div>
            
            <br />
            <div className="row">
             <div className="col-md-12">
              Admission Type: <br />
              <input type="radio" id="regular" name="studentType" value="Regular" checked={this.state.studentType === "Regular"} onChange={this.onChange} /> Regular
              <input type="radio" id="DSE"  name="studentType" value="DSE" checked={this.state.studentType === "DSE"} onChange={this.onChange} style={{marginLeft: "30px"}}/> Direct Second Year (DSE)
            </div>
            </div>
            
            <br />
            <div className="row">
              <div className="col-md-6">
                Date Of Birth:
              <input type="date" name="DOB" value={this.state.DOB} onChange={this.onChange} style={{marginTop:"0px"}} />
              </div>
            </div>

            <br />
              <button className="btn btn-primary" onClick={this.onSubmit}>Register</button>
            </div>
        </div>
    </div>
    );
    }
}

StudentRegistration.propTypes = {
  getBranches:PropTypes.func.isRequired,
  branch:PropTypes.object.isRequired,
  getDegrees:PropTypes.object.isRequired,
  degree:PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  branch:state.branch,
  degree:state.degree,
})


export default connect(mapStateToProps, {getBranches, getDegrees, registerUser})(StudentRegistration);