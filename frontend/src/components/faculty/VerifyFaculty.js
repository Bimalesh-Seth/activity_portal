import React, { Component } from 'react'
import Header from '../layout/header';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getUnverifiedFaculties, verifyFaculty} from "../../actions/facultyAction";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class VerifyFaculty extends Component {
    
    constructor(){
        super();
        this.state = {
            requiredItem: 0,
        }
    }
    
    componentDidMount(){
        const unVerifiedFaculty = {
            verified: false,
            branchId: null,
        }
        this.props.getUnverifiedFaculties(unVerifiedFaculty);
    }

    verifyFaculty = (id) => {
        this.props.verifyFaculty(id, this.props.history);
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
    
    render() {
        const {faculties} = this.props.faculty;
        const unVerifiedFacultiesList = (
        <div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Faculty Name</th>
              <th>Branch</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {faculties.map((faculty, index) => (
            <tr key={index}>
              <td>{faculty.firstName}</td>
              <td>{faculty.Branch.branchName}</td>
              <td>
                <span id="viewmore" onClick={this.turnOnOverlay.bind(this, index)}>View More</span>
              </td>
              <td>
                <button class="btn btn-primary" onClick={this.verifyFaculty.bind(this, faculty.id)} >Verify</button>
                <button class="btn btn-danger">Reject</button>
              </td>
            </tr> 
          ))}
  
          </tbody>
        </table>
      </div>
        )
const requiredItem = this.state.requiredItem;
let modelData = faculties[requiredItem];

        return (
       
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
                {unVerifiedFacultiesList}
              </div>
              <div class="overlay" id="overlay">
      <div class="overlay-contentView">
        <div class="crossbtn" id="crossbtn" onClick={this.turnOffOverlay.bind(this)}>
          <FontAwesomeIcon icon="times" />
        </div>

        <h4>Faculty Details</h4>
        <br />
        <div class="row">
          <div class="col-md-8"><b>ERP ID: </b>{modelData && modelData.erpId}</div>
        </div>

        <div class="row">
          <div class="col-md-8"><b>Branch: </b>{modelData && modelData.Branch.branchName}</div>
        </div>

        
        <div class="row">
          <div class="col-md-12"><b>Name: </b>{modelData && modelData.firstName} {modelData && modelData.middleName} {modelData && modelData.lastName}</div>
        </div>

    
        <div class="row">
          <div class="col-md-12"><b>Email ID: </b>{modelData && modelData.email}</div>
        </div>


        <div class="row">
          <div class="col-md-12"><b>Mobile Number: </b>{modelData && modelData.mobileNo}</div>
        </div>

        <div class="row">
          <div class="col-md-12"><b>DOB: </b>{modelData && modelData.DOB}</div>
        </div>
      </div>
    </div>
    </React.Fragment>
    
        )
    }
}

VerifyFaculty.propTypes = {
    getUnverifiedFaculties: PropTypes.func.isRequired,
    verifyFaculty: PropTypes.func.isRequired,
    faculty:PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    faculty: state.faculty,
})


export default connect(mapStateToProps, {getUnverifiedFaculties, verifyFaculty})(VerifyFaculty);
