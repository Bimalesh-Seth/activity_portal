import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { deleteActivity } from "../../actions/activityAction";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class ActivityTable extends Component {
 

  render() {
    const activities = this.props.activities;
    return (
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Activity</th>
              <th>Category</th>
              <th>Start Date</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </thead>
          {activities.map((activity) => (
            <tr>
              <td>{activity.title}</td>
              <td>{activity.Category.categoryName}</td>
              <td>{activity.sDate}</td>
              <td>
                <Link to={`/activityView/${activity.id}`}>View more</Link>
              </td>
              <td>
                <span
                  onclick="turnonoverlay()"
                  id="editbtn"
                  class="fa fa-pencil"
                  title="Edit"
                ></span>
                <FontAwesomeIcon icon="pencil-alt" id="editbtn" title="Edit" />
              </td>
              <td>
                <span
                  id="deletebtn"
                  class="fa fa-trash-o"
                  title="Delete"
                ></span>
               
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

ActivityTable.propTypes = {
  deleteActivity: PropTypes.func.isRequired,
};

export default connect(null, { deleteActivity })(ActivityTable);
