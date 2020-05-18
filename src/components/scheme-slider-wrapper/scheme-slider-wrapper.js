import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import { SchemeSliderContext } from '../../context';

const SchemeSliderWrapper = forwardRef((props, ref) => {
  const { className: parentClassName } = props;

  return (
    <SchemeSliderContext.Consumer>
      {({ width, length, factor }) => {
        return (
          <div
            className={parentClassName}
            style={{
              width: `${100 * length}%`,
              height: 'inherit',
              transform: `translateX(-${width * factor}px)`,
            }}
            ref={ref}
          >
            {props.children}
          </div>
        );
      }}
    </SchemeSliderContext.Consumer>
  );
});

SchemeSliderWrapper.propTypes = {
  children: propTypes.node.isRequired,
};

export default SchemeSliderWrapper;
