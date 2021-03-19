import React, { Component } from "react";
import MultiSelect from "@khanacademy/react-multi-select";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCategories } from "../../actions/categoryAction";
import { getActivities, assignActFact } from "../../actions/activityAction";
import { getFaculties } from "../../actions/facultyAction";
import Header from "../layout/header";

class AssignActivity extends Component {
  constructor() {
    super();
    this.state = {
      activityDetailId: "",
      facultyIds: [],
      forAll: "",
    };
    this.onChange = this.onChange.bind(this);
    //this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = (e) => {
    //console.log(e.target);
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const actMap = {
      activityDetailId: this.state.activityDetailId,
      facultyIds: this.state.facultyIds,
      forAll: this.state.forAll,
    };
     console.log(actMap);
    this.props.assignActFact(actMap, this.props.history);
  };

  componentDidMount() {
    this.props.getCategories();
    this.props.getActivities();
    this.props.getFaculties();
  }

  render() {
    const { categories } = this.props.category;
    let categoryList = categories.map((category, i) => {
      return (
        <option key={i} value={category.id}>
          {category.categoryName}
        </option>
      );
    });

    const { activities } = this.props.activity;
    let activityList = activities.map((activity, i) => {
      return (
        <option key={i} value={activity.id}>
          {activity.title}
        </option>
      );
    });

    const { faculties } = this.props.faculty;
    let facultyList;
    if (faculties) {
      facultyList = faculties.map((faculty) => {
        return {
          value: faculty.id,
          label: faculty.firstName,
        };
      });
    }

    return (
      <React.Fragment>
        <Header />
        <div class="container">
          <h4>Assign Faculty to Internship</h4>

          <hr size="2" />
          {/*<!--CATEGORY NAME-->*/}
          <div class="row">
            <div class="col-md-8">
              <label for="categoryDropdown">Category:</label>
              <select id="categoryDropdown">
                {/* <!--DEMO DATA-->*/}
                <option value="">Select Category</option>
                {categoryList}
              </select>
            </div>
          </div>

          <br />

          {/* <!--ACTIVITY NAME--> */}
          <div class="row">
            <div class="col-md-8">
              <label for="activityDropdown">Activity:</label>
              <select
                id="activityDropdown"
                name="activityDetailId"
                value={this.state.activityDetailId}
                onChange={this.onChange}
              >
                {/*<!--DEMO DATA-->*/}
                <option value="">Select Activity</option>
                {activityList}
              </select>
            </div>
          </div>
          <br />

          <div class="row">
            <div class="col-md-8">
              <label htmlFor="multipleFaculty">Select Faculties:</label>

              <MultiSelect
                options={facultyList}
                selected={this.state.facultyIds}
                onSelectedChanged={(facultyIds) =>
                  this.setState({ facultyIds })
                }
                value={this.state.facultyIds}
              />
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-md-8">
              <label>Access for Student:</label>
              <br />
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  class="custom-control-input"
                  id="alldept"
                  name="forAll"
                  value={1}
                  checked={this.state.forAll === 1}
                  onChange={this.onChange}
                />
                <label class="custom-control-label" htmlFor="alldept">
                  All Departments
                </label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  class="custom-control-input"
                  id="onedept"
                  name="forAll"
                  value={0}
                  checked={this.state.forAll === 0}
                  onChange={this.onChange}
                />
                <label class="custom-control-label" htmlFor="onedept">
                  Only their department
                </label>
              </div>
            </div>
          </div>

          <br />
          <input
            type="submit"
            value="ASSIGN"
            class="btn btn-default"
            id="assignFaculty"
            onClick={this.onSubmit}
          />
        </div>
      </React.Fragment>
    );
  }
}

AssignActivity.propTypes = {
  getCategories: PropTypes.func.isRequired,
  category: PropTypes.object.isRequired,
  getActivities: PropTypes.func.isRequired,
  activity: PropTypes.object.isRequired,
  getFaculties: PropTypes.func.isRequired,
  faculty: PropTypes.object.isRequired,
  assignActFact: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  category: state.category,
  activity: state.activity,
  faculty: state.faculty,
});

export default connect(mapStateToProps, {
  getCategories,
  getActivities,
  getFaculties,
  assignActFact,
})(AssignActivity);
