import React from 'react';
import propTypes from 'prop-types';
import styles from './pagination.module.scss';
import classnames from 'classnames';

const Pagination = ({ length, counter, handleClick }) => {
  return (
    <ul className={styles.Pagination}>
      {[...new Array(length)].map((value, index) => {
        return (
          <li
            className={classnames(styles.PaginationItem, {
              [styles.PaginationItemActive]: index === counter,
            })}
            key={index}
          >
            <button
              key={index}
              className={styles.PaginationButton}
              onClick={() => {
                handleClick(index);
              }}
            ></button>
          </li>
        );
      })}
    </ul>
  );
};

Pagination.propTypes = {
  length: propTypes.number,
  counter: propTypes.number,
  handleClick: propTypes.func,
};

export default Pagination;
