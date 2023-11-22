import styles from './page.module.css';
import { get5RandomPosts } from '@/lib/data';
import PostsList from '@/components/Posts/PostsList';

export const revalidate = 20;

export default async function Home() {
  const posts = await get5RandomPosts();

  if (!posts) {
    return null;
  }

  return (
    <main className={styles.main}>
      <h1 role={'heading'}>{'Home'}</h1>
      <h2>Random posts</h2>
      <PostsList posts={posts} />
    </main>
  );
}
