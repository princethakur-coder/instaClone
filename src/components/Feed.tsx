import React from 'react';
import Stories from './Stories';
import Post from './Post';
import picImage from '../assests/pic.jpg'
import profileImage from '../assests/profile.jpg.jpg'

const Feed = () => {
  return (
    <div className="max-w-[470px] mx-auto pt-4 px-2 sm:px-0">
      {/* Stories */}
      <div className="mb-4 bg-white border border-gray-300 rounded-md">
        <Stories />
      </div>
      
      {/* Posts */}
      <div>
        <Post 
          username="__prince.thakur__" 
          userImage= {picImage} 
          postImage= {profileImage} 
          timeAgo="1 d"
          caption="Evening vibes ✨"
        />
        
        <Post 
          username="rahul_traveler" 
          userImage="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1" 
          postImage="https://images.pexels.com/photos/4064432/pexels-photo-4064432.jpeg?auto=compress&cs=tinysrgb&w=600" 
          timeAgo="2 d"
          caption="Adventure awaits 🌄 #travel #explore"
        />
      </div>
    </div>
  );
};

export default Feed;