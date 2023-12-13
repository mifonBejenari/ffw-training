import { logout } from '@/lib/userAuthentication';

export default function LogOut() {
  return (
    <form action={logout}>
      <div>
        <button value="Logout">Logout</button>
      </div>
    </form>
  );
}
