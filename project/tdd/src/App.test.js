import './test/setup'
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('rendering', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<App title="hello world"/>)
  });
  it('should component has h2', () => {
    expect(wrapper.find('h2').length).toEqual(1)
  });
  it('should h2 text is props.title', () => {
    expect(wrapper.find('h2').text()).toEqual('hello world')
  });
});

describe('events', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(<App title = "hello world" />)
  });
  it('should counter default value is 0', () => {
    expect(wrapper.state().counter).toEqual(0)
  });
  it('should counter will increase by click button', () => {
    // click third counter will add 3
    const button = wrapper.find('button')
    button.simulate('click');
    button.simulate('click');
    button.simulate('click');
    expect(wrapper.state().counter).toEqual(3);
    expect(wrapper.find('h5').text()).toEqual('3')
  });
});
