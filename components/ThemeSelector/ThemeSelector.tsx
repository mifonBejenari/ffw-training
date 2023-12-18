import Buttons from './buttons';
export default async function ThemeSelector() {
  return (
    <form>
      <p>{'Dark Mode'}</p>
      <Buttons />
      <input type={'submit'} value={'Save'} />
    </form>
  );
}
