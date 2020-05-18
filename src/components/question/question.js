import React from 'react';
import propTypes from 'prop-types';
import styles from './question.module.scss';
import dataJSON from './assets/data.json';
import Alarm from '../alarm';

const Question = ({ style }) => {
    return <section className={styles.Question} style={style}>
      <h2 className={styles.QuestionHeader}>
        Всегда&nbsp;ли цели терапии СД2 на&nbsp;поверхности?
      </h2>
      <ul className={styles.QuestionList}>
        {dataJSON.map((title, index) => (
          <Alarm key={index} title={title} className={styles.QuestionItem} />
        ))}
      </ul>
    </section>
}

Question.propTypes = {
  style: propTypes.shape({
    [propTypes.string]: propTypes.string,
  }),
};

export default Question;
