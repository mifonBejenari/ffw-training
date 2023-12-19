'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { getIronSession } from 'iron-session';
import { SessionData } from '@/lib/types';
import { cookies } from 'next/headers';
import { defaultSession, sessionOptions } from './session';
import axios from 'axios';

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

export async function getUserByMail({ email }: { email: string }) {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users?email=${email}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getCurrentUserData(email: string, password: string) {
  const user = await getUserByMail({ email });
  if (user && password === 'qwe') {
    return user[0];
  }
}

export async function saveSettings(formData: FormData) {
  const session = await getSession();
  session.theme = formData.get('theme') as string;
  await session.save();
}

export async function createPost(formData: FormData) {
  const session = await getSession();
  if (!session.isLoggedIn) {
    return;
  }
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: formData.get('title'),
      body: formData.get('body'),
      userId: session.userId
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
  redirect('/posts/100');
}
