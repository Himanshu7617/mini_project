import React from 'react'
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4 bg-gray-100 rounded-lg shadow-lg">
      <div className="text-xl font-semibold mb-4">Dashboard</div>
      <button><Link to="/">Back</Link></button>
    </div>
  );
}

export default Dashboard