import React, { Component } from 'react';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

import { NavDropdown, Nav, Navbar, Dropdown } from 'react-bootstrap';
import { Preferences, ServerInfo, Themes, About } from '..';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {       
      showAbout: false,
      showPreferences: false,
      showServerInfo: false,
      showThemes: false
    };
    this.toggleAbout = this.toggleAbout.bind(this);
    this.togglePreferences = this.togglePreferences.bind(this);    
    this.toggleServerInfo = this.toggleServerInfo.bind(this);   
    this.toggleThemes = this.toggleThemes.bind(this);    
  }  
  toggleAbout() {
    this.setState({showAbout:!this.state.showAbout});
  }
  togglePreferences() {    
    this.setState({showPreferences:!this.state.showPreferences});
  }  
  toggleServerInfo() {
    this.setState({showServerInfo:!this.state.showServerInfo});
  }
  toggleThemes() {
    this.setState({showThemes:!this.state.showThemes});
  }
  render() {
    return (    <div>          
    </div>                  
    );
  }
}
export default Header;



