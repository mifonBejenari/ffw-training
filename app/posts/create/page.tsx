import { createPost, getSession } from '@/lib/actions';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function Page() {
  const session = await getSession();

  if (!session.userId) {
    redirect('/user/login');
  }
  return (
    <form action={createPost}>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" placeholder="Title" />
      </div>
      <div>
        <label htmlFor="body">Body</label>
        <textarea name="body" placeholder="..." />
      </div>
      <button type="submit">Create</button>
    </form>
  );
}
