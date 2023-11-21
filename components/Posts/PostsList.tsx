import PostItem from './PostItem';
import { Posts } from '@/lib/types';

interface Props {
  posts: Posts;
}

export default function PostsList({ posts }: Props) {
  return (
    <ul>
      {posts &&
        posts.map((post) => (
          <li key={`post-key__${post.id}`}>
            <PostItem post={post} />
          </li>
        ))}
    </ul>
  );
}
