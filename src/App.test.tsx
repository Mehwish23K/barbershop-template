import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const headingElement = screen.getByText(/Ottawa Barbershop/i); // Updated to match your actual content
  expect(headingElement).toBeInTheDocument();
});