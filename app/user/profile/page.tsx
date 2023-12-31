'use server';
import { getSession } from '@/lib/actions';
import { getPostsByUser, getUser } from '@/lib/data';
import { redirect } from 'next/navigation';
import PostsList from '@/components/Posts/PostsList';
import ThemeSelector from '@/components/ThemeSelector/ThemeSelector';
import { saveSettings } from '@/lib/actions';
import Link from 'next/link';
export default async function Page() {
  const session = await getSession();

  const user = await getUser(session.userId);
  const userPosts = await getPostsByUser(session.userId);

  if (!user) {
    redirect('/user/login');
  }

  return (
    <div>
      <h1>{`Hi, ${user.name}`}</h1>
      <h3>{user.email}</h3>
      <h3>{user.username}</h3>
      <ThemeSelector
        saveSettings={saveSettings}
        themeState={session.theme ? session.theme : 'auto'}
      />
      <Link href={'/posts/create'}>Create a ne one</Link>
      {userPosts && <PostsList posts={userPosts} />}
    </div>
  );
}
