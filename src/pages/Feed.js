import React from "react";
import PostEditor from "../components/PostEditor";
import PostCard from "../components/PostCard";

const Feed = ({ onRequireAuth, posts, onPublish, isAuthenticated }) => {
  return (
    <div className="max-w-xl mx-auto mt-12">
      <div className="mb-8">
        <PostEditor
          onPublish={onPublish}
          isAuthenticated={isAuthenticated}
          onRequireAuth={onRequireAuth}
        />
      </div>
      <div className="space-y-6">
        {posts.map((post, idx) => (
          <PostCard key={idx} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
