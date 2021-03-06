import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummary.scss';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';


class OrderSummary extends React.Component {
  render() {
    const {tripCost, options} = this.props;
    return (
      <h2 className={styles.component}>Total: <strong>{formatPrice(Number((calculateTotal(formatPrice(tripCost), options)).toFixed(2)))}</strong></h2>
    );
  }
}

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderSummary;
