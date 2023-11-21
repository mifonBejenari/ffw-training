import { getPosts } from '@/lib/data';
import PostsList from '@/components/Posts/PostsList';

export default async function Page() {
  const posts = await getPosts();

  return (
    <main>
      <h1>{'page title "Posts"'}</h1>

      {posts && (
        <div>
          <PostsList posts={posts} />
        </div>
      )}
    </main>
  );
}
