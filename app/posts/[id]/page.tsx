import { getPost } from '@/lib/data';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const post = await getPost(id);

  if (!post) {
    return;
  }

  const { title, body, userId } = post;

  return (
    <>
      <h1>{title}</h1>
      <div>{body}</div>
    </>
  );
}
