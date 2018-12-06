import React, { Component } from 'react';
import { Icon } from '..';
export class IconAlerts extends Component {
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
        originalSize={originalSize}>
        <g>
          <path d="M30,24V17l-2-2V12c0-4.95361-2.32666-9.05511-8-9.8501L18,0H14L12,2.1499C6.32669,2.94489,4,7.04639,4,12v3L2,17v7H0v2H10a6,6,0,0,0,12,0H32V24H30ZM16,30a4,4,0,0,1-4-4h8A4,4,0,0,1,16,30Zm12-6H4V17.82843l1.41418-1.41425L6,15.82843V12c0-3.18872,1.08911-7.1424,6.27753-7.86945L12.98074,4.032l0.48364-.51984L14.87106,2H17.129l1.40668,1.51215L19.01931,4.032,19.7225,4.13055C24.91091,4.8576,26,8.81128,26,12v3.82843l0.58582,0.58575L28,17.82843V24Z"/>
          <path d="M19.44534,6.1109l-0.01086-.00153,0.00214,2.02356C20.81747,8.36658,22,8.954,22,12.00006v2.09766h2V12.00006C24,7.29352,21.40042,6.38531,19.44534,6.1109Z"/>
        </g>
      </Icon>
    );
  }
}
IconAlerts.displayName = 'IconAlerts';
export default IconAlerts;
