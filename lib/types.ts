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

export type AlbumItem = {
  userId: number;
  id: number;
  title: string;
  photos?: Photos;
};

export type Albums = AlbumItem[];

export type PhotoItem = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type Photos = PhotoItem[];

export type UserItem = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export type Users = UserItem[];
