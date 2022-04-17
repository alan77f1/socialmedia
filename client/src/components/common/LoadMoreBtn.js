import React from 'react';

const LoadMoreBtn = ({ result, page, load, handleLoadMore }) => {
  return (
    <>
      {result < 9 * (page - 1)
        ? ''
        : !load && (
            <button className="btn btn-primary mx-auto d-block" onClick={handleLoadMore}>
              Xem Thêm
            </button>
          )}
    </>
  );
};

export default LoadMoreBtn;
