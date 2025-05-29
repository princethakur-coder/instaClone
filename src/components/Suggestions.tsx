import React from 'react';
import picImage from "../assests/pic.jpg";

const suggestedUsers = [
  { id: 1, username: 'Rohit_25', followedBy: 'pinky_28', image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1' },
  { id: 2, username: '_niraj_47', followedBy: 'rahul.yadav', image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1' },
  { id: 3, username: 'sanjana_11', followedBy: 'deepti.18', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1' },
  { id: 4, username: 'aakarsharya', followedBy: 'samridhi888', image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1' },
  { id: 5, username: 'divya_593', followedBy: 'xsanyaa_', image: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1' },
];

const Suggestions = () => {
  return (
    <div className="max-w-[320px]">
      {/* User Profile */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img 
              src= {picImage}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="font-semibold">_prince.thakur_</div>
            <div className="text-gray-500 text-sm">PRINCE</div>
          </div>
        </div>
        <button className="text-blue-500 text-xs font-bold">Switch</button>
      </div>

      {/* Suggestions Header */}
      <div className="flex justify-between mb-4">
        <span className="text-gray-500 font-semibold">Suggested for you</span>
        <button className="text-xs font-bold">See All</button>
      </div>

      {/* Suggested Users */}
      <div className="space-y-3">
        {suggestedUsers.map(user => (
          <div key={user.id} className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-9 h-9 rounded-full overflow-hidden mr-3">
                <img 
                  src={user.image} 
                  alt={user.username} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div>
                <div className="text-sm font-semibold">{user.username}</div>
                <div className="text-xs text-gray-500">Followed by {user.followedBy}</div>
              </div>
            </div>
            <button className="text-blue-500 text-xs font-bold">Follow</button>
          </div>
        ))}
      </div>

      {/* Footer Links */}
      <div className="mt-6">
        <div className="flex flex-wrap text-xs text-gray-400 mb-2">
          <a href="#" className="mr-1">About</a> •
          <a href="#" className="mx-1">Help</a> •
          <a href="#" className="mx-1">Press</a> •
          <a href="#" className="mx-1">API</a> •
          <a href="#" className="mx-1">Jobs</a> •
          <a href="#" className="mx-1">Privacy</a> •
          <a href="#" className="mx-1">Terms</a> •
          <a href="#" className="mx-1">Locations</a> •
          <a href="#" className="mx-1">Language</a> •
          <a href="#" className="mx-1">Meta Verified</a>
        </div>
        <div className="text-xs text-gray-400">
          © 2025 INSTAGRAM FROM META
        </div>
      </div>
    </div>
  );
};

export default Suggestions;