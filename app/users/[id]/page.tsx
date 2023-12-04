import { getPostsByUser, getUser } from '@/lib/data';
import Link from 'next/link';

export default async function Page({ params }: { params: { id: number } }) {
  const id = params.id;
  const user = await getUser(id);
  const posts = await getPostsByUser(id);

  if (!user) {
    return;
  }
  if (!posts) {
    return;
  }

  return (
    <main>
      <h1>{`User's page - ${user.name}`}</h1>
      <h3>
        <a href={`mailto:${user.email}`}>{user.email}</a>
      </h3>
      <h3>{'Posts: '}</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
