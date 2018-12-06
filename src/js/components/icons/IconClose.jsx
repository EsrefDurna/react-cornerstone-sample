import React, { Component } from 'react';
import { Icon } from '../';
export class IconClose extends Component {
  render() {
    let className = 'icon-close';
    if (this.props.className) {
      className += ' ' + this.props.className;
    }
    const originalSize = {
      width: 12,
      height: 12
    };
    const width = this.props.width || originalSize.width;
    const height = this.props.height || originalSize.height;
    return (
      <Icon className={className}
        width={width}
        height={height}
        originalSize={originalSize}>
        <g>
          <line x1="0" y1="0" x2={width} y2={height} strokeWidth="2" />
          <line x1="0" y1={height} x2={width} y2="0" strokeWidth="2" />
        </g>
      </Icon>
    );
  }
}
IconClose.displayName = 'IconClose';
export default IconClose;
