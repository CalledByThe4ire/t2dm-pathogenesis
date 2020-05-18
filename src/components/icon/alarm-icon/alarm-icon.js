import React from 'react';
import propTypes from 'prop-types';
import styles from './alarm-icon.module.scss';

const AlarmIcon = ({ width = 107, height = 107 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="107"
    height="107"
    viewBox="0 0 107 107"
  >
    <defs>
      <linearGradient
        id="linear-gradient"
        x1="53.5"
        y1="106"
        x2="53.5"
        y2="1"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#de791b" />
        <stop offset="0.005" stopColor="#de791b" />
        <stop offset="1" stopColor="#cf1437" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-2"
        x1="52.5"
        y1="94.25"
        x2="52.5"
        y2="14.75"
        xlinkHref="#linear-gradient"
      />
      <filter id="filter" filterUnits="userSpaceOnUse">
        <feImage
          preserveAspectRatio="none"
          result="image"
          xlinkHref="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNzkuNSIgaGVpZ2h0PSI3OS41IiB2aWV3Qm94PSIwIDAgNzkuNSA3OS41Ij4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBvcGFjaXR5OiAwLjE2OwogICAgICAgIGZpbGw6IHVybCgjcmFkaWFsLWdyYWRpZW50KTsKICAgICAgfQogICAgPC9zdHlsZT4KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0icmFkaWFsLWdyYWRpZW50IiBjeD0iMzkuNzUiIGN5PSIzOS43NSIgcj0iNDEuMTUyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2RlNzkxYiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjAuMDA3IiBzdG9wLWNvbG9yPSIjZGU3OTFiIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMS4yOCIgc3RvcC1jb2xvcj0iI2NmMTQzNyIvPgogICAgPC9yYWRpYWxHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iNzkuNSIgaGVpZ2h0PSI3OS41Ii8+Cjwvc3ZnPgo="
        />
        <feComposite result="composite" operator="in" in2="SourceGraphic" />
        <feBlend result="blend" in2="SourceGraphic" />
      </filter>
      <filter id="filter-2" filterUnits="userSpaceOnUse">
        <feImage
          preserveAspectRatio="none"
          result="image"
          xlinkHref="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzMiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAzMyAzMyI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogdXJsKCNyYWRpYWwtZ3JhZGllbnQpOwogICAgICB9CiAgICA8L3N0eWxlPgogICAgPHJhZGlhbEdyYWRpZW50IGlkPSJyYWRpYWwtZ3JhZGllbnQiIGN4PSIxNi41IiBjeT0iMTYuNSIgcj0iMTcuMDgyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2RlNzkxYiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjAuMDA3IiBzdG9wLWNvbG9yPSIjZGU3OTFiIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMS4yOCIgc3RvcC1jb2xvcj0iI2NmMTQzNyIvPgogICAgPC9yYWRpYWxHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iMzMiIGhlaWdodD0iMzMiLz4KPC9zdmc+Cg=="
        />
        <feComposite result="composite" operator="in" in2="SourceGraphic" />
        <feBlend result="blend" in2="SourceGraphic" />
      </filter>
    </defs>
    <g>
      <circle className={styles.AlarmIconCircleOuter} cx="53.5" cy="53.5" r="52.5" />
      <g style={{ fill: '#f78b1f', filter: 'url(#filter)' }}>
        <circle
          className={styles.AlarmIconCircleMiddle}
          cx="52.5"
          cy="54.5"
          r="39.75"
          style={{ stroke: 'inherit', filter: 'none', fill: 'inherit' }}
        />
      </g>
      <circle className={styles.AlarmIconCircleInner} cx="52.5" cy="53.5" r="16.5" />
    </g>
  </svg>
);

AlarmIcon.propTypes = {
  width: propTypes.number,
  height: propTypes.number,
};

export default AlarmIcon;
