import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteDegree } from "../../actions/degreeAction";

class DegreeeTable extends Component {
  onDeleteClick(id) {
    this.props.deleteDegree(id);
  }

  render() {
    const { degrees } = this.props;
    console.table(degrees);
    return (
      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Degree Name</th>
              <th>Year</th>
              <td></td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {degrees.map((degree) => (
              <tr>
                <td>{degree.degreeName}</td>
                <td>{degree.years}</td>
                <td>
                  <FontAwesomeIcon icon="pencil-alt" />
                </td>
                <td>
                  <FontAwesomeIcon
                    icon="trash"
                    id="deletebtn"
                    onClick={this.onDeleteClick.bind(this, degree.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

DegreeeTable.propTypes = {
  deleteDegree: PropTypes.func.isRequired,
};

export default connect(null, { deleteDegree })(DegreeeTable);
