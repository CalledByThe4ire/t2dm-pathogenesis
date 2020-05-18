import React, { Component } from 'react';
import { Swipeable } from 'react-swipeable';
import styles from './main-slider.module.scss';
import classnames from 'classnames';
import { MainSliderContext } from '../../context/';
import MainSliderWrapper from '../main-slider-wrapper';
import Answer from '../answer';
import Question from '../question';
import SchemeSlider from '../scheme-slider';
import Next from '../next';
import Pagination from '../pagination';

class MainSlider extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.ref = React.createRef();
  }

  componentDidMount() {
    this.forceUpdate();
  }

  getHeight = (element) => {
    if (!element) {
      return 0;
    }

    return parseFloat(
      getComputedStyle(element.parentElement, null).height.replace('px', '')
    );
  };

  getChildrenLength = (element) => (element ? element.childElementCount : 0);

  inc = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        counter:
          prevState.counter === this.getChildrenLength(this.ref.current) - 1
            ? 0
            : prevState.counter + 1,
      };
    });
  };

  makeActive = (index) => this.setState({ counter: index });

  render() {
    return (
      <Swipeable
        onSwipedUp={() => this.inc(this._childrenLength)}
        style={{ width: 'inherit', height: 'inherit' }}
      >
        <div className={styles.MainSlider}>
          <div className={styles.MainSliderViewPort}>
            <MainSliderContext.Provider
              value={{
                height: this.getHeight(this.ref.current),
                length: this.getChildrenLength(this.ref.current),
                counter: this.state.counter,
              }}
            >
              <MainSliderWrapper
                ref={this.ref}
                className={styles.MainSliderWrapper}
              >
                <Question />
                <Answer />
                <SchemeSlider />
              </MainSliderWrapper>
            </MainSliderContext.Provider>
            <Next
              handleClick={this.inc}
              className={classnames({
                [styles.MainSliderInvisible]:
                  this.state.counter ===
                  this.getChildrenLength(this.ref.current) - 1,
              })}
            />
            <Pagination
              length={this.getChildrenLength(this.ref.current)}
              counter={this.state.counter}
              handleClick={this.makeActive}
            />
          </div>
        </div>
      </Swipeable>
    );
  }
}

export default MainSlider;
