import React from 'react';
import Game from '../Game';
import { render, fireEvent, prettyDOM } from '@testing-library/react';

test('can toggle the cheating state by clicking on the robot head', () => {

  const { getByTestId, container, debug } = render(<Game />);

  // getByTestId(container, 'robot-head');
  // console.log(prettyDOM(container));
  // debug();
  
  // find the robot head icon
  const robotHeadIcon = getByTestId('robot-head');

  // click on the robot head
  fireEvent.click(robotHeadIcon);
  
  // check to see if the robot head icon has the class "cheating"
  expect(robotHeadIcon).toHaveClass('cheating');
  
  // click on the robot head
  fireEvent.click(robotHeadIcon);

  // check to see that the robot head DOES NOT have the class "cheating"
  expect(robotHeadIcon).not.toHaveClass('cheating');
});
