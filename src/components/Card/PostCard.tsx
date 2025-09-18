import React from "react";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <Link href={`/posts/${post.id}`}>
      <div className="max-w-sm p-6 h-[300px] flex flex-col bg-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
        <h2 className="font-bold text-lg mb-2 text-gray-800">{post.title}</h2>
        <p className="text-gray-600">{post.body}</p>
      </div>
    </Link>
  );
};

export default PostCard;
