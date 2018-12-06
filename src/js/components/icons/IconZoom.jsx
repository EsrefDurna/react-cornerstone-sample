import React, { Component } from 'react';
import { Icon } from '..';
export class IconZoom extends Component {
  render() {
    const originalSize = {
      width: 17,
      height: 17
    };
    const width = this.props.width || originalSize.width;
    const height = this.props.height || originalSize.height;
    return (
      <Icon className="icon-tools-zoom"
        width={width}
        height={height}        
        viewBox="0 0 17 17"
        originalSize={originalSize}>
        <g id="icon-tools-zoom-group" fill="none" strokeWidth="2" strokeLinecap="round">
          <path id="icon-tools-zoom-path" d="m11.5,11.5 4.5,4.5" />
          <circle id="icon-tools-zoom-circle" cx="7" cy="7" r="6" />
        </g>
      </Icon>
    );
  }
}
IconZoom.displayName = 'IconZoom';
export default IconZoom;
