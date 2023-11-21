export type PostItem = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type Posts = PostItem[];

export type CommentItem = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type Comments = CommentItem[];
