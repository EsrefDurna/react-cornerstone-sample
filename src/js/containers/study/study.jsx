import React, { Component } from 'react';
class study extends Component {
  constructor(props) {
    super(props);
    this.state = {       
    };
  }
  componentDidMount() {    
    this.props.toggleBrowseStudyVisibility();
    this.props.toggleSideColVisibility();
  }
  render() {
    return (      
      <div className="main-container">     
      helllo  my firsy studyyy                             
      </div>
    );
  }
}
export default study;
