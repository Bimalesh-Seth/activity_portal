import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addDegree } from "../../actions/degreeAction";

class AddDegree extends Component {
  constructor() {
    super();

    this.state = {
      degreeName: "",
      years: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const newDegree = {
      degreeName: this.state.degreeName,
      years: this.state.years,
    };
    this.setState({
      degreeName: "",
      years: "",
    });
    // console.log(newDegree);
    this.props.addDegree(newDegree);
  };

  render() {
    return (
      <div class="row">
        <div class="col-md-4">
          <input
            type="text"
            name="degreeName"
            id="degreeName"
            class="form-control"
            placeholder="Enter Degree Name"
            value={this.state.degreeName}
            onChange={this.onChange}
          />
        </div>
        <div class="col-md-4">
          <input
            type="text"
            name="years"
            id="noofyears"
            class="form-control"
            placeholder="Enter No. of Years"
            value={this.state.years}
            onChange={this.onChange}
          />
        </div>
        <button class="btn btn-default" id="addDegree" onClick={this.onSubmit}>
          Add Degree <FontAwesomeIcon icon="plus" />
        </button>
      </div>
    );
  }
}

AddDegree.propTypes = {
  addDegree: PropTypes.func.isRequired,
  degree: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  degree: state.degree,
});

export default connect(mapStateToProps, { addDegree })(AddDegree);
