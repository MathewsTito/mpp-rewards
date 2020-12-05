import { render, screen } from '@testing-library/react';
import App from './App';

test('Ensure Main Menu is rendered', () => {
  const {container,getByText} = render(<App />);
  //console.log(container.innerHTML);
  expect(getByText(/Manage Promotions/)).toBeInTheDocument();
  expect(getByText(/Manage Offers/)).toBeInTheDocument();
  expect(getByText(/Manage Catchups/)).toBeInTheDocument();
});
