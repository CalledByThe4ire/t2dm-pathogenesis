import React from 'react';
import propTypes from 'prop-types';
import ArrowIcon from '../arrow-icon';
import AlarmIcon from '../alarm-icon';

const renderIcon = (props) => {
  const {name} = props;

  switch (name) {
    case 'arrow':
      return <ArrowIcon {...props} />;
      case 'alarm':
        return <AlarmIcon {...props} />;
    default:
      return;
  }
};

renderIcon.propTypes = {
  name: propTypes.string,
};

export { renderIcon };
