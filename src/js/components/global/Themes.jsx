import React, { Component } from 'react';
import {  Modal } from 'react-bootstrap';
import { IconClose }  from '..';
export class Themes extends Component {        
    render() {
        return (
        <Modal show={this.props.showModal} >
            <Modal.Header>
                <h2>Themes</h2>
                <a  href="#" className="close" onClick={this.props.close}>
                    <IconClose width={12} height={12} />
                </a>
            </Modal.Header>
            <Modal.Body>
                <div className="text-center">
                    <h4><strong>Version 0.0.1</strong></h4>
                </div>
                <div className="text-center">
                   <h4><strong>OHIF Viewer</strong></h4>
                </div>
            </Modal.Body>
        </Modal>
        );
    }
}
Themes.displayName = 'Themes';
export default Themes;
