import React from 'react';

const Loading = () => {
  return (
    <div
      className="container position-fixed w-100 h-100 text-center loading"
      style={{ background: '#0008', color: 'white', top: 0, left: 0, right: 0, zIndex: 50 }}
    >
      <svg>
        <circle cx="150" cy="150" r="140"></circle>
        <circle cx="150" cy="150" r="100"></circle>
      </svg>
      <p>loading...</p>
    </div>
  );
};

export default Loading;
