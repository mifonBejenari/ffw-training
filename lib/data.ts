import axios from 'axios';
import { Posts } from '@/lib/types';

export async function getPosts(): Promise<Posts | undefined> {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
