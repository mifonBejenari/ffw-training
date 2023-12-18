import { login } from '@/lib/actions';

export default async function LogIn() {
  return (
    <form action={login}>
      <label form="email">Email:</label>
      <input type="email" name="email" id="email" />
      <label form="password">Password:</label>
      <input type="password" name="password" id="password" />
      <button value="Login">Login</button>
    </form>
  );
}
