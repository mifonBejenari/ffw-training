import LogOut from '@/components/Login/LogOut';
import { getSession } from '@/lib/userAuthentication';
import { getUser } from '@/lib/data';
import Link from 'next/link';
export default async function Page() {
  const session = await getSession();

  const user = await getUser(session.userId);

  if (!user) {
    return (
      <div>
        <h1>
          {'Please '}
          <Link href={'/user/login'}>{'Login'}</Link>
        </h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{`Hi, ${user.name}`}</h1>
      <h3>{user.email}</h3>
      <LogOut />
    </div>
  );
}
