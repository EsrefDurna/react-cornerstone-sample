import React, { Component } from 'react';
import { history, BrowseStudy, Header, SideCol } from '../components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import study from './study/study';
import studyList from './studylist/studyList';
import { Route, Router } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {       
      sideColVisible: false,
      browseStudyVisible: false
    };
    this.toggleSideColVisibility = this.toggleSideColVisibility.bind(this);
    this.toggleBrowseStudyVisibility = this.toggleBrowseStudyVisibility.bind(this);
  }  
  toggleSideColVisibility(e, show =! this.state.sideColVisible) {
    this.setState({
        sideColVisible: show
    });
  }
  toggleBrowseStudyVisibility(e, show = !this.state.browseStudyVisible) {      
      this.setState({browseStudyVisible: show});
  }
  render() {
    let mainContentClasses = 'main-content';
    if (this.state.sideColVisible) {
        mainContentClasses += ' side-col-visible';
    }
    let mainContentTransitionClasses = 'main-content-transition';   
    const routes = [ 
        {
            path: '/',
            exact: true,
            component: studyList,
            props: {
                toggleSideColVisibility: this.toggleSideColVisibility,
                toggleBrowseStudyVisibility: this.toggleBrowseStudyVisibility
            }
        },
        {
            path: '/study',
            exact: false,
            component: study,
            props: {
                toggleSideColVisibility: this.toggleSideColVisibility,
                toggleBrowseStudyVisibility: this.toggleBrowseStudyVisibility
            }
        },
        {
            path: '/studylist',
            exact: false,
            component: studyList,
            props: {
                toggleSideColVisibility: this.toggleSideColVisibility,
                toggleBrowseStudyVisibility: this.toggleBrowseStudyVisibility
            }
        }     
    ];   

    return (   
       
    <Router history={history}>
      <div className={mainContentClasses}>
                <Header
                    toggleSideColVisibility={this.toggleSideColVisibility}                    
                />           
                 <ReactCSSTransitionGroup
                    component="div"
                    className="sidebar-transition"
                    transitionName="sidebar-transition"
                    transitionEnterTimeout={25}
                    transitionLeaveTimeout={500}>      
                    {
                        this.state.browseStudyVisible ? <BrowseStudy 
                        handleClose={this.toggleBrowseStudyVisibility}
                        /> : null                   
                    }                                    
                </ReactCSSTransitionGroup>                     
                <ReactCSSTransitionGroup
                    component="div"
                    className={mainContentTransitionClasses}
                    transitionName="main-content-transition"
                    transitionEnterTimeout={200}
                    transitionLeaveTimeout={200}>
                    {
                        routes.map(({path, component: Comp, props: properties, exact}, i) => (
                            <Route key={i}
                                path={path} exact={exact}
                                render={(props) => <Comp {...props} {...properties} />}
                            />
                         ) )
                    }
                </ReactCSSTransitionGroup>
                <ReactCSSTransitionGroup
                    component="div"
                    className="side-col"
                    transitionName="side-col-transition"
                    transitionEnterTimeout={25}
                    transitionLeaveTimeout={500}>
                    { this.state.sideColVisible  ?
                        <SideCol handleClose={this.toggleSideColVisibility}/>
                        : null }
                </ReactCSSTransitionGroup>
            </div></Router>
    );
  }
}
export default App;
