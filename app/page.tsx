import styles from './page.module.css';
import { getPosts } from '@/lib/data';
import PostsList from '@/components/Posts/PostsList';

export const revalidate = 20;

export default async function Home() {
  const posts = await getPosts();

  if (!posts) {
    return null;
  }
  // Shuffle array
  const shuffled = posts.sort(() => 0.5 - Math.random());

  // Get sub-array of first n elements after shuffled
  let selected = shuffled.slice(0, 5);

  return (
    <main className={styles.main}>
      <h1 role={'heading'}>{'Home'}</h1>
      <h2>Random posts</h2>
      <PostsList posts={selected} />
    </main>
  );
}
