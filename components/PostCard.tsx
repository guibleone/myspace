import Link from 'next/link'
import React from 'react'

type Post = {
    title: string,
    content: string,
    date: string,
    slug: string,
    author: string,
}

export default function PostCard({ post }: { post: Post }) {
    const { title, content, date, slug } = post

    return (
        <Link href={`/blog/${slug}`}>
            <div className='border border-gray-200 rounded-md p-4 flex flex-col gap-2 '>
                <h2 className='text-xl font-bold'>{title}</h2>
                <p className='text-gray-500'>
                    {content.length > 70 ? content.slice(0, 70) + '...' : content}
                </p>
                <p className='text-sm'>{date}</p>
            </div>
        </Link>
    )
}
