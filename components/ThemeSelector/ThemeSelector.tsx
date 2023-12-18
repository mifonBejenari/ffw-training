import Buttons from './buttons';
export default async function ThemeSelector({
  saveSettings,
  themeState
}: {
  saveSettings: any;
  themeState: string;
}) {
  return (
    <form action={saveSettings}>
      <p>{'Dark Mode'}</p>
      <Buttons themeState={themeState} />
      <input type={'submit'} value={'Save'} />
    </form>
  );
}
