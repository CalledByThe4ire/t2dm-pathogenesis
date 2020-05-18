import React from 'react';
import propTypes from 'prop-types';
import styles from './next.module.scss';
import classnames from 'classnames';
import Icon from '../icon';

const Next = ({ handleClick, className: parentClassName }) => (
  <div className={classnames(styles.Next, parentClassName)}>
    <p className={styles.NextText}>Листайте вниз</p>
    <button className={styles.NextButton} onClick={handleClick}>
      <Icon name="arrow" />
    </button>
  </div>
);

Next.propTypes = {
  handleClick: propTypes.func,
  className: propTypes.string,
};

export default Next;
