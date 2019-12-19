import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render tags in spam', () => {
    const expectedTag1  ='spa';
    const expectedTag2  ='pool';
    const expectedTag3  ='skiing';

    const component = shallow(<TripSummary tags={['spa', 'pool', 'skiing']} />);

    const renderedTag1 = ((component.find('.tag')).at(0)).text();
    const renderedTag2 = ((component.find('.tag')).at(1)).text();
    const renderedTag3 = ((component.find('.tag')).at(2)).text();

    expect(renderedTag1).toEqual(expectedTag1);
    expect(renderedTag2).toEqual(expectedTag2);
    expect(renderedTag3).toEqual(expectedTag3);
  });

  it('shouldnt render div if tags is empty array or not defined', () => {
    const component1 = shallow(<TripSummary tags={[]} />);
    const component2 = shallow(<TripSummary  />);

    const div1 = component1.find('.tags');
    const div2 = component2.find('.tags');

    expect(div1).toBeTruthy();
    expect(div2).toBeTruthy();
  });

});
