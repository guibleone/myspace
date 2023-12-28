import { getServerSession } from 'next-auth'
import React from 'react'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { ProfileForm } from './ProfileForm'
import { authOptions } from '@/utils/authOptions'


export default async function Dashboard() {
    const session = await getServerSession(authOptions)

    if(!session) {
        redirect('/api/auth/sigin')
    }

    const currentUserEmail = session.user?.email!
    const user = await prisma.user.findUnique({ where: { email: currentUserEmail } })

    return (
        <div>
            <h1 className='text-2xl font-bold px-8 mt-10'>Dashboard</h1>
            <ProfileForm user={user} />
        </div>
    )
}
