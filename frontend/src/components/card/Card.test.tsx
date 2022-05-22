import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Card from './Card';

describe('Card component', () => {
  afterEach(cleanup);

  test('it renders', async () => {
    render(
      <Card
        animal={{
          id: 20,
          age: 7,
          breed: 'Egyptian Mau',
          gender: 'Female',
          image: 'test.png',
          name: 'Agustina Keefe',
          owner: 'Shanie Keefe',
          active: false,
        }}
        selected={false}
        onSelect={jest.fn}
      />
    );

    expect(screen.getByText('Egyptian Mau')).toBeVisible();
  });
});
