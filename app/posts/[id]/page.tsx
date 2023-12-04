import { getComments, getPost, getUser } from '@/lib/data';
import CommentItem from '@/components/Comments/CommentItem';
import Link from 'next/link';

export const revalidate = 20;

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const post = await getPost(id);

  if (!post) {
    return;
  }

  const comments = await getComments(id);

  const { title, body } = post;
  const user = await getUser(post.userId);

  return (
    <>
      <h1>{title}</h1>

      {user && (
        <h3>By: {<Link href={`/users/${user.id}`}>{user.name}</Link>}</h3>
      )}

      <div>{body}</div>

      {comments && (
        <>
          <h2>{'Comments:'}</h2>
          <ul>
            {comments.map((comment) => (
              <li key={`post-comment--${comment.id}`}>
                <CommentItem comment={comment} />
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
