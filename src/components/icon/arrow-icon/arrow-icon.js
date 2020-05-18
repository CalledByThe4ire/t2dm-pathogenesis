import React from 'react';
import styles from './arrow-icon.module.scss';
import propTypes from 'prop-types';

const ArrowIcon = ({ width = 43, height = 21 }) => (
  <svg width={width} height={height} className={styles.ArrowIcon}>
    <path
      fill="none"
      stroke="#FFF"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeMiterlimit="2"
      d="M1.25 1.25l20.61 18.69L41.95 1.25"
    />
  </svg>
);

ArrowIcon.propTypes = {
  width: propTypes.number,
  height: propTypes.number,
};

export default ArrowIcon;
