import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import axios from "axios";

function DetailPage() {    
  let { id } = useParams();
  console.log(id,"id")
  const [post, setPost] = useState(null);
  console.log(post, "post");

  useEffect(() => {
    fetchPosts(id);
  }, [id]);

  const fetchPosts = async (id) => {
    try {
      const response = await axios.get(
        `https://qbw3paee82.execute-api.ap-south-1.amazonaws.com/dev/blog/${id}`
      );
      setPost(response.data.Item);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  return (
    <div class="flex flex-col">
      <div class="bg-gray-100 py-8">
        <div class="container mx-auto px-4">
          <h1 class="text-4xl font-bold text-gray-800 mb-2">{post?.title}</h1>
          <p class="text-gray-600">Published on {dayjs(post?.createdAt).format('ddd, D  MMMM  YYYY')}</p>
          <p class="text-gray-600">Author: {post?.author}</p>
        </div>
      </div>
      <div class="bg-white py-8">
        <div class="container mx-auto px-4 flex flex-col md:flex-row">
          <div class="w-full md:w-3/4 px-4">
            <img
              src={post?.photo}
              alt="Blog Featured Image"
              class="mb-8 w-full"  
            />
            <div class="prose max-w-none">
            {post?.content.split("/n").map((e)=>(
              <p>{e}</p>
            ))}
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
