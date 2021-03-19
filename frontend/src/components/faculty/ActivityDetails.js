import React, { Component } from 'react'
import FacultySideNav from './FacultySideNav';
import FacultyTopNav from './FacultyTopNav';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {uploadActivityDoc, getActivityDocs} from "../../actions/facultyActivityAction";
import {getActivity} from "../../actions/activityAction";
import ActivityDocTable from './ActivityDocTable';

class ActivityDetails extends Component {

   constructor(){
       super();
       this.state = {
           title: "",
           docUrl: "",
           studentHead: "",
       }

       this.onChange = this.onChange.bind(this);
       this.onSubmit = this.onSubmit.bind(this);
   }

   componentDidMount(){
     const {id} = this.props.match.params;
     this.props.getActivityDocs(id);
     this.props.getActivity(id);
   }

   componentWillReceiveProps(nextProps){
     const {id} = this.props.match.params;
     this.props.getActivityDocs(id);
     const {studentHead} = nextProps.activity.activity;
     this.setState({
       studentHead
     });
   }

   onChange = (e) =>{
       this.setState({[e.target.name] : e.target.value});
   }

   onSubmit = (e) => {
       e.preventDefault();
       const {id} = this.props.match.params;

       const activityDoc = {
            activityDetailId : id,
            title: this.state.title,
            docUrl : this.state.docUrl,
       }
       this.setState({ title:"", docUrl:""});
       //console.log(activityDoc);
       this.props.uploadActivityDoc(activityDoc);
   }

    render() {
    const { id, forAll } = this.props.match.params;
    const {activityDocs} = this.props.facultyOperation;
        return (
           <React.Fragment>
            <FacultySideNav aid={id} forAll={forAll} />
            <div id="main" className="openmain">
                <FacultyTopNav />
                <div className="maindivs">
      
                <b>Student Head: </b>
                <input
                  type="text"
                  id="studentHead"
                  name="studentHead"
                  style={{
                    padding: "5px 5px 5px 5px",
                    borderRadius: "3px",
                    border: "1px solid lightgrey",
                    width: "60%",
                  }}
                  value={this.state.studentHead}
                /> 
              </div>

              <div className="maindivs">
                <h6>Upload Document related to Activity:    </h6>
                <div className="row">
                  <div className="col-md-5">
                    <input
                      type="text"
                      id="TitleOfDoc"
                      name="title"
                      value={this.state.title}
                      onChange={this.onChange}
                      style={{
                        padding: "5px 5px 5px 5px",
                        borderRadius: "3px",
                        border: "1px solid lightgrey",
                        width: "100%",
                      }}
                      placeholder="Title of Document"
                    />
                  </div>
        
                  <div class="col-md-5">
                    <input
                      type="text"
                      id="URLofDOc"
                      name="docUrl"
                      value={this.state.docUrl}
                      onChange={this.onChange}
                      style={{
                        padding: "5px 5px 5px 5px",
                        borderRadius: "3px",
                        border: "1px solid lightgrey",
                        width: "100%"
                      }}
                      placeholder="URL of Google Drive"
                    />
                  </div>
                  <div className="col-md-2">
                    <button className="btn btn-primary" style={{width: "100%"}} onClick={this.onSubmit}>Add</button>
                  </div>
                </div>
                <ActivityDocTable activityDocs={activityDocs} />
              </div>
            </div>
           </React.Fragment>
        )
    }
}

ActivityDetails.propTypes = {
    uploadActivityDoc: PropTypes.func.isRequired,
    getActivityDocs: PropTypes.func.isRequired,
    getActivity: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  facultyOperation: state.facultyOperation,
  activity: state.activity,
})

export default connect(mapStateToProps, {uploadActivityDoc, getActivityDocs, getActivity})(ActivityDetails);