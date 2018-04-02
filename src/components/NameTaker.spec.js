import React from 'react';
import { render, Simulate } from 'react-testing-library';
import NameTaker from './NameTaker';

describe('<NameTaker />', () => {
  it('NameTaker contains input that can have its value changed', () => {
    const {getByTestId} = render(<NameTaker />);
    Simulate.change(getByTestId('input'), { target: { value: "George"} });
    expect(getByTestId('input').value).toBe('George')
  });

  it('NameTaker displays name below after it has been entered', () => {
    const {getByTestId} = render(<NameTaker />);
    Simulate.change(getByTestId('input'), { target: { value: "George"} });
    Simulate.click(getByTestId('enter'));
    expect(getByTestId('n0').textContent).toBe('George');
  });

});