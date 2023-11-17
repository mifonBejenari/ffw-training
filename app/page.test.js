import { render } from '@testing-library/react';
import Page from './page';

test('should render component in the page', () => {
  const page = render(<Page />);
  // const { getByTestId } = render(<Page />);
  expect(page.queryByRole('heading')).toBeTruthy();
});
