import React from 'react';

const Loading = () => {
  return (
    <div class="container">
      <svg>
        <circle cx="150" cy="150" r="140"></circle>
        <circle cx="150" cy="150" r="100"></circle>
      </svg>
      <p>loading...</p>
    </div>
  );
};

export default Loading;
