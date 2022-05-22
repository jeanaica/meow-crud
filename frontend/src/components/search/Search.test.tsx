import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from './Search';

describe('Search component', () => {
  afterEach(cleanup);

  test('it renders', async () => {
    render(
      <Search
        value='Sample'
        onChange={jest.fn}
      />
    );

    expect(screen.getByText('Search')).toBeVisible();
  });

  test('it should show searched value', async () => {
    render(
      <Search
        value=''
        onChange={jest.fn}
      />
    );

    const input = screen.getByLabelText(/Search/i);

    userEvent.type(input, 'good');

    expect(input).toHaveValue('good');
  });
});
