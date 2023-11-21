import { CommentItem } from '@/lib/types';
export default function CommentItem({ comment }: { comment: CommentItem }) {
  const { name, email, body } = comment;
  return (
    <div>
      <a href={`mailto:${email}`}>{name}</a>
      <div>{body}</div>
    </div>
  );
}
