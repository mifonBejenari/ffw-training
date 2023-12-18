import Link from 'next/link';
import { getSession, logout } from '@/lib/actions';
import { mainMenu, userMenu, userLogin } from './menuData';

export default async function Menu() {
  const session = await getSession();

  return (
    <nav>
      <ul className={'menu'}>
        {mainMenu.map((item) => (
          <li key={`menu-item-${item.url}`}>
            <Link href={item.url}>{item.label}</Link>
          </li>
        ))}
        {session?.isLoggedIn
          ? userMenu.map((item) => (
              <li key={`menu-item-${item.url}`}>
                <Link href={item.url}>{item.label}</Link>
              </li>
            ))
          : userLogin.map((item) => (
              <li key={`menu-item-${item.url}`}>
                <Link href={item.url}>{item.label}</Link>
              </li>
            ))}
        {/*<li>*/}
        {/*  <Link href={`/user/${session.isLoggedIn ? 'profile' : 'login'}`}>*/}
        {/*    {session.isLoggedIn ? 'Profile' : 'Login'}*/}
        {/*  </Link>*/}
        {/*</li>*/}
        {/*{session.isLoggedIn && (*/}
        {/*  <li>*/}
        {/*    <form action={logout}>*/}
        {/*      <div>*/}
        {/*        <button value="Logout">Logout</button>*/}
        {/*      </div>*/}
        {/*    </form>*/}
        {/*  </li>*/}
        {/*)}*/}
      </ul>
    </nav>
  );
}
