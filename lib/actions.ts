'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { getIronSession } from 'iron-session';
import { SessionData } from '@/lib/types';
import { cookies } from 'next/headers';
import { defaultSession, sessionOptions } from './session';
import { getUsers } from '@/lib/data';

export async function getSession() {
  'use server';
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
    session.userId = defaultSession.userId;
    session.theme = defaultSession.theme;
  }

  revalidatePath('/');

  return session;
}

export async function logout() {
  'use server';
  const session = await getSession();
  session.destroy();

  revalidatePath('/');
  redirect('/');
}

export async function login(formData: FormData) {
  'use server';
  const session = await getSession();

  const user = await getCurrentUserData(
    formData.get('email') as string,
    formData.get('password') as string
  );

  if (user) {
    session.userId = user.id;
    session.isLoggedIn = true;
    await session.save();
    revalidatePath('/');
    redirect('/user/profile');
  }
}

export async function getCurrentUserData(email: string, password: string) {
  const users = await getUsers();
  let currentUser;
  if (users) {
    currentUser = users.filter((userItem) => userItem.email === email);
  }

  if (password === 'qwe') {
    return currentUser?.[0];
  }
}

export async function saveSettings(formData: FormData) {
  const session = await getSession();
  session.theme = formData.get('theme') as string;
  await session.save();
}
