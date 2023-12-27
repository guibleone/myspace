import FollowButton from "@/components/FollowButton/FollowButton"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { prisma } from "@/lib/prisma"
import { Metadata } from "next"
import Image from "next/image"

type Props = {
    params: {
        id: string
    },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const user = await prisma.user.findUnique({ where: { id: params.id } });
    return { title: `${user?.name} | Perfil` };
}

export default async function UserProfile({ params }: Props) {

    const user = await prisma.user.findUnique({ where: { id: params.id } })
    
    const { name, bio, image } = user ?? {}

    return (
        <MaxWidthWrapper className="mt-10">
            <h1>{name}</h1>

            <Image
                src={image ?? '/mememan.webp'}
                alt="Picture of the author"
                width={300}
                height={300}
            />

            <h3>Bio</h3>
            <p>{bio}</p>

            <FollowButton targetUserId={params.id} />
        </MaxWidthWrapper>
    )
}
