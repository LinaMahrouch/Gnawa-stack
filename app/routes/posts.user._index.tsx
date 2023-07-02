import { Link, Outlet, useLoaderData } from "@remix-run/react"
import { LoaderFunction , json} from "@remix-run/node"
import { getPostListings } from "~/models/post.server";

type LoaderData = {
  posts: Awaited<ReturnType<typeof getPostListings>>
}
export const loader: LoaderFunction = async () => {
    return json<LoaderData>({posts : await getPostListings()});
  };
export default function UserRoute () {

const {posts} = useLoaderData()  as LoaderData;
    return (
    <div className="mx-auto ">
      <h1>Welcome to Your Blog!</h1>
      <div className="grid grid-cols-4 md:col-span-1">
        <nav className="col-span-4 md:col-span-1">
      <ul>
        
      {posts.map((post) => (
        <li key={post.slug}>
          <Link to={post.slug}  prefetch="intent" className="text-orange-700 underline">
            {post.title}
          </Link>
        </li>
      ))}
   
      
      </ul>
      </nav>
      <main className="col-span-4 md:col-span-3"><Link to="new">Create new user</Link></main>
      </div>
      </div>

  

    )

}