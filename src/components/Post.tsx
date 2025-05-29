import React from 'react';
import { MoreHorizontal, Heart, MessageCircle, Send, Bookmark } from 'lucide-react';

interface PostProps {
  username: string;
  userImage: string;
  postImage: string;
  caption?: string;
  timeAgo: string;
}

const Post = ({ username, userImage, postImage, caption, timeAgo }: PostProps) => {
  return (
    <div className="border border-gray-300 rounded-sm bg-white mb-6">
      {/* Post Header */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full overflow-hidden mr-3">
            <img src={userImage} alt={username} className="h-full w-full object-cover" />
          </div>
          <div className="font-semibold">{username}</div>
          <div className="ml-1 text-gray-500">• {timeAgo}</div>
        </div>
        <button>
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Post Image */}
      <div className="relative pb-[100%]">
        <img 
          src={postImage} 
          alt="Post content" 
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>

      {/* Post Actions */}
      <div className="p-3">
        <div className="flex justify-between mb-2">
          <div className="flex space-x-4">
            <button className="focus:outline-none">
              <Heart size={24} />
            </button>
            <button className="focus:outline-none">
              <MessageCircle size={24} />
            </button>
            <button className="focus:outline-none">
              <Send size={24} />
            </button>
          </div>
          <button className="focus:outline-none">
            <Bookmark size={24} />
          </button>
        </div>

        {/* Likes */}
        <div className="font-semibold mb-1">947 likes</div>

        {/* Caption */}
        {caption && (
          <div className="mb-1">
            <span className="font-semibold mr-1">{username}</span>
            <span>{caption}</span>
          </div>
        )}

        {/* View Comments */}
        <div className="text-gray-500 text-sm mb-1">View all 224 comments</div>

        {/* Add Comment */}
        <div className="flex items-center mt-3 border-t pt-3">
          <input 
            type="text" 
            placeholder="Add a comment..." 
            className="flex-1 focus:outline-none text-sm"
          />
          <button className="text-blue-500 font-semibold text-sm">Post</button>
        </div>
      </div>
    </div>
  );
};

export default Post;