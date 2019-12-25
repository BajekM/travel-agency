import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Phone.scss';
import Icon from '../../common/Icon/Icon';



class Phone extends React.Component {
  constructor(){
    super();

    /* run this.forceUpdate() every second */
    setInterval(() => this.forceUpdate(), 1000);
  }

  isOfficeOpened() {
    const currentTime = new Date();
    const currentHour = Math.floor(currentTime.getUTCHours());

    if(currentHour >= 22 && currentHour < 8){
      return false;
    }else {
      return true;
    }
  }

  getPhoneNumber(){
    const currentTime = new Date();
    const currentHour = Math.floor(currentTime.getUTCHours());

    if(currentHour >= 8 && currentHour < 12){
      return 'Amanda, 678.243.8455';
    } else if (currentHour >= 12 && currentHour < 16){
      return 'Tobias, 278.443.6443';
    } else if (currentHour >= 16 && currentHour < 22){
      return 'Helena, 167.280.3970';
    } else {
      return 'The office opens at 8:00 UTC';
    }
  }
  render() {
    // const {officeHours} = this.props;
    const phoneNumber = this.getPhoneNumber();
    return (
      <div className={styles.component}>
        <Icon name='phone' />
        <div className={styles.phone}>{phoneNumber}</div>
      </div>
    );
  }
}

// Phone.propTypes = {
//   officeHours: PropTypes.string,
// };

export default Phone;
