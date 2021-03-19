import React, {Component} from "react";
import Header from "../layout/header";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getUnverifiedStudents} from "../../actions/studentAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {verifyStudent} from "../../actions/studentAction";

class VerifyStudent extends Component{

  constructor(){
    super();
    this.state = {
      requiredItem: 0,
    }
  }

componentDidMount(){
  const unVerifiedStudent = {
    "verified": false,
    "semesterId": null,
    "branchId": null,
    "degreeId": null,
  }
  this.props.getUnverifiedStudents(unVerifiedStudent);
}

verifyStudent = (id) => {
  this.props.verifyStudent(id, this.props.history);
}

turnOffOverlay() {
  document.getElementById("overlay").style.display = "none";
}

turnOnOverlay(index) {
  this.setState({
    requiredItem: index
  });
  document.getElementById("overlay").style.display = "block";
}


  render(){
    const {students} = this.props.student;
    const unverifyStudentList = (
        <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Student Name</th>
                    <th>Branch</th>
                    <th>Roll No</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                {students.map((student, index) => (
                  <tr key={index}>
                  <td>{student.firstName} {student.lastName}</td>
                  <td>{student.Branch.branchName}</td>
                  <td>{student.rollNo}</td>
                  <td>
                    <span id="viewmore" onClick={this.turnOnOverlay.bind(this, index)}>View More</span>
                  </td>
                  <td>
                    <button className="btn btn-primary" onClick={this.verifyStudent.bind(this, student.id)}>Verify</button>
                    <button className="btn btn-danger">Reject</button>
                  </td>
                </tr>
                ))}
                  
                </tbody>
              </table>
            </div>
      )
    
    const requiredItem = this.state.requiredItem;
    let modelData = students[requiredItem];
    //console.log(modelData);
   
      return(
      <React.Fragment>
        <Header />
          <div className="container">
            <div className="tableControl">
              <div className="row">
                <div className="col-md-9">
                  <select style={{padding: "7px 20px"}}>
                    <option value="">Sort By Branch</option>
                    <option value="">Mechanical Engineering</option>
                    <option value="">Computer Engineering</option>
                  </select>
                </div>
              </div>
            </div>
            <br />
            {unverifyStudentList}
          </div>
          
          <div className="overlay" id="overlay">
          <div className="overlay-contentView">
            <div className="crossbtn" id="crossbtn" onClick={this.turnOffOverlay.bind(this)}>
              <FontAwesomeIcon icon="times" />
            </div>
              
            <h4>Student Details</h4>
            <br />
             
                <div className="row">
                  <div className="col-md-3"><b>Roll No.: </b>{modelData && modelData.rollNo} </div>
                  <div className="col-md-2"></div>
                  <div className="col-md-1"></div>
                  <div className="col-md-6"><b>ERP ID: </b>{modelData && modelData.erpId}</div>
                </div>
  
         
    
              
              <div className="row">
                <div className="col-md-8"><b>Branch: </b>{modelData && modelData.Branch.branchName}</div>
              </div>
      
           
              
              <div className="row">
                <div className="col-md-3"><b>Division: </b>{modelData && modelData.division}</div>
              </div>
          
          
            
              
              <div className="row">
                <div className="col-md-12"><b>Name: </b>{modelData && modelData.firstName} {modelData && modelData.middleName} {modelData && modelData.lastName}</div>
              </div>
  
      
              
              <div className="row">
                <div className="col-md-12"><b>Email ID: </b>{modelData && modelData.email}</div>
              </div>
        
      
              
              <div className="row">
                <div className="col-md-12"><b>Mobile Number: </b>{modelData && modelData.mobileNo}</div>
              </div>
          
          
          
              <div className="row">
                <div className="col-md-6"><b>Degree Type: </b>{modelData && modelData.Degree.degreeName}</div>
                <div className="col-md-6"><b>Admission Type: </b>{modelData && modelData.studentType}</div>
              </div>
          

          
              <div className="row">
                <div className="col-md-12"><b>DOB: </b>{modelData && modelData.DOB}</div>
              </div>
      
          </div>
        </div>
          </React.Fragment>
        );
    }
}

VerifyStudent.propTypes = {
  getUnverifiedStudents: PropTypes.func.isRequired,
  student: PropTypes.object.isRequired,
}


const mapStateToProps = (state) => ({
  student: state.student,
})


export default connect(mapStateToProps, {getUnverifiedStudents, verifyStudent})(VerifyStudent);