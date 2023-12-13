import Log from '@/components/Login/Log';
import { getSession } from '@/lib/userAuthentication';
import { redirect } from 'next/navigation';
export default async function Page() {
  const session = await getSession();

  if (session.isLoggedIn) {
    redirect('/user/profile');
  }

  return (
    <div>
      <h1>{'User login page'}</h1>
      <Log />
    </div>
  );
}
