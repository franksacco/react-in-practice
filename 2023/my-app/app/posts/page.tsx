import PostPreview from "@/components/posts/PostPreview"
import { getPosts } from "@/lib/posts"

export default async function Posts() {
    const posts = await getPosts()
    return (
        <>
            <h1 className="font-light text-4xl mt-4 mb-6">
                Blog Posts
            </h1>
            <div className="border-t">
                {posts.map((p, i) => (
                    <div className="border-b py-2" key={i}>
                        <PostPreview post={p} />
                    </div>
                ))}
            </div>
        </>
    )
}
