import type { Post } from "@/lib/posts";

export default function PostDetails({ post }: { post: Post }) {
  return (
    <article>
      <h1 className="font-light text-4xl my-4">
        {post.title}
      </h1>
      <section className="font-bold text-xl text-gray-600">
        {post.author}
      </section>
      <section className="text-right text-gray-500 text-sm italic my-4">
        {post.created}
      </section>
      <section>
        {post.content}
      </section>
    </article>
  )
}