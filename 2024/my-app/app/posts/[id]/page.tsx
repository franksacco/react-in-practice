import { getPosts } from "@/lib/posts";

export default async function Post({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  return (
    <section>Post {id}</section>
  );
}

export async function generateStaticParams() {
  const data = await getPosts()
  return data.map(p => ({
    id: p.id.toString()
  }))
}