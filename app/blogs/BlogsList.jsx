"use client"

import useSWR from "swr";
import Link from "next/link";



export default function BlogList(){
    function fetcher() {
        fetch(`https://product-app-101-server.vercel.app/api/products`)
        .then(res => res.json());
    }
    const blogs = fetcher();
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

