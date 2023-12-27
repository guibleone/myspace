import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import UserCard from "@/components/UserCard/UserCard";
import { prisma } from "@/lib/prisma"

export default async function Users() {

    const users = await prisma.user.findMany()

    return (
        <MaxWidthWrapper>
            <div className="grid grid-cols-3 mt-10">
                {users.map((user) => {
                    return <UserCard key={user.id} {...user} />;
                })}
            </div>
        </MaxWidthWrapper>
    )
}