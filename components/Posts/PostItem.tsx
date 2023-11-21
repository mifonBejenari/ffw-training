import { PostItem } from '@/lib/types';
import Link from 'next/link';

export default function PostItem({ post }: { post: PostItem }) {
  const { id, title, body, userId } = post;

  return (
    <Link href={`posts/${id}`}>
      <h3>{title}</h3>
    </Link>
  );
}
