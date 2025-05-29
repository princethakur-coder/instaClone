import React from 'react';

const storyUsers = [
  { id: 1, username: 'rishu_gupta', image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1', hasStory: true, active: true },
  { id: 2, username: 'kartik_monga', image: 'https://images.pexels.com/photos/1484810/pexels-photo-1484810.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1', hasStory: true, active: false },
  { id: 3, username: 'nav_deep', image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1', hasStory: true, active: false },
  { id: 4, username: 'h1mansii', image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1', hasStory: true, active: false },
  { id: 5, username: 'am_pranav', image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1', hasStory: true, active: false },
  { id: 6, username: 'sahil_585', image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1', hasStory: true, active: false },
  { id: 7, username: 'heenagarwal', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1', hasStory: true, active: false },
  { id: 8, username: 'sakshi.7_', image: 'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1', hasStory: true, active: false },
];

const Stories = () => {
  return (
    <div className="overflow-x-auto no-scrollbar p-2">
      <div className="flex space-x-4 pb-2">
        {storyUsers.map(user => (
          <StoryItem key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

interface StoryItemProps {
  user: {
    id: number;
    username: string;
    image: string;
    hasStory: boolean;
    active: boolean;
  };
}

const StoryItem = ({ user }: StoryItemProps) => {
  const borderClasses = user.hasStory 
    ? "from-yellow-400 via-orange-500 to-pink-500" 
    : "from-gray-300 to-gray-300";

  return (
    <div className="flex flex-col items-center">
      <div className={`rounded-full p-[2px] bg-gradient-to-tr ${borderClasses}`}>
        <div className="rounded-full p-[2px] bg-white">
          <div className="rounded-full overflow-hidden w-14 h-14">
            <img 
              src={user.image} 
              alt={user.username} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <span className="text-xs mt-1 truncate w-16 text-center">{user.username}</span>
    </div>
  );
};

export default Stories;