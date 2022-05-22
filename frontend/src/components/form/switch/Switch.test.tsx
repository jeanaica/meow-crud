import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Switch from './Switch';

describe('Switch component', () => {
  afterEach(cleanup);

  test('it renders', async () => {
    const { container } = render(
      <Switch
        id='sample'
        label='Sample'
        onChange={jest.fn}
      />
    );

    expect(container.querySelector('.dot')).toHaveClass('bg-accent-100');
  });

  test('it should show check', async () => {
    render(
      <Switch
        id='sample'
        label='Sample'
        onChange={jest.fn}
      />
    );

    userEvent.click(screen.getByText('Sample'));

    expect(screen.getByLabelText('Sample')).toBeChecked();
  });
});
