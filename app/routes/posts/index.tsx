import { Link, useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
const posts = [
  {
    slug : 'my-first-post',
    title : 'My First Post'
  },
  {
    slug : 'test-blog',
    title : 'test blog'
  }
]


export default function PostsRoute () {



  return (
    <main>
      <h1>Posts</h1>
    
    </main>
  )
        }

