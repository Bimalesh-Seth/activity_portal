import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addCategory } from "../../actions/categoryAction";
import { Link } from "react-router-dom";
import ActivityTable from "./ActivityTable";
import { getActCats } from "../../actions/activityAction";
import Header from "../layout/header";

class ActivityDashboard extends Component {
  constructor() {
    super();

    this.state = {
      categoryName: "",
    };

    this.turnoffoverlay = this.turnoffoverlay.bind(this);
    this.turnonoverlay = this.turnonoverlay.bind(this);
  }

  componentDidMount() {
    this.props.getActCats();
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const newCategory = {
      categoryName: this.state.categoryName,
    };
    this.props.addCategory(newCategory, this.props.history);
    this.turnoffoverlay();
  };

  turnoffoverlay = () => {
    document.getElementById("overlay").style.display = "none";
  };

  turnonoverlay = () => {
    document.getElementById("overlay").style.display = "block";
  };

  render() {
    const { activitiesCategories } = this.props.activity;
    //console.log(activities);

    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <h4>Activity</h4>
          <br />
          {/* <!--BUTTON TO ADD --> */}
          <div className="row">
            <div className="col-md-2"></div>
            {/* <!--Add Category--> */}
            <div className="col-md-2">
              <button
                className="btn btn-default"
                id="addCategoryModal"
                onClick={this.turnonoverlay}
              >
                Add Category <span class="fa fa-plus"></span>
              </button>
            </div>

            <div class="col-md-1"></div>

            {/*<!--Add Activty-->*/}
            <div class="col-md-2">
              <Link to="/addActivity">
                <button class="btn btn-default" id="addactivity">
                  Add Activity <FontAwesomeIcon icon="calendar-plus" />
                </button>
              </Link>
            </div>
            <div class="col-md-1"></div>

            <div class="col-md-2">
              <Link to="/assignActivity">
                <button class="btn btn-default" id="mapfaculty">
                  Assign Faculty <FontAwesomeIcon icon="user-plus" />
                </button>
              </Link>
            </div>
          </div>
          <hr size="2" />

          <div class="overlay" id="overlay">
            <div class="overlay-content">
              <div class="crossbtn" id="crossbtn" onClick={this.turnoffoverlay}>
                <FontAwesomeIcon icon="times" />
              </div>

              <h4>Add Category</h4>
              <br />
              <div className="row">
                <div className="col-md-12">
                  <label htmlFor="categoryName">Category Name:</label>
                  <input
                    type="text"
                    name="categoryName"
                    id="categoryName"
                    value={this.state.categoryName}
                    onChange={this.onChange}
                    className="form-control"
                  />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-6">
                  <button
                    className="btn btn-default"
                    id="addCategory"
                    onClick={this.onSubmit}
                  >
                    Add Category <FontAwesomeIcon icon="plus" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <ActivityTable activities={activitiesCategories} />
          <br />
        </div>
      </React.Fragment>
    );
  }
}
ActivityDashboard.propTypes = {
  addCategory: PropTypes.func.isRequired,
  category: PropTypes.object.isRequired,
  getActCats: PropTypes.func.isRequired,
  activity: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  activity: state.activity,
});

export default connect(mapStateToProps, { addCategory, getActCats })(
  ActivityDashboard
);
