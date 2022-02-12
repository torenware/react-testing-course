import { render, screen } from '@testing-library/react';
import OrderEntry from '../OrderEntry';

// Imports for overriding our default mocks.
import { rest } from 'msw';
import { server } from '../../../mocks/server';

test('error states for subcomponents', async () => {
  // override server paths
  server.resetHandlers(
    rest.get('http://localhost:3030/scoops', (req, res, ctx) => {
      return res(
        ctx.status(500, 'Simulated server crash')
      );
    }),
    rest.get('http://localhost:3030/toppings', (req, res, ctx) => {
      return res(
        ctx.status(500, 'Simulated server crash')
      );
    }));
  const { debug } = render(<OrderEntry />);
  const alerts = await screen.findAllByRole('alert',
    /an unexpected error occurred/i);

  // eslint-disable-next-line testing-library/no-debugging-utils
  debug();

  // Each subsection of the component should post its own alert.
  expect(alerts).toHaveLength(2);
});

describe('testing error handling', () => {
  test('handling errors from the server', async () => {

  });

});
