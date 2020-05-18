import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import { renderIcon } from './utils/render-icon';
import styles from './icon.module.scss';

const Icon = (props) => {
  const { name, className: parentClassName = '', ...restProps } = props;

  return (
    <span className={classnames(styles.Icon, parentClassName)}>
      {renderIcon({ name, ...restProps })}
    </span>
  );
};

Icon.propTypes = {
  name: propTypes.string,
  className: propTypes.string,
};

export default Icon;
