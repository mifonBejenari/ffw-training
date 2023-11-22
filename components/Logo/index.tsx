import Link from 'next/link';
import Image from 'next/image';
export default function Logo() {
  return (
    <Link href="/">
      <Image
        src={'FFW_Logo-white.svg'}
        alt={'FFW Logo'}
        width={150}
        height={111}
      />
    </Link>
  );
}
