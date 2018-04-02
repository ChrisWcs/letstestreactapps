import React from 'react';
import { render } from 'react-testing-library';
import Sum from './Sum';

describe('<Sum />', () => {
  it('Sum renders, sums numbers 1 2 3 and displays it', () => {
    const {getByTestId} = render(<Sum numbers={[1,2,3]} />)
    expect(getByTestId('total').textContent).toBe('6')
  })
});