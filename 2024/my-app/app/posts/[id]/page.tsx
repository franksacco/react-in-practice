import Link from "next/link";

import { getPost, getPosts } from "@/lib/posts";
import PostDetails from "@/components/posts/PostDetails";

export default async function Post({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  const post = await getPost(Number.parseInt(id));
  return (
    <>
      <PostDetails post={post} />
      <div className="underline mt-6 mb-2">
        <Link href="/posts">{"<"} Back to all posts</Link>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const data = await getPosts()
  return data.map(p => ({
    id: p.id.toString()
  }))
}