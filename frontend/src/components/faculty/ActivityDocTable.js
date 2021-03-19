import React, { Component } from 'react'

class ActivityDocTable extends Component {
    render() {
        const {activityDocs} = this.props;

        return (
            <div className="maindivs">
                <div className="table-responsive">          
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Title of Document</th>
                          <th></th>
                          
                        </tr>
                      </thead>
                      <tbody>
                      {activityDocs && activityDocs.map((document, index) => (
                        <tr key={index}>
                            <td>{document.title}</td>
                            <td><a href={document.docUrl} target="_blank" rel="noopener noreferrer">View</a></td>                  
                        </tr> 
                      ))}  
                      </tbody>
                    </table>
                    </div>
                </div>
        )
    }
}

export default ActivityDocTable;