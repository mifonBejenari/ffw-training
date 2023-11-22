import { getAlbums } from '@/lib/data';
import Link from 'next/link';

export default async function Page() {
  const albums = await getAlbums();

  if (!albums) {
    return null;
  }

  return (
    <main>
      <h1>{'Albums'}</h1>
      <ul className={'albums'}>
        {albums.map((album) => (
          <li key={album.id}>
            <Link href={`albums/${album.id}`}>{album.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
