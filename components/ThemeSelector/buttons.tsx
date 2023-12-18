'use client';

import { useEffect, useState } from 'react';

const radioValues = [
  { id: 'theme-auto', value: 'auto', label: 'Auto' },
  { id: 'theme-light', value: 'light', label: 'Off' },
  { id: 'theme-dark', value: 'dark', label: 'On' }
];

export default function Buttons({ themeState }: { themeState: string }) {
  const [active, setActive] = useState(themeState);

  useEffect(() => {
    const html = document.querySelector<HTMLElement>('html');
    if (active === 'light') {
      html?.classList.remove('dark-mode');
      html?.classList.add('light-mode');
    } else if (active === 'dark') {
      html?.classList.remove('light-mode');
      html?.classList.add('dark-mode');
    } else {
      html?.classList.remove('light-mode');
      html?.classList.remove('dark-mode');
    }
  }, [active]);

  return (
    <>
      {radioValues.map((radioItem) => (
        <label htmlFor={radioItem.id} key={`theme-settings--${radioItem.id}`}>
          {radioItem.value}
          <input
            type="radio"
            id={radioItem.id}
            name="theme"
            value={radioItem.value}
            checked={active === radioItem.value}
            onChange={() => setActive(radioItem.value)}
          />
        </label>
      ))}
    </>
  );
}
