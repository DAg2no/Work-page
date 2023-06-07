import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './NavBar';
import Switch from '../switch';

describe('NavBar', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<NavBar />).find('.navbar').exists()).toBe(true);
  });

  it('renders a Switch component', () => {
    expect(shallow(<NavBar />).find(Switch)).toHaveLength(1);
  });

  it('renders the Navbar.Brand with text "Daniel Uribe"', () => {
    expect(shallow(<NavBar />).find('.navbar-brand').text()).toEqual('Daniel Uribe');
  });
});
