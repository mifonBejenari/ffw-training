import { getSession } from '@/lib/userAuthentication';
import LogIn from './LogIn';
import LogOut from './LogOut';

export default async function Log() {
  const session = await getSession();

  if (session.isLoggedIn) {
    return (
      <div>
        <h1>{`You're already logged!`}</h1>
        <LogOut />
      </div>
    );
  }

  return <LogIn />;
}
