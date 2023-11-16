import { render } from '@testing-library/react';
import Page from './page';

test('CheckSum', () => {
    const { queryByTestId } = render(
        <Page />
    );
    expect(queryByTestId(/heading/i)).toBeTruthy();
});
