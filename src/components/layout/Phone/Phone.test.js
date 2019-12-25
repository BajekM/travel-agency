import React from 'react';
import { shallow } from 'enzyme';
import Phone from './Phone';

const phones = {
  Amanda: 'Amanda, 678.243.8455',
  Tobias: 'Tobias, 278.443.6443',
  Helena: 'Helena, 167.280.3970',
};

const mockProps = {
  officeHours: 'The office opens at 8:00 UTC',
};


describe('Component Phone', () => {
  it('should render without crashing', () => {
    const component = shallow(<Phone />);
    expect(component).toBeTruthy();
  });

  it('should render heading and Phone', () => {
    const component = shallow(<Phone />);
    expect(component.exists('.component')).toEqual(true);
    expect(component.exists('.phone')).toEqual(true);
  });

});

const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getTime();
  }
};

const checkPhoneAtTime = (time, expectedPhone) => {
  it(`should show correct phone at ${time}`, () => {
    global.Date = mockDate(`2019-05-14T${time}.135Z`);

    const component = shallow(<Phone {...mockProps} />);
    const renderedTime = component.find('div.phone').text();
    expect(renderedTime).toEqual(expectedPhone);

    global.Date = trueDate;
  });
};

const checkPhoneAfterTime = (time, delaySeconds, expectedPhone) => {
  it(`should show correct phone ${delaySeconds} seconds after ${time}`, () => {

    jest.useFakeTimers();

    global.Date = mockDate(`2019-05-14T${time}.135Z`);

    const component = shallow(<Phone {...mockProps} />);
    const newTime = new Date();
    newTime.setSeconds(newTime.getSeconds() + delaySeconds);
    global.Date = mockDate(newTime.getTime());

    jest.advanceTimersByTime(delaySeconds * 1000);

    const renderedTime = component.find('div.phone').text();
    expect(renderedTime).toEqual(expectedPhone);

    global.Date = trueDate;

    jest.useRealTimers();
  });
};

describe('Component Phone with mocked Date', () => {
  checkPhoneAtTime('10:30:58', phones.Amanda);
  checkPhoneAtTime('14:59:59', phones.Tobias);
  checkPhoneAtTime('18:00:00', phones.Helena);
  checkPhoneAtTime('23:00:00', mockProps.officeHours);
});

describe('Component Phone with mocked Date and delay', () => {
  checkPhoneAfterTime('07:59:30', 30, phones.Amanda);
  checkPhoneAfterTime('11:59:30', 30, phones.Tobias);
  checkPhoneAfterTime('15:59:30', 30, phones.Helena);
  checkPhoneAfterTime('21:59:30', 30, mockProps.officeHours);
});
