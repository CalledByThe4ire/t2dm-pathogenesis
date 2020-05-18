import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import { MainSliderContext } from '../../context';

const MainSliderWrapper = forwardRef((props, ref) => {
  const { className: parentClassName } = props;

  return (
    <MainSliderContext.Consumer>
      {({ height, length, counter }) => {
        return (
          <div
            className={parentClassName}
            style={{
              height: `${100 * length}%`,
              width: 'inherit',
              transform: `translateY(-${
                counter !== length ? height * counter : 0
              }px)`,
            }}
            ref={ref}
          >
            {props.children.map((child, index) => {
              return React.cloneElement(child, {
                key: index,
                style: { height: `${100 / length}%`, width: 'inherit' },
              });
            })}
          </div>
        );
      }}
    </MainSliderContext.Consumer>
  );
});

MainSliderWrapper.propTypes = {
  children: propTypes.node.isRequired,
};

export default MainSliderWrapper;
