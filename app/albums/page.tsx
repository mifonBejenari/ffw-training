import { getAlbums, getPhotos } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';
import { Photos } from '@/lib/types';

type extendedAlbum = {
  photos: Array<any>;
};

export default async function Page() {
  const albums = await getAlbums();

  if (!albums) {
    return null;
  }

  let newAlbums: {
    photos: Photos | undefined;
    userId: number;
    id: number;
    title: string;
  }[] = [];

  await Promise.all(
    albums.map(async (album) => {
      return {
        ...album,
        photos: await getPhotos(album.id)
      };
    })
  ).then((albums) => {
    newAlbums = albums;
  });

  return (
    <main>
      <h1>{'Albums'}</h1>
      <ul className={'albums'}>
        {newAlbums.map((album) => (
          <li key={album.id}>
            <Link href={`albums/${album.id}`}>
              {album && album.photos && (
                <Image
                  src={album.photos[0].thumbnailUrl}
                  width={150}
                  height={150}
                  alt={album.photos[0].title}
                />
              )}
              {album.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
