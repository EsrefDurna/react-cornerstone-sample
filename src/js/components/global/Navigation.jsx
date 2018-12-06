import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import IconClose from '../icons/IconClose';

export class Navigation extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let className = 'sidebar';
        if (this.props.className) {
            className += ' ' + this.props.className;
        }
        const activeTab = "";        
        return (
            <Navbar className={className}>
                <Nav stacked={true}>
                    <li role="presentation">
                        <div className="header-logo">
                            <Link to={"/series"}>
                                <IconClose width={32} height={32}/>
                            </Link>
                        </div>
                    </li>
                    <li role="presentation">
                        <Link to={"/series"} className={activeTab === "series1" ? "active" : null}>
                            <IconClose width={32} height={32}/>
                            Series 1
                        </Link>
                    </li>
                    <li role="presentation">
                        <Link to={"/series"} className={activeTab === "series2" ? "active" : null}>
                            <IconClose width={32} height={32}/>
                            Series 1
                        </Link>
                    </li>
                    <li role="presentation">
                        <Link to={"/series"} className={activeTab === "series3" ? "active" : null}>
                            <IconClose width={32} height={32}/>
                            Series 1
                        </Link>
                    </li>

                    <li role="presentation">
                        <Link to={"/series"} className={activeTab === "series4" ? "active" : null}>
                            <IconClose width={32} height={32}/>
                            Series 1
                        </Link>
                    </li>
                </Nav>
            </Navbar>
        );
    }
}
Navigation.displayName = 'Navigation';
Navigation.propTypes = {
    alertCount: PropTypes.number,
    className: PropTypes.string,
    PathName: PropTypes.string
};
Navigation.defaultProps = {
    PathName: ''
};
export default Navigation;
