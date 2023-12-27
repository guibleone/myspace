import Link from 'next/link';
import Image from 'next/image';
import styles from './NavMenu.module.css';
import { SignInButton } from './Buttons';
import MaxWidthWrapper from './MaxWidthWrapper';

export default function NavMenu() {
  return (   
  <MaxWidthWrapper className='bg-blue-600'>
    <nav className=' flex text-white justify-between items-center'>
   
        <Link href={'/'}>
          <Image
            src="/logo.png" // Route of the image file
            width={216}
            height={30}
            alt="NextSpace Logo"
          />
        </Link>
        <ul className={styles.links}>
          <li>
            <Link href={'/about'}>Sobre</Link>
          </li>
          <li>
            <Link href={'/blog'}>Blog</Link>
          </li>
          <li>
            <Link href={'/users'}>Usuários</Link>
          </li>
          <li>
            <SignInButton />
          </li>
        </ul>
     
    </nav>
    </MaxWidthWrapper>
  );
}