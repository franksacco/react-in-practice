import Link from 'next/link'

import { getPosts } from '@/lib/posts'
import PostPreview from '@/components/posts/PostPreview'

export default async function Home() {
  const posts = (await getPosts()).slice(0, 3)
  return (
    <>
      <div className="font-light text-4xl my-4">
        Welcome to my blog!
      </div>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse urna
      nibh, dignissim nec nisl vitae, convallis faucibus nunc. Duis eu lectus
      sollicitudin, euismod ipsum at, varius nulla. Morbi ac condimentum purus.
      </p>
      <div className="text-2xl mt-6 mb-4">Last blog posts</div>
      <div className="border-t">
        {posts.map((p, i) => (
          <div className="border-b py-2" key={i}>
            <PostPreview post={p} />
          </div>
        ))}
      </div>
      <div className="text-center underline mt-6 mb-2">
        <Link href="/posts">See all posts</Link>
      </div>
    </>
  )
}
