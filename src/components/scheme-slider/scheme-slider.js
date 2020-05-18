import React, { Component } from 'react';
import styles from './scheme-slider.module.scss';
import SchemeSliderWrapper from '../scheme-slider-wrapper';
import Scheme from '../../components/scheme';
import RangeLabel from '../../components/range-label';
import dataJSON from './assets/data.json';
import { Range, getTrackBackground } from 'react-range';
import { SchemeSliderContext } from '../../context';

const MIN = 0;

const MAX = dataJSON.length - 1;

const STEP = 1;

const matchMediaRules = [
  '(min-device-pixel-ratio: 2)',
  '(min-resolution: 192dpi)',
  '(min-resolution: 2dppx)',
];

class SchemeSlider extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.state = {
      values: [0],
      matches: matchMediaRules.every((rule) => window.matchMedia(rule).matches),
    };
    this._totalWidth = 0;
  }

  componentDidMount() {
    const handler = ({ matches }) => this.setState({ matches });

    matchMediaRules.forEach((rule) =>
      window.matchMedia(rule).addListener(handler)
    );

    this.forceUpdate();
  }

  getWidth = (element) => {
    if (!element) {
      return 0;
    }

    return parseFloat(
      getComputedStyle(element.parentElement, null).width.replace('px', '')
    );
  };

  getChildrenLength = (element) => (element ? element.childElementCount : 0);

  render() {
    const [factor] = this.state.values;

    const { style } = this.props;

    return (
      <section className={styles.SchemeSlider} style={style}>
        <h2 className={styles.SchemeSliderHeader}>Schemes</h2>
        <div className={styles.SchemeSliderViewPort}>
          <SchemeSliderContext.Provider
            value={{
              width: this.getWidth(this.ref.current),
              length: this.getChildrenLength(this.ref.current),
              factor,
            }}
          >
            <SchemeSliderWrapper
              ref={this.ref}
              className={styles.SchemeSliderWrapper}
            >
              {dataJSON
                .map((value) => value.schemeCaption)
                .map((caption, index) => (
                  <Scheme
                    key={index}
                    caption={caption}
                    imgSrc={`images/rangeSlider/scheme-${index + 1}.svg`}
                    id={index + 1}
                    style={{
                      backgroundImage: `url(images/rangeSlider/bg-${index + 1}${
                        this.state.matches ? '@2x' : ''
                      }.jpg)`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: '50% 100%',
                      backgroundSize: 'cover',
                    }}
                  />
                ))}
            </SchemeSliderWrapper>
          </SchemeSliderContext.Provider>
          <div className={styles.SchemeSliderRange}>
            <Range
              step={STEP}
              min={MIN}
              max={MAX}
              values={this.state.values}
              onChange={(values) => this.setState({ values })}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: '11px',
                    width: '60%',
                    background: getTrackBackground({
                      values: this.state.values,
                      colors: ['#d1eaff', 'rgba(209, 234, 255, 0.3)'],
                      min: MIN,
                      max: MAX,
                    }),
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    outline: 'none',
                    height: '52px',
                    width: '65px',
                    backgroundImage: 'url(images/rangeSlider/range-thumb.svg)',
                    backgroundRepeat: 'no-repeat',
                  }}
                />
              )}
            />
          </div>
          <ul className={styles.SchemeSliderRangeLabelList}>
            {dataJSON
              .map((value) => value.schemeYear)
              .map((year, index) => (
                <RangeLabel key={index} label={year} />
              ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default SchemeSlider;
