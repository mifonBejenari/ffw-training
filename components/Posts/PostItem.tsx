import { PostItem } from '@/lib/types';

export default function PostItem({ post }: { post: PostItem }) {
  const { id, title, body, userId } = post;

  return <>{title && <h3>{title}</h3>}</>;
}
