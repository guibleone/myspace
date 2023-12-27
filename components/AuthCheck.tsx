'use client'

import { useSession } from "next-auth/react"

function AuthCheck({
    children
}: {
    children: React.ReactNode
}) {

    const { data: session, status } = useSession()

    if (status === 'authenticated') {
        return <>{children}</>
    } else {
        return <></>
    }


}

export default AuthCheck