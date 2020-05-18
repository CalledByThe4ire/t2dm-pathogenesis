import React from 'react';
import propTypes from 'prop-types';
import styles from './answer.module.scss';

const Answer = ({ style }) => (
  <section className={styles.Answer} style={style}>
    <h2 className={styles.AnswerHeader}>
      Основа терапии &mdash; патогенез СД2
    </h2>
  </section>
);

Answer.propTypes = {
  style: propTypes.shape({
    [propTypes.string]: propTypes.string,
  }),
};

export default Answer;
