import React from "react";

const PostCard = ({ post }) => {
  console.log("🚀 ~ PostCard ~ post:", post);
  const notImplemented = () => alert("function not implemented");
  const initial = post.author ? post.author.charAt(0).toUpperCase() : "?";
  return (
    <div className="bg-gray-100 rounded-xl p-2 flex flex-col gap-2 hover:shadow-xl transition-shadow duration-200">
      <div className="flex flex-col gap-2 bg-white rounded-lg shadow-lg p-4">
        <div className="flex items-start gap-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-lg text-gray-700 flex-shrink-0">
            {initial}
          </div>
          <div className="min-w-0 flex-1">
            <div className="font-semibold text-gray-900 text-sm truncate">
              {post.author}
            </div>
            <div className="text-xs text-gray-400">{post.time}</div>
          </div>
        </div>
        <div className="flex items-start gap-3 mb-2">
          <div className="w-10 h-10 flex items-center justify-center text-2xl flex-shrink-0">
            {post.emoji}
          </div>
          <div className="text-gray-800 text-sm break-words overflow-hidden">
            {post.text}
          </div>
        </div>
      </div>
      <div className="flex gap-4 text-gray-400 text-lg">
        <button onClick={notImplemented} aria-label="Like">
          <span role="img" aria-label="like">
            ♡
          </span>
        </button>
        <button onClick={notImplemented} aria-label="Comment">
          <span role="img" aria-label="comment">
            💬
          </span>
        </button>
        <button onClick={notImplemented} aria-label="Share">
          <span role="img" aria-label="share">
            🔗
          </span>
        </button>
      </div>
    </div>
  );
};

export default PostCard;
