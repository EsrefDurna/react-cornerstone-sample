import React, { Component } from 'react';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

import { NavDropdown, Nav, Navbar, Dropdown } from 'react-bootstrap';
import { Preferences, ServerInfo, Themes, About, IconStackScroll, IconZoom } from '..';
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
        return (                    
          <Navbar className="float-right header">   
          
          <IconZoom/>
              <Nav className="float-right header-transition-item">                
                <NavDropdown  title="Options" className="float-right action-button">
                <Dropdown className="text-action cursor" onClick={this.toggleAbout}>About</Dropdown>
                <Dropdown className="text-action cursor" onClick={this.togglePreferences}>Preferences</Dropdown>
                  <Dropdown className="text-action cursor" onClick={this.toggleServerInfo}>ServerInfo</Dropdown>                  
                  <Dropdown className="text-action cursor" onClick={this.toggleThemes}>Themes</Dropdown>                                    
                </NavDropdown>
              </Nav>  
              { this.state.showAbout ? <About showModal={this.state.showAbout} close={this.toggleAbout}/> : null }
              { this.state.showPreferences ? <Preferences showModal={this.state.showPreferences} close={this.togglePreferences}/> : null }
              { this.state.showServerInfo ? <ServerInfo showModal={this.state.showServerInfo} close={this.toggleServerInfo}/> : null }               
               { this.state.showThemes ? <Themes showModal={this.state.showThemes} close={this.toggleThemes}/> : null }
               
          </Navbar>                    
    );
  }
}
export default Header;
