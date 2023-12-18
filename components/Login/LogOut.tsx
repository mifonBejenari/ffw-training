import { logout } from '@/lib/actions';

export default async function LogOut() {
  return (
    <form action={logout}>
      <div>
        <button value="Logout" type={'submit'}>
          Logout
        </button>
      </div>
    </form>
  );
}
