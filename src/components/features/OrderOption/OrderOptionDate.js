import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';


// import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class OrderOptionDate extends React.Component {
  state = {
    startDate: new Date(),
  };

  handleChange = date => {
    this.setState({
      startDate: date,
    });
  };

  render() {
    const {setOptionValue} = this.props;
    return (
      <DatePicker
        selected={this.state.startDate}
        onSelect={this.handleChange}
        onChange={() => setOptionValue(this.state.startDate)}
      />
    );
  }
}

OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;
