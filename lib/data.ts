import axios from 'axios';
import { CommentItem, Comments, PostItem, Posts } from '@/lib/types';

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

export async function getPost(id: string): Promise<PostItem | undefined> {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getComments(id: string): Promise<Comments | undefined> {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
