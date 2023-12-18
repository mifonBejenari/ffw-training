const radioValues = [
  { id: 'themeSelectorAuto', value: 'themeSelectorAuto', label: 'Auto' },
  { id: 'darkModeOff', value: 'darkModeOff', label: 'Off' },
  { id: 'darkModeOn', value: 'darkModeOn', label: 'On' }
];

export default async function Buttons() {
  return (
    <>
      {radioValues.map((radioItem) => (
        <>
          <input
            type="radio"
            id={radioItem.id}
            name="ThemeSelector"
            value={radioItem.value}
          />
          <label htmlFor={radioItem.id}>{radioItem.value}</label>
        </>
      ))}
    </>
  );
}
