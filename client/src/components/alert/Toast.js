
const Toast = ({ msg, handleShow, bgColor }) => {
  return (
    <div
      className={`toast show position-fixed text-black ${bgColor}`}
      style={{ bottom: '5px', left: '5px', minWidth: '200px', zIndex: 50, borderRadius: '12px' }}
    >
      <div
        className={`toast-header text-black ${bgColor}`}
        style={{ borderRadius: '12px', color: 'black' }}
      >
        <strong className="mr-auto text-black">{msg.title}</strong>
        <button
          className="ml-2 mb-1 close text-black"
          data-dismiss="toast"
          style={{ outline: 'none' }}
          onClick={handleShow}
        >
          &times;
        </button>
      </div>
      <div className="toast-body">{msg.body}</div>
    </div>
  );
};

export default Toast;
