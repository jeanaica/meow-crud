import { render } from '@testing-library/react';
import Layout from './Layout';

describe('Layout component', () => {
  test('it renders Header', () => {
    const { container } = render(<Layout />);

    expect(container.firstChild?.firstChild).toHaveClass('bg-accent');
  });

  test('it renders Content', () => {
    const { container } = render(<Layout />);

    expect(container.firstChild?.childNodes[1]).toHaveClass('overflow-y-auto');
  });

  test('it renders Footer', () => {
    const { container } = render(<Layout />);

    expect(container.firstChild?.lastChild).toHaveClass('bg-secondary-200');
  });
});
