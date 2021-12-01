import React from 'react';
import { render, getByTestId, fireEvent } from '@testing-library/react';
import Result from '../Result';

// import the library to be mocked
import axios from 'axios';

// tell jest to mock the library
jest.mock('axios');

// create some fake data
const data = [
  {
    id: 1,
    name: 'Alice',
    points: 15
  },
  {
    id: 2,
    name: 'Bob',
    points: 10
  },
  {
    id: 3,
    name: 'Carol',
    points: 5
  },
];

test('can display results from an API call', () => {
  // tell jest how to handle all axios GET requests
  axios.get.mockResolvedValue({ data });

  // render the Result component
  const {getByTestId, findByText} = render(<Result status="Waiting" />);

  // find the fetch high scores button
  const highScoreButton = getByTestId('high-scores');

  // click on the fetch high scores button
  fireEvent.click(highScoreButton);

  // check to see if our fake data loaded
  return findByText('Bob', { exact: false });
});


test('shows appropriate message when the status is "Waiting"', () => {
  const fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  };
  
  const { container } = render(<Result status={fakeState.status} />);
  expect(getByTestId(container, 'result_footer')).toHaveTextContent('Waiting for your choice!');
});
