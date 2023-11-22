import { getAlbum, getPhotos } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';

export default async function Page({ params }: { params: { id: number } }) {
  const id = params.id;
  const album = await getAlbum(id);
  const photos = await getPhotos(id);

  if (!album) {
    return;
  }
  if (!photos) {
    return;
  }

  const { title } = album;

  return (
    <main>
      <h1>{title}</h1>
      <ul className={'photos'}>
        {photos.map((photo) => (
          <li key={photo.id}>
            <Link href={`/albums/${id}/photo/${photo.id}`}>
              <Image
                className={'photo'}
                src={photo.thumbnailUrl}
                width={500}
                height={500}
                alt={photo.title}
              />
              {photo.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
