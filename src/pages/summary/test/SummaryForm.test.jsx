import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SummaryForm from '../SummaryForm';

test('check form is rendered', () => {
  render(<SummaryForm />);
  const button = screen.getByRole('button');
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).toBeInTheDocument();
  expect(checkbox).not.toBeChecked()
  expect(button).toBeDisabled();

  // Now toggle the checkbox and verify what happens.
  userEvent.click(checkbox);
  expect(button).toBeEnabled();
  userEvent.click(checkbox);
  expect(button).toBeDisabled();

});