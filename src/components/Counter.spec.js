import React from 'react';
import { render, Simulate } from 'react-testing-library';
import Counter from './Counter';

describe('<Counter />', () => {
  it('Counter starts at zero', () => {
    const {getByTestId} = render(<Counter />)
    expect(getByTestId('count').textContent).toBe('0')
  });

  it('Counter increments by 1 each time button is clicked', () => {
    const {getByTestId} = render(<Counter />)
    expect(getByTestId('count').textContent).toBe('0')

    Simulate.click(getByTestId('plus'));

    expect(getByTestId('count').textContent).toBe('1')
  });
});