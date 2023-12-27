'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export function SignInButton() {
    const { data: session, status } = useSession();

    if (status === 'loading') {
        return <>...</>;
    }

    if (status === 'authenticated') {
        return (
            <>
                <Link href={`/dashboard`}>
                    <Image
                        src={session.user?.image ?? '/mememan.webp'}
                        width={32}
                        height={32}
                        alt={session.user?.name ?? 'User avatar'}
                    />
                </Link>
                <SignOutButton />
            </>
        );
    }

    return <button onClick={() => signIn()}>Entrar</button>;
}

export function SignOutButton() {
    return <button onClick={() => signOut()}>Sair</button>;
}