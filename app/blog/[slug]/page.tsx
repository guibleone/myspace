import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import Link from "next/link"

type Post = {
    title: string
    content: string
    slug: string,
    author: string,
    date: string
}

interface Props {
    params: { slug: string }
}

export default async function BlogPostPage({ params }: Props) {


    const posts: Post[] = await fetch('http://localhost:3000/api/content',
    { cache: 'no-cache' })
        .then(res => res.json())
    const post = posts.find(post => post.slug === params.slug)!

    return (
        <MaxWidthWrapper className='mb-20'>
            <h1 className='text-2xl font-bold mt-10'>{post.title}</h1>
            <p>{post.author} | {post.date}</p>
            <p className='text-gray-500 text-ellipsis mt-6'>{post.content}</p>
            <Link className="underline" href='/blog'>
                Voltar
            </Link>
        </MaxWidthWrapper>
    )
}