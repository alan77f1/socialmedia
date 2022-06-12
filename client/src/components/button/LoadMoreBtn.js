const LoadMoreBtn = ({ result, page, load, handleLoadMore }) => {
  return (
    <>
      {result < 9 * (page - 1)
        ? ''
        : !load && (
            <button className="btn-loading" onClick={handleLoadMore}>
              Xem Thêm
            </button>
          )}
    </>
  );
};

export default LoadMoreBtn;
