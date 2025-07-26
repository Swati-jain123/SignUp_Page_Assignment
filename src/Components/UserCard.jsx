import React from 'react';

function UserCard({ name, email }) {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl m-8 ">
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600">{email}</p>
      </div>
      <div className="bg-gray-100 px-6 py-4 text-right">
        <button className="text-sm px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          View Profile
        </button>
      </div>
    </div>
  );
}

export default UserCard;
