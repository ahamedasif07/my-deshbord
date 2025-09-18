"use client";
import React from "react";
import { useAppContext } from "../ContexProvider/ContexProvider";
import PostCard from "../Card/PostCard";

const PostsC = () => {
  const { posts, loading, error } = useAppContext();

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="p-4 grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-co gap-4">
      {posts?.map((post) => (
        <PostCard key={post.id} post={post}></PostCard>
      ))}
    </div>
  );
};

export default PostsC;
