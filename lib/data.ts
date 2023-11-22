import axios from 'axios';
import {
  AlbumItem,
  Albums,
  Comments,
  Photos,
  PostItem,
  Posts
} from '@/lib/types';

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

export async function get5RandomPosts(): Promise<Posts | undefined> {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    const posts = response.data;
    const shuffled = posts.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
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

export async function getAlbums(): Promise<Albums | undefined> {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/albums'
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getAlbum(id: string): Promise<AlbumItem | undefined> {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/albums/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getPhotos(id: string): Promise<Photos | undefined> {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/albums/${id}/photos`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
