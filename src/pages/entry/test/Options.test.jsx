import { render, screen } from '@testing-library/react'
import Options from '../Options';

test('scoop options', async () => {
  render(<Options optionType="scoops" />);

  // The mock will return us two imgs if it works correctly.
  // , { name: /scoop$/i }
  const images = await screen.findAllByRole('img');
  expect(images).toHaveLength(2);

  const altText = images.map((element) => element.alt);
  expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});

test('toppings options', async () => {
  render(<Options optionType="toppings" />);

  // The mock will return us two imgs if it works correctly.
  //
  const images = await screen.findAllByRole('img', { name: /topping$/i });
  expect(images).toHaveLength(2);

  const altText = images.map((element) => element.alt);
  expect(altText).toEqual(['Chocolate Chips topping', 'White Chocolate topping']);
});
