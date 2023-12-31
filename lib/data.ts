import axios from 'axios';
import {
  AlbumItem,
  Albums,
  Comments,
  PhotoItem,
  Photos,
  PostItem,
  Posts,
  UserItem,
  Users
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

export async function getAlbum(id: number): Promise<AlbumItem | undefined> {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/albums/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getPhotos(id: number): Promise<Photos | undefined> {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/albums/${id}/photos`
    );
    return response.data;
  } catch (error) {
    // console.error(error);
  }
}

export async function getPhotoItem(id: string): Promise<PhotoItem | undefined> {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/photos/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getUsers(): Promise<Users | undefined> {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getUser(id: number): Promise<UserItem | undefined> {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getPostsByUser(id: number): Promise<Posts | undefined> {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}/posts`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
