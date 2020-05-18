import React from 'react';
import classnames from 'classnames';
import propTypes from 'prop-types';
import styles from './alarm.module.scss';
import Icon from '../icon';

const Alarm = ({ title, className: parentClassName }) => (
  <li className={classnames(styles.Alarm, parentClassName)}>
    <p className={styles.AlarmTitle}>{title}</p>
    <Icon name="alarm" className={styles.AlarmIcon} />
  </li>
);

Alarm.propTypes = {
  title: propTypes.string,
  className: propTypes.string,
};

export default Alarm;
