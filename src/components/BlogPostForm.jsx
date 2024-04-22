// src/components/BlogPostForm.js

import axios from 'axios';
import React, { useState } from 'react';

const BlogPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [photo, setPhoto] = useState('');
  console.log(title,"title",author,"author",photo,"photo",content,"content");

  const handleCreatePost = async (newPost) => {
    try {
      await axios.post('https://qbw3paee82.execute-api.ap-south-1.amazonaws.com/dev/blog', {
        data:JSON.stringify(newPost)
      },{
        headers: {
            "Access-Control-Allow-Headers" : "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
            "Content-Type": "application/json"
            }
      });
      alert('Post created successfully');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreatePost({ title, content, author, photo });
    setTitle('');
    setContent('');
    setAuthor('');
    setPhoto('');
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   <label>Title:</label>
    //   <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
    //   <label>Content:</label>
    //   <textarea value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
    //   <label>Author:</label>
    //   <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
    //   <button type="submit">Submit</button>
    // </form>

    <div class="bg-white border rounded-lg px-8 py-6 mx-auto my-8 max-w-2xl">
    <h2 class="text-2xl font-medium mb-4">Create Blog</h2>
    <form onSubmit={handleSubmit}>
        <div class="mb-4">
            <label for="title" class="block text-gray-700 font-medium mb-2">Title</label>
            <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)}
                class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required />
        </div>
        <div class="mb-4">
            <label for="author" class="block text-gray-700 font-medium mb-2">Author</label>
            <input type="text" id="author" name="author" value={author} onChange={(e) => setAuthor(e.target.value)}
                class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required />
        </div>
        <div class="mb-4">
            <label for="photo" class="block text-gray-700 font-medium mb-2">Photo Url</label>
            <input type="text" id="photo" name="photo" value={photo} onChange={(e) => setPhoto(e.target.value)}
                class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"  />
        </div>     
      
        <div class="mb-4">
            <label for="content" class="block text-gray-700 font-medium mb-2">Content</label>
            <textarea id="content" name="content" value={content} onChange={(e) => setContent(e.target.value)}
                class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" rows="5"></textarea>
        </div>
        <div>
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Submit</button>
        </div>

    </form>
</div>
  );
};

export default BlogPostForm;
