import React, { Component } from 'react';
import { Icon } from '..';
export class IconStackScroll extends Component {
  render() {
    const originalSize = {
      width: 24,
      height: 28
    };
    const width = this.props.width || originalSize.width;
    const height = this.props.height || originalSize.height;
    return (
      <Icon className="icon-tools-stack-scroll"
        width={width}
        height={height}
        viewbox={"0 0 24 28"}
        originalSize={originalSize}>
        <g>
        <path d="M24 21v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1zM24 13v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1zM24 5v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1z"></path>
        </g>
      </Icon>
    );
  }
}
IconStackScroll.displayName = 'IconStackScroll';
export default IconStackScroll;
