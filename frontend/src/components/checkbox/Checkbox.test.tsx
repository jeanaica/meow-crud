import { cleanup, render, screen, waitFor } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('Checkbox component', () => {
  afterEach(cleanup);

  test('it renders', async () => {
    render(
      <Checkbox
        id='sample'
        onChange={jest.fn}
        value={false}
      />
    );

    const checkboxLabelComponent = await waitFor(() =>
      screen.getByTestId('sample-checkbox-label')
    );
    expect(checkboxLabelComponent).toHaveClass('bg-accent');
  });

  test('it should show check', async () => {
    render(
      <Checkbox
        id='sample'
        onChange={jest.fn}
        value={true}
      />
    );

    const checkboxLabelComponent = await waitFor(() =>
      screen.getByTestId('sample-checkbox-label')
    );

    expect(checkboxLabelComponent).toHaveClass('bg-accent-400');
  });
});
