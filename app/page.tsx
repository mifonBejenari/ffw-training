import styles from './page.module.css';
import { getPosts } from '@/lib/data';
import PostsList from '@/components/Posts/PostsList';

export const revalidate = 20;

export default async function Home() {
  const posts = await getPosts();

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
