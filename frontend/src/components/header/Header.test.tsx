import { render } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
  test('it renders', () => {
    const { container } = render(<Header />);

    expect(container.firstChild).toHaveClass('bg-accent drop-shadow-md');
  });
});
