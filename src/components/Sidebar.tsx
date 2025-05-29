import React from 'react';
import { 
  Home, Search, Compass, Film, MessageCircle, Heart, PlusSquare, User, Menu
} from 'lucide-react';
import picImage from '../assests/pic.jpg'

const Sidebar = () => {
  return (
    <div className="h-full flex flex-col py-8">
      {/* Instagram Logo */}
      <div className="px-3 lg:px-6 mb-8">
        <div className="hidden lg:block">
          <h1 className="text-2xl font-cursive font-semibold">Instagram</h1>
        </div>
        <div className="lg:hidden flex justify-center">
          <svg aria-label="Instagram" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
            <title>Instagram</title>
            <path d="M12 2.982c2.937 0 3.285.011 4.445.064a6.087 6.087 0 0 1 2.042.379 3.408 3.408 0 0 1 1.265.823 3.408 3.408 0 0 1 .823 1.265 6.087 6.087 0 0 1 .379 2.042c.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445a6.087 6.087 0 0 1-.379 2.042 3.643 3.643 0 0 1-2.088 2.088 6.087 6.087 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087 6.087 0 0 1-2.043-.379 3.408 3.408 0 0 1-1.264-.823 3.408 3.408 0 0 1-.823-1.265 6.087 6.087 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087 6.087 0 0 1 .379-2.042 3.408 3.408 0 0 1 .823-1.265 3.408 3.408 0 0 1 1.265-.823 6.087 6.087 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511 5.392 5.392 0 0 0-1.949 1.27 5.392 5.392 0 0 0-1.269 1.948 8.074 8.074 0 0 0-.51 2.67C1.013 8.638 1 9.013 1 12s.013 3.362.066 4.535a8.074 8.074 0 0 0 .511 2.67 5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269 8.074 8.074 0 0 0 2.67.51C8.638 22.987 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218 8.074 8.074 0 0 0 .51-2.67C22.987 15.362 23 14.987 23 12s-.013-3.362-.066-4.535a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.948-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.013 14.987 1 12 1Zm0 5.351A5.649 5.649 0 1 0 17.649 12 5.649 5.649 0 0 0 12 6.351Zm0 9.316A3.667 3.667 0 1 1 15.667 12 3.667 3.667 0 0 1 12 15.667Zm5.872-10.859a1.32 1.32 0 1 0 1.32 1.32 1.32 1.32 0 0 0-1.32-1.32Z"></path>
          </svg>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1">
        <ul className="space-y-1">
          <NavItem icon={<Home size={24} />} label="Home" active />
          <NavItem icon={<Search size={24} />} label="Search" />
          <NavItem icon={<Compass size={24} />} label="Explore" />
          <NavItem icon={<Film size={24} />} label="Reels" />
          <NavItem icon={<MessageCircle size={24} />} label="Messages" badge={7} />
          <NavItem icon={<Heart size={24} />} label="Notifications" />
          <NavItem icon={<PlusSquare size={24} />} label="Create" />
          <NavItem icon={<User size={24} />} label="Profile" isProfile={true} />
        </ul>
      </nav>

      {/* More Menu */}
      <div className="mt-auto">
        <NavItem icon={<Menu size={24} />} label="More" />
      </div>
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  badge?: number;
  isProfile?: boolean;
}

const NavItem = ({ icon, label, active = false, badge, isProfile = false }: NavItemProps) => {
  return (
    <li className={`px-3 lg:px-4 py-3 ${active ? 'font-bold' : ''}`}>
      <a href="#" className="flex items-center group">
        <div className="relative">
          {badge && (
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {badge}
            </div>
          )}
          {isProfile ? (
            <div className="w-6 h-6 rounded-full overflow-hidden">
              <img 
                src= {picImage} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <span>{icon}</span>
          )}
        </div>
        <span className="ml-4 hidden lg:block">{label}</span>
      </a>
    </li>
  );
};

export default Sidebar;