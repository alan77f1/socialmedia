import React from 'react';

const Loading = () => {
  return (
    <div class="container">
      <svg>
        <circle cx="150" cy="150" r="140"></circle>
        <circle cx="150" cy="150" r="100"></circle>
      </svg>

      <text fill="#fff" x="5" y="47">
        loading...
      </text>
    </div>
  );
};

export default Loading;
