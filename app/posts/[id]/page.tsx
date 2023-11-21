import { getComments, getPost } from '@/lib/data';
import CommentItem from '@/components/Comments/CommentItem';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const post = await getPost(id);

  if (!post) {
    return;
  }

  const comments = await getComments(id);

  const { title, body } = post;

  return (
    <>
      <h1>{title}</h1>
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
