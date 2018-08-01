import '../../test/setup'
import React from 'react'
import { shallow } from 'enzyme'
import WInput from './WInput'

describe('rendering', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<WInput />)
  })

  it('should ', () => {
    expect(wrapper.find('input').length).toEqual(1)
  });
});
