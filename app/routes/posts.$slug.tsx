import { LoaderArgs, LoaderFunction, json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import invariant from "tiny-invariant"
import {  getPost } from "~/models/post.server"
type LoaderData = {
  title : string

}

export const loader: LoaderFunction = async ({params}) =>{
  const {slug} = params
invariant(slug,'slug is required')
  const post = await getPost(slug)
  invariant(post,'post not found')
  //const cont = post
  return json({post})
}

export default function TestRoute() {
  const {post} = useLoaderData();


    return (
      <main className="mx-auto max-w-4xl">
        <h1>{post.title}</h1>
        
  
      </main>
    )
   
}