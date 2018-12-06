import React, { Component } from 'react';
import { Checkbox, Table } from 'react-bootstrap'; //Collapse,
import { Link } from 'react-router-dom';


class studyList extends Component {
  constructor(props) {
    super(props);
    this.state = {       
    };
  }
  render() {
    return (      
      <div className="main-container">                        
          <Table className="select-table">
            <thead>
              <tr>      
                <th>                  
                  Patient Name
                </th>
                <th>                  
                  MRN
                </th>
                <th>                  
                  Accession#
                </th>
                <th>                  
                  StudyDate
                </th>
                <th>                  
                  Modality
                </th>
                <th>                  
                  Study Description
                </th>                                    
              </tr>
            </thead>
            <tbody>
              <tr>                                      
                  <td>                                   
                      <Link to={"/study/1234"}> Joe Doe </Link>
                  </td> 
                  <td>                                           
                      12345
                  </td>
                  <td>                                           
                      12345
                  </td>
                  <td>                                           
                      12/31/2018
                  </td>
                  <td>                                           
                      MRI
                  </td>
                  <td>                                           
                      Broken Arm
                  </td>                            
                </tr>                      
            </tbody>
          </Table>

      </div>
    );
  }
}
export default studyList;
