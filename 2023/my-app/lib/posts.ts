import { Post } from '@/lib/types'
import { promises as fs } from 'fs'

export async function getPosts() {
    const file = await fs.readFile(process.cwd() + '/lib/data.json', 'utf-8')
    const data: Post[] = JSON.parse(file)
    return data
}

export async function getPost(id: number) {
    const file = await fs.readFile(process.cwd() + '/lib/data.json', 'utf-8')
    const data: Post[] = JSON.parse(file)
    const post = data.filter(p => p.id === id)
    return post.length === 0 ? null : post[0]
}
