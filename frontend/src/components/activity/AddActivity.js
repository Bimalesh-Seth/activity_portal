import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCategories } from "../../actions/categoryAction";
import { addActivity } from "../../actions/activityAction";
import { getNatureOfActivities} from "../../actions/natureOfActivityAction";
import Header from "../layout/header";

class AddActivity extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      categoryId: "",
      sDate: "",
      eDate: "",
      hours: "",
      points: "",
      docRequired: false,
      active: true,
      noaId: "",
      studentHead: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeCheckbox1 = this.onChangeCheckbox1.bind(this);
    this.onChangeCheckbox2 = this.onChangeCheckbox2.bind(this);
  }

  componentDidMount() {
    this.props.getCategories();
    this.props.getNatureOfActivities();
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangeCheckbox1 = (e) => {
    this.setState({ docRequired: !this.state.docRequired});
  };

  onChangeCheckbox2 = (e) => {
    this.setState({ active: !this.state.active})
  }

  onSubmit = (e) => {
    e.preventDefault();
    const newActivity = {
      title: this.state.title,
      categoryId: this.state.categoryId,
      sDate: this.state.sDate,
      eDate: this.state.eDate,
      hours: this.state.hours,
      points: this.state.points,
      docRequired: this.state.docRequired,
      active: this.state.active,
      noaId: this.state.noaId,
      studentHead: this.state.studentHead,
    };
    console.log(newActivity);
    this.props.addActivity(newActivity, this.props.history);
  };

  render() {
    const { categories } = this.props.category;
    let categoryList = categories.map((category, i) => {
      return (
        <option key={i} value={category.id}>
          {category.categoryName}
        </option>
      );
    });

    const { natureOfActivities } = this.props.nature;
    let natureOfActivitiesList = natureOfActivities.map((activityNature, i) => {
      return(
        <option key={i} value={activityNature.id}>
            {activityNature.title}
        </option>
      )
    })

    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <h4>Enter Activity Details</h4>

          <hr size="2" />

          <form onSubmit={this.onSubmit}>
            {/* <!--first row--> */}
            <div className="row">
              <div className="col-md-8">
                <label for="activtyname">Activity Name:</label>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={this.state.title}
                    onChange={this.onChange}
                    id="activtyname"
                    required
                  />
                </div>
              </div>
            </div>

            {/* <!--second row--> */}
            <div className="row">
              <div className="col-md-6">
                <label for="categoryDropdown">Category:</label>
                <select
                  id="categoryDropdown"
                  name="categoryId"
                  value={this.state.categoryId}
                  onChange={this.onChange}
                >
                  <option value="">Select Category</option>
                  {categoryList}
                </select>
              </div>
      
            <div className="col-md-6">
              <label for="categoryDropdown">Nature of Activity:</label>
              <select
                id="categoryDropdown"
                name="noaId"
                value={this.state.noaId}
                onChange={this.onChange}
              >
                <option value="">Select Nature of Activity</option>
                {natureOfActivitiesList}
              </select>
            </div>
          </div>

          <div className="row">
              <div className="col-md-6">
                <label for="studentHead">Student Head Name:</label>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="studentHead"
                    value={this.state.studentHead || ""}
                    onChange={this.onChange}
                    id="studentHead"
                    required
                  />
                </div>
              </div>
            </div>

            {/*<!--third row-->*/}
            <div className="row">
              <div className="col-md-2">
                <label for="hours">Hours:</label>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="hours"
                    value={this.state.hours}
                    onChange={this.onChange}
                    id="hours"
                    required
                  />
                </div>
              </div>

              <div className="col-md-2">
                <label for="points">Points:</label>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="points"
                    value={this.state.points}
                    onChange={this.onChange}
                    id="points"
                    required
                  />
                </div>
              </div>
            </div>

            {/* <!--fourth row--> */}
            <div className="row">
              <div className="col-md-4">
                <label for="startDate">Start Date:</label>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control"
                    name="sDate"
                    value={this.state.sDate}
                    onChange={this.onChange}
                    id="startDate"
                  />
                </div>
              </div>

              <div className="col-md-4">
                <label for="startDate">End Date:</label>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control"
                    name="eDate"
                    value={this.state.eDate}
                    onChange={this.onChange}
                    id="startDate"
                  />
                </div>
              </div>
            </div>
            <br />
            {/* <!--fifth row--> */}
            <div className="row">
              <div className="col-md-6">
                <div className="custom-control custom-checkbox mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="certificate"
                    name="docRequired"
                    defaultChecked={this.state.docRequired}
                    onChange={this.onChangeCheckbox1}
                  />
                  <label className="custom-control-label" for="certificate">
                    CERTIFICATION REQUIRED?
                  </label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="custom-control custom-checkbox mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="active"
                    name="active"
                    defaultChecked={this.state.active}
                    onChange={this.onChangeCheckbox2}
                  />
                  <label class="custom-control-label" for="active">
                    Is Active?
                  </label>
                </div>
              </div>
            </div>

            <br />

            <input
              type="submit"
              value="ADD"
              class="btn btn-default"
              id="addactivity"
            />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

AddActivity.propTypes = {
  getCategories: PropTypes.func.isRequired,
  getNatureOfActivities: PropTypes.func.isRequired,
  category: PropTypes.object.isRequired,
  addActivity: PropTypes.func.isRequired,
  
};

const mapStateToProps = (state) => ({
  category: state.category,
  nature: state.nature,
});

export default connect(mapStateToProps, { getCategories, addActivity, getNatureOfActivities })(
  AddActivity
);
