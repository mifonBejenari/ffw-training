import Link from 'next/link';
import Image from 'next/image';
import { getSession } from '@/lib/actions';

export default async function Logo() {
  const session = await getSession();
  const logoPath =
    session.theme === 'light' ? '/FFW_Logo-black.svg' : '/FFW_Logo-white.svg';
  return (
    <Link href="/">
      <Image src={logoPath} alt={'FFW Logo'} width={150} height={111} />
    </Link>
  );
}
