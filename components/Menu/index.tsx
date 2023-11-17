import Link from 'next/link';

export default function Menu() {
  return (
    <nav>
      <ul className={'menu'}>
        <li>
          <Link href={'/'}>{'Home'}</Link>
        </li>
        <li>
          <Link href={'/posts'}>{'Posts'}</Link>
        </li>
        <li>
          <Link href={'/test'}>{'Test'}</Link>
        </li>
      </ul>
    </nav>
  );
}
