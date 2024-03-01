import React, { useState, useRef } from 'react';
import cn from 'classnames';
import styles from './index.module.css';

export const Slider = ({
  className,
  classNameTrack,
  classNameActiveTrack,
  classNameSlider,
  minValue = 0,
  maxValue = 100,
  defaultValue,
  step = 1,
  isShowLegend = false,
  onChange,
}) => {
  const minValueCorrect = minValue < maxValue ? minValue : maxValue;
  const maxValueCorrect = maxValue > minValue ? maxValue : minValue;

  const [value, setValue] = useState(() =>
    defaultValue && defaultValue >= minValueCorrect && defaultValue <= maxValueCorrect ? defaultValue : minValueCorrect,
  );
  const rootRef = useRef();

  const correctValueToStep = (value) => {
    return Math.round(value / step) * step;
  };

  const getPercentFromValue = (value) => {
    return correctValueToStep(((value - minValueCorrect) * 100) / (maxValueCorrect - minValueCorrect));
  };

  const getValueFromPercent = (percent) => {
    return correctValueToStep((percent * (maxValueCorrect - minValueCorrect)) / 100 + minValueCorrect);
  };

  const startMooving = (event) => {
    document.addEventListener('mousemove', processMoving);
    document.addEventListener('mouseup', stopMooving);
    document.addEventListener('touchmove', processMoving);
    document.addEventListener('touchend', stopMooving);
    event.preventDefault();
    processMoving(event);
  };

  const processMoving = (event) => {
    if (rootRef?.current) {
      const { left, width } = rootRef.current.getBoundingClientRect();
      let shiftX = (event.touches?.[0].clientX || event.clientX) - left;

      if (shiftX < 0) {
        shiftX = 0;
      } else if (shiftX > width) {
        shiftX = width;
      }

      const percent = Math.round((shiftX * 100) / width);
      const value = getValueFromPercent(percent);
      setValue(value);
      onChange?.(value);
    }
    event.preventDefault();
  };

  const stopMooving = () => {
    document.removeEventListener('mousemove', processMoving);
    document.removeEventListener('mouseup', stopMooving);
    document.removeEventListener('touchmove', processMoving);
    document.removeEventListener('touchend', stopMooving);
  };

  return (
    <div ref={rootRef} className={cn(styles.root, className)}>
      {isShowLegend && (
        <span className={cn(styles.label, styles.labelMin)}>
          <span className={styles.labelMinValue}>{minValueCorrect}</span>
        </span>
      )}
      <div
        className={cn(styles.track, classNameTrack)}
        onMouseDown={startMooving}
        onTouchStart={startMooving}
        role="button"
        tabIndex={0}
      >
        <div
          className={cn(styles.trackActive, classNameActiveTrack)}
          style={{ width: `${getPercentFromValue(value)}%` }}
        >
          <button
            className={cn(styles.slider, classNameSlider)}
            onMouseDown={startMooving}
            onTouchStart={startMooving}
            type="button"
          >
            {isShowLegend && (
              <span className={styles.sliderLabel}>
                <span className={styles.sliderLabelValue}>{value}</span>
              </span>
            )}
          </button>
        </div>
        {/* <button
          className={cn(styles.slider, classNameSlider)}
          onMouseDown={startMooving}
          onTouchStart={startMooving}
          style={{ left: `${getPercentFromValue(value)}%` }}
          type="button"
        >
          {isShowLegend && (
            <span className={styles.sliderLabel}>
              <span className={styles.sliderLabelValue}>{value}</span>
            </span>
          )}
        </button> */}
      </div>
      {isShowLegend && (
        <span className={cn(styles.label, styles.labelMax)}>
          <span className={styles.labelMaxValue}>{maxValueCorrect}</span>
        </span>
      )}
    </div>
  );
};
