import { getUsers } from '@/lib/data';
import Link from 'next/link';

export default async function Page() {
  const users = await getUsers();

  if (!users) {
    return;
  }
  return (
    <>
      <h1>{'Users'}</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
