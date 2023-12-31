import { Link, useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {getPostListings} from "~/models/post.server";

type LoaderData = {
  posts: Awaited<ReturnType<typeof getPostListings>>
}

export const loader : LoaderFunction = async () => {
  const posts = await getPostListings();
  //const postsString = JSON.stringify({posts});
  return json<LoaderData>({posts});
}



export default function PostsRoute() {
  const {posts} = useLoaderData() as LoaderData;



  return (
    <main>
      <h1>Posts</h1>
      <Link to = "user" className="text-blue-600 underline">User</Link>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link to={post.slug}  prefetch="intent" className="text-orange-700 underline">
            {post.title}
          </Link>
        </li>
      ))}
      <ul>
      </ul>
    </main>
  )
}

