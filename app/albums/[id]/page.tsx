import { getAlbum, getPhotos } from '@/lib/data';

export default async function Page({ params }: { params: { id: string } }) {
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
          <li key={photo.id}>{photo.title}</li>
        ))}
      </ul>
    </main>
  );
}
