import React from 'react';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Suggestions from './components/Suggestions';

function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Sidebar - Hidden on mobile */}
      <div className="hidden md:block md:w-[72px] lg:w-[244px] border-r border-gray-300 h-full">
        <Sidebar />
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-[630px] mx-auto">
          <Feed />
        </div>
      </div>
      
      {/* Right Sidebar - Hidden on mobile and small tablets */}
      <div className="hidden lg:block lg:w-[320px] h-full pl-8 pt-8">
        <Suggestions />
      </div>
      
      {/* Mobile Bottom Navigation - Visible only on mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 p-2">
        <div className="flex justify-around items-center">
          <MobileNavItem icon="Home" />
          <MobileNavItem icon="Search" />
          <MobileNavItem icon="PlusSquare" />
          <MobileNavItem icon="Film" />
          <MobileNavItem icon="User" />
        </div>
      </div>
    </div>
  );
}

const MobileNavItem = ({ icon }: { icon: string }) => {
  return (
    <div className="p-2">
      <span className="text-xl">{icon === 'Home' ? '🏠' : icon === 'Search' ? '🔍' : icon === 'PlusSquare' ? '➕' : icon === 'Film' ? '🎬' : '👤'}</span>
    </div>
  );
};

export default App;