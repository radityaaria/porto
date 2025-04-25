import React from 'react';
import Sidebar from '@/components/Sidebar';

const Dashboard = () => {

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex">
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Welcome to Dashboard
          </h1>
          {/* Tambahkan konten dashboard Anda di sini */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
