import React, { useState, useEffect } from 'react';
import { FaHome, FaProjectDiagram, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import client from '@/libs/axios';

const Sidebar = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    name: 'Loading...',
    email: 'Loading...',
    profile: '/default-avatar.png'
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          router.push('/login');
          return;
        }

        const response = await client.get('/Users', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (response.data) {
          const userData = response.data;
          setUser({
            name: `${userData.firstName} ${userData.lastName}`,
            email: userData.email,
            profile: userData.profile[0]?.url || '/default-avatar.png'
          });
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        if (error.response?.status === 401) {
          localStorage.removeItem('token');
          router.push('/login');
        }
      }
    };

    fetchUser();
  }, []);

// ... existing code ...

const handleLogout = () => {
  localStorage.removeItem('token');
  router.push('/login');
};

  return (
    <div className="w-64 bg-white dark:bg-gray-800 shadow-lg flex flex-col h-screen">
      {/* User Profile Section */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          {/* <div className="relative h-10 w-10 rounded-full overflow-hidden">
            <Image
              src={user.profilePicture}
              alt={user.name}
              fill
              className="object-cover"
            />
          </div> */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
              {user.name}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
              {user.email}
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Dashboard</h2>
      </div>

      <nav className="mt-4 flex-grow">
        <Link href="/dashboard" className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
          <FaHome className="mr-3" />
          Home
        </Link>
        <Link href="/projects" className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
          <FaProjectDiagram className="mr-3" />
          Projects
        </Link>
        <Link href="/profile" className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
          <FaUser className="mr-3" />
          Profile
        </Link>
        <Link href="/settings" className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
          <FaCog className="mr-3" />
          Settings
        </Link>
      </nav>

      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={handleLogout}
          className="flex items-center w-full px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
        >
          <FaSignOutAlt className="mr-3" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar; 