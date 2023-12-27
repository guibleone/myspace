import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import PostCard from '@/components/PostCard'
import Link from 'next/link'
import React from 'react'

export default async function Blog() {

  const posts = await fetch('http://localhost:3000/api/content', {
    cache: 'no-cache',
  }).then(res => res.json())

  return (
    <MaxWidthWrapper className='mb-20'>
      <h1 className='text-2xl font-bold py-10'>Blog</h1>
      <div className='grid grid-cols-3 gap-10'>
        {posts.map((post: any) => (
          <div key={post.title}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  )
}
