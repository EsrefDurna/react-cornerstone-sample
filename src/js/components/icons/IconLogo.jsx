import React, { Component } from 'react';
import { Icon } from '..';
export class IconLogo extends Component {
  /*
<symbol id="icon-ohif-logo" >
    <title>Open Health Imaging Foundation</title>
    <g id="icon-ohif-logo" stroke="#fff" stroke-width="2.5" stroke-miterlimit="10">
      <rect x="1.25" y="1.25" width="18.8" height="18.8" rx="1" ry="1"/>
      <rect x="26" y="1.25" width="18.8" height="18.8" rx="1" ry="1"/>
      <rect x="1.25" y="26" width="18.8" height="18.8" rx="1" ry="1"/>
      <rect x="26" y="26" width="18.8" height="18.8" rx="1" ry="1"/>
    </g>
  </symbol>
  */
  render() {
    const originalSize = {
      width: 32,
      height: 32
    };
    const width = this.props.width || originalSize.width;
    const height = this.props.height || originalSize.height;
    return (
      <Icon className="icon-alerts"
        width={width}
        height={height}
        originalSize={originalSize}
        viewBox={"0 0 47 47"}
        >
        <title>Open Health Imaging Foundation</title>        
        <g id="icon-ohif-logo" stroke="#fff" strokeWidth="2.5" strokeMiterlimit="10">
          <rect x="1.25" y="1.25" width="18.8" height="18.8" rx="1" ry="1"/>
          <rect x="26" y="1.25" width="18.8" height="18.8" rx="1" ry="1"/>
          <rect x="1.25" y="26" width="18.8" height="18.8" rx="1" ry="1"/>
          <rect x="26" y="26" width="18.8" height="18.8" rx="1" ry="1"/>
        </g>
      </Icon>
    );
  }
}
IconLogo.displayName = 'IconLogo';
export default IconLogo;
