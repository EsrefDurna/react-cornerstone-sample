import React, { Component } from 'react';
import classNames from 'classnames';
export class Icon extends Component {
  render() {
    let originalSize = this.props.originalSize;
    if (!originalSize) {
      originalSize = {
        width: this.props.width,
        height: this.props.height
      };
    }
    let className = classNames('icon', this.props.className);
    let viewbox = this.props.viewbox || '0 0 ' + (originalSize.width) + ' ' + (originalSize.height);
    
    if (this.props.stroke) {
      viewbox = '-1 -1 ' + (originalSize.width + 2) + ' ' + (originalSize.height + 2);
    }
    return (
      <svg className={className}
        xmlns="http://www.w3.org/svg/2000"
        viewBox={viewbox}
        width={this.props.width}
        height={this.props.height}>
        {this.props.children}
      </svg>
    );
  }
}
Icon.displayName = 'Icon';
export default Icon;
