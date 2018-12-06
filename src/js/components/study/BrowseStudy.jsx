import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import IconClose from '../icons/IconClose';
export class BrowseStudy extends Component {  
  render() {
    return (
      <div className="side-col-content">
        <a className="side-col-close" onClick={this.props.handleClose}>
          <IconClose width={12} height={12} />
        </a>
        <h3 className="page-header">
          STUDY BROWSER
        </h3>        
        <h4 className="page-header">STUD</h4>
        <Table className="chart-table">
          <tbody>                        
            <tr>
              <td>
              ABCABCABC
              </td>
              <td>ABCABCABC</td>
              <td className="text-right"><b>93%</b></td>
            </tr>
            <tr>
              <td>
              ABCABCABC
              </td>
              <td>ABC</td>
              <td className="text-right"><b>59%</b></td>
            </tr>           
            <tr>
              <td width="70%">
                
              </td>
              <td>ABC</td>
              <td className="text-right"><b>87%</b></td>
            </tr>
            <tr>
              <td>
                
              </td>
              <td>ABC</td>
              <td className="text-right"><b>83%</b></td>
            </tr>
            <tr>
              <td>
                
              </td>
              <td>ABC</td>
              <td className="text-right"><b>69%</b></td>
            </tr>            
            <tr>
              <td width="70%">               
              </td>
              <td>ABC</td>
              <td className="text-right"><b>77%</b></td>
            </tr>
            <tr>
              <td>
                
              </td>
              <td>ABC</td>
              <td className="text-right"><b>73%</b></td>
            </tr>
            <tr>
              <td>                
              </td>
              <td>ABC</td>
              <td className="text-right"><b>59%</b></td>
            </tr>            
            <tr>
              <td width="70%">
                
              </td>
              <td>ABC</td>
              <td className="text-right"><b>67%</b></td>
            </tr>
            <tr>
              <td>
                abcde abcd abcde abcdabcde abcdabcde abcdabcde abcd
              </td>
              <td>Memory</td>
              <td className="text-right"><b>63%</b></td>
            </tr>
            <tr>
              <td>
              abcde abcd abcde abcdabcde abcdabcde abcdabcde abcd
              </td>
              <td>ABC</td>
              <td className="text-right"><b>69%</b></td>
            </tr>            
            <tr>
              <td width="70%">
              abcde abcd abcde abcdabcde abcdabcde abcdabcde abcd
              </td>
              <td>ABC</td>
              <td className="text-right"><b>47%</b></td>
            </tr>
            <tr>
              <td>
              abcde abcd abcde abcdabcde abcdabcde abcdabcde abcd
              </td>
              <td>abc</td>
              <td className="text-right"><b>53%</b></td>
            </tr>
            <tr>
              <td>
              abcde abcd abcde abcdabcde abcdabcde abcdabcde abcd
              </td>
              <td>ABC</td>
              <td className="text-right"><b>39%</b></td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
BrowseStudy.displayName = 'BrowseStudy';
BrowseStudy.propTypes = {
  handleClose: PropTypes.func
};
export default BrowseStudy;
