import React from 'react'
import { expect } from 'chai'
import { shallow, mount, render } from 'enzyme'

import Todo from '../src/components/Todo'

describe('Todo', function() {
  let wrapper, TodoHeader, TodoList

  beforeEach(() => {
    wrapper = mount(<Todo />)
    TodoHeader = wrapper.find('TodoHeader')
    TodoList = wrapper.find('TodoList')
  })

  it('should have tag TodoHeader', function() {
    expect(TodoHeader.length).to.equal(1)
  })

  it('should have tag TodoList', function() {
    expect(TodoList.length).to.equal(1)
  })

  it('in TodoHeader, input init value to be "hello world!"', function() {
    const input = TodoHeader.find('input')

    expect(input.length).to.equal(1)
    expect(TodoHeader.props().todo.get('text')).to.equal('hello world!')
    expect(input.get(0).value).to.equal('hello world!!')
  })

  it('in TodoHeader, input change value, should props.todo.text change too', function() {
    const input = TodoHeader.find('input')

    expect(input.get(0).value).to.equal('hello world!')

    input.simulate('change', {target: {value: 'i am item_1'}})

    expect(TodoHeader.props().todo.get('text')).to.equal('i am item_1')
    expect(input.get(0).value).to.equal('i am item_1')
  })

  it('in TodoHeader, have button, and its text to be "创建"', function() {
    const button = TodoHeader.find('button')

    expect(button.length).to.equal(1)
    expect(button.text()).to.equal('创建')
  })

  it('in TodoHeader, input change value, and click button. in TodoList, should props.todos add one more, and tag li add one more too', function() {
    const input = TodoHeader.find('input')
    const button = TodoHeader.find('button')

    expect(TodoList.props().todos.size).to.equal(0)
    expect(TodoList.find('li').length).to.equal(0)

    input.simulate('change', {target: {value: 'i am item_1'}})
    button.simulate('click')

    input.simulate('change', {target: {value: 'i am item_2'}})
    button.simulate('click')

    expect(TodoList.props().todos.size).to.equal(2)
    expect(TodoList.props().todos.get(0).get('text')).to.equal('i am item_1')
    expect(TodoList.props().todos.get(1).get('text')).to.equal('i am item_2')

    expect(TodoList.find('li').length).to.equal(2)
    expect(TodoList.find('li').at(0).find('span').text()).to.equal('i am item_1')
    expect(TodoList.find('li').at(1).find('span').text()).to.equal('i am item_2')
  })
})