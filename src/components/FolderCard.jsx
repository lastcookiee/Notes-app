import React from 'react';

const FolderCard = ({ title, date, bgColor }) => {
  return (
    <div className={`p-4 rounded-lg ${bgColor}`}>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-500">{date}</p>
    </div>
  );
};

export default FolderCard;
