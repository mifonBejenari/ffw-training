import { SessionData } from './types';
import { defaultSession, sessionOptions } from './session';
import { getIronSession, IronSession } from 'iron-session';
import { cookies } from 'next/headers';
// import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { getUsers } from './data';

export async function getSession() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
    session.userId = defaultSession.userId;
  }

  return session;
}

export async function logout() {
  'use server';

  const session = await getSession();
  session.destroy();
  redirect('/user/login');
}

export async function getCurrentUserData(email: string, password: string) {
  const users = await getUsers();
  let currentUser;
  if (users) {
    currentUser = users.filter((userItem) => userItem.email === email);
  }

  if (password === 'qwerty') {
    return currentUser?.[0];
  }
}

export async function login(formData: FormData) {
  'use server';

  const user = await getCurrentUserData(
    formData.get('email') as string,
    formData.get('password') as string
  );

  console.log('user', user);
  if (user) {
    const session = await getSession();

    session.userId = user.id;
    session.isLoggedIn = true;
    await session.save();
    redirect('/user/profile');
  }
}
