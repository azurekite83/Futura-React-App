import React from 'react';
import { render } from '@testing-library/react';
import FuturaApp from './FuturaApp';

test('renders learn react link', () => {
  const { getByText } = render(<FuturaApp />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
