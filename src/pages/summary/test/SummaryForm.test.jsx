import { render, screen, waitFor } from '@testing-library/react';
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

test('popover behavior of T&C', async () => {
  render(<SummaryForm />);
  // Not in page on render.
  let popover = screen.queryByText(/ice cream/i);
  console.log('po-before', popover);
  expect(popover).not.toBeInTheDocument();

  // Appear when mouse is over text.
  const linkText = screen.getByText(/terms and conditions/i);
  userEvent.hover(linkText);
  popover = screen.getByText(/ice cream/i);
  expect(popover).toBeInTheDocument();

  // And expect it to be gone again after we hover.
  userEvent.unhover(linkText);
  await waitFor(() => expect(screen.queryByText(/ice cream/i)).not.toBeInTheDocument());
  popover = screen.queryByText(/ice cream/i);
  expect(popover).not.toBeInTheDocument();
});