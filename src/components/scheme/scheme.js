import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import styles from './scheme.module.scss';

const Scheme = ({ caption, imgSrc, style: parentStyle }) => (
  <div className={classnames(styles.Scheme)} style={parentStyle}>
    <figure className={styles.SchemeFigure}>
      <img src={imgSrc} width={1024} height={768} alt={caption} />
      <figcaption className={styles.SchemeFigCaption}>{caption}</figcaption>
    </figure>
  </div>
);

Scheme.propTypes = {
  caption: propTypes.string,
  imgSrc: propTypes.string,
  style: propTypes.shape({
    [propTypes.string]: propTypes.string,
  }),
};

export default Scheme;
