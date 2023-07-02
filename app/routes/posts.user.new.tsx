import { ActionFunction, json, redirect } from "@remix-run/node";
import {Form, Link, useActionData, useLoaderData} from "@remix-run/react"
import { emit } from "node:process";
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { createPost } from "~/models/post.server";

type ActionData =
  | {
      title: null | string;
      slug: null | string;
      content: null | string;
    }
  | undefined;
export const action: ActionFunction = async({request}) =>
{
    const formData = await request.formData();
    
    const title = formData.get('title')
    const content = formData.get('slug')
    const slug = formData.get('content')

    const err: ActionData = {
        title : title? null: 'Title is required',
        content : content? null: 'Title is required',
        slug : slug? null: 'Title is required',
        
    }

    // check if there are errors

    const hasErr = Object.values(err).some((errMessage) =>errMessage);
    if(hasErr){
        return json(err)
    }
    //const slug = formData.get('slug')

    await createPost({title, content, slug})
    return redirect('/posts/user')


    
}

const inputClassName = `w-full rounder border-gray-500 px-2 py-1 text-lg`;

export default function NewPost(){
    const errors = useActionData();
    return(
        <Form method="post">
            
            
            <p>
                <label>
                    Post Title: {errors?.title ? (<em className="text-red-600">{errors.title}</em>): null}
                    <input type="text" name="title" className={inputClassName} />
                </label>
            </p>
            <p>
                <label >
                    Post Content:{errors?.content ? (<em className="text-red-600">{errors.content}</em>): null}
                    <input type="text" name="content" className={inputClassName}/>
                   
                </label>

            </p>
            <p>
                <label >
                    Post Content:{errors?.slug ? (<em className="text-red-600">{errors.slug}</em>): null}
                    <input type="text" name="slug" className={inputClassName}/>
                   
                </label>

            </p>
            <p className="text-right">
            
            <button
            type="submit"
            className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300"
         
          >
          Create Post
          </button>
          </p>
    
          
        </Form>
    )
}