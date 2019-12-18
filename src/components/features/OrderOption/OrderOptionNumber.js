import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

class OrderOptionNumber extends React.Component {
  render() {
    const {currentValue, setOptionValue, limits} = this.props;
    return (
      <div className={styles.number}>
        <input
          className={styles.inputSmall}
          type="number"
          value={currentValue}
          min={limits.min}
          max={limits.max}
          onChange={event => setOptionValue(event.currentTarget.value)}
        />
      </div>
    );
  }
}

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.number,
  setOptionValue: PropTypes.func,
  limits: PropTypes.object,
};

export default OrderOptionNumber;
