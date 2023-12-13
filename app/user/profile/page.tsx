import LogOut from '@/components/Login/LogOut';
import { getSession } from '@/lib/userAuthentication';
import { getUser } from '@/lib/data';
import { redirect } from 'next/navigation';
export default async function Page() {
  const session = await getSession();

  const user = await getUser(session.userId);

  if (!user) {
    redirect('/user/login');
  }

  return (
    <div>
      <h1>{`Hi, ${user.name}`}</h1>
      <h3>{user.email}</h3>
      <LogOut />
    </div>
  );
}
