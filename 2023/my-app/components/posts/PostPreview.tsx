import Link from 'next/link'

import { Post } from '@/lib/types'

export default function PostPreview({ post }: { post: Post }) {
    return (
        <Link href={'/posts/' + post.id}>
            <div className="flex flex-col p-2">
                <span className="font-bold text-xl">
                    {post.title}
                </span>
                <span className="text-gray-600">
                    {post.created} | {post.author}
                </span>
            </div>
        </Link>
    )
}