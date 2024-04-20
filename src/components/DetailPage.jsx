import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../client";
import SanityBlockContent from "@sanity/block-content-to-react";
import dayjs from "dayjs";

function DetailPage() {
    
    let { id } = useParams();
  console.log(id,"id")
  const [post, setPost] = useState(null);
  console.log(post, "post");
  useEffect(() => {
    client
      .fetch(
        `*[ _id=="${id}" ][0]{
              _id,
            author->,
            publishedAt,
            title,
            categories[]->,
            body,
            mainImage{
              asset->{
                url
              }
            }
          }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, [id]);
  return (
    <div class="flex flex-col">
      <div class="bg-gray-100 py-8">
        <div class="container mx-auto px-4">
          <h1 class="text-4xl font-bold text-gray-800 mb-2">{post?.title}</h1>
          <p class="text-gray-600">Published on {dayjs(post?.publishedAt).format('ddd, D  MMMM  YYYY')}</p>
          <p class="text-gray-600">Author: {post?.author?.name}</p>
        </div>
      </div>
      <div class="bg-white py-8">
        <div class="container mx-auto px-4 flex flex-col md:flex-row">
          <div class="w-full md:w-3/4 px-4">
            <img
              src={post?.mainImage?.asset?.url}
              alt="Blog Featured Image"
              class="mb-8"  
            />
            <div class="prose max-w-none">
            <SanityBlockContent
                        className=""
                        dataset="production"
                        projectId="8zfgta4r"
                        blocks={post?.body}
                      />
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
