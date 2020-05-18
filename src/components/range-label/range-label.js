import React from 'react';
import propTypes from 'prop-types';
import styles from './range-label.module.scss';

const RangeLabel = ({ label }) => (
  <li className={styles.RangeLabel}>{label}</li>
);

RangeLabel.propTypes = {
  label: propTypes.number,
};

export default RangeLabel;
