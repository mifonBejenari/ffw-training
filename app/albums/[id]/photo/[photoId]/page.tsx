import { getAlbum, getPhotoItem } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';

export default async function Page({
  params
}: {
  params: { id: number; photoId: string };
}) {
  const { id, photoId } = params;
  const photo = await getPhotoItem(photoId);
  const album = await getAlbum(id);

  if (!photo) {
    return;
  }

  if (!album) {
    return;
  }
  const { title, url } = photo;

  return (
    <main>
      <Link href={`/albums/${id}`}>{`Back to album "${title}"`}</Link>
      <h1>{`photoPage ${title}`}</h1>
      {url && (
        <Image
          className={'photo'}
          src={url}
          width={500}
          height={500}
          alt={title}
        />
      )}
    </main>
  );
}
