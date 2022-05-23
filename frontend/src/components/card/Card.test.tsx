import { cleanup, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Card from './Card';

describe('Card component', () => {
  afterEach(cleanup);

  test('it renders', async () => {
    render(
      <BrowserRouter>
        <Card
          animal={{
            id: 20,
            age: 7,
            breed: 'Egyptian Mau',
            image: 'test.png',
            name: 'Agustina Keefe',
            owner: 'Shanie Keefe',
            description: 'Lorem Ipsum Dolor',
            active: false,
          }}
          selected={false}
          onSelect={jest.fn}
          onClick={jest.fn}
        />
      </BrowserRouter>
    );

    expect(screen.getByText('Egyptian Mau')).toBeVisible();
  });
});
