import React from 'react';
import { render, Simulate, waitForExpect } from 'react-testing-library';
import Waiter from './Waiter';

describe('<Waiter />', () => {
  it('Waiter contains text secret message after button has been clicked and 100 ms has passed', async () => {
    const {getByTestId} = render(<Waiter />);

    Simulate.click(getByTestId('click'));
    await waitForExpect( () => {
      expect(getByTestId('text').textContent).toBe('Secret Message')
    });
  });
});