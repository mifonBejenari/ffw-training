import Link from 'next/link';
import ProfileButton from './ProfileButton';

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
          <Link href={'/albums'}>{'Albums'}</Link>
        </li>
        <li>
          <Link href={'/users'}>{'Users'}</Link>
        </li>
        <li>
          <ProfileButton />
        </li>
      </ul>
    </nav>
  );
}
