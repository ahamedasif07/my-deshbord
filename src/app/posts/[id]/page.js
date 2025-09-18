// src/app/posts/[id]/page.js
import Link from "next/link";
import React from "react";

const PostDetails = async ({ params }) => {
  const { id } = params;

  // fetch post data from API
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h1 className="font-bold text-2xl mb-4 text-gray-800">{post.title}</h1>
      <p className="text-gray-700 mb-6">{post.body}</p>

      <Link href="/posts">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
          Back to Posts
        </button>
      </Link>
    </div>
  );
};

export default PostDetails;
