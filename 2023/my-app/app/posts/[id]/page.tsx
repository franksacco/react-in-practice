import Link from 'next/link'
import { notFound } from 'next/navigation'

import { getPost, getPosts } from '@/lib/posts'
import PostDetails from '@/components/posts/PostDetails'

export default async function Post({ params }: { params: { id: string } }) {
    const { id } = params
    const post = await getPost(Number.parseInt(id))
    if (!post) {
        notFound()
    }
    return (
        <>
            <PostDetails post={post} />
            <div className="underline mt-6 mb-2">
                <Link href="/posts">{"<"} Back to all posts</Link>
            </div>
        </>
    )
}

export async function generateStaticParams() {
    const data = await getPosts()
    return data.map(p => p.id)
}