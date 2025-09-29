import React from 'react';
import { Bell, User, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold text-primary-600">Carbon Tracker</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Bell size={20} />
          </button>
          <Link to="/profile" className="p-2 hover:bg-gray-100 rounded-lg">
            <User size={20} />
          </Link>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
