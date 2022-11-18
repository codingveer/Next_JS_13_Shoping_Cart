"use client"

import useSWR from "swr";
import Link from "next/link";

async function fetcher(){
   return  fetch(`https://product-app-101-server.vercel.app/api/products`).then(res => res.json());
}    
export default function BlogList(){
    const blogs = useSWR("api/products", fetcher)
    console.log(blogs, 'blogs')
    return (
           <div>
                {blogs?.data?.map(blog => 
                      <div key={blog.name}>
                        <Link href={`/blogs/${blog.name.replace(/\s+/g,"-").toLowerCase()}`}>
                            {blog.name}
                        </Link>
                        </div>  

                    )}
             </div>            
    )

}

