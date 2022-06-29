const Toast = ({ msg, handleShow, bgColor }) => {
  return (
    <div className={`toast show position-fixed text-black ${bgColor}`}>
      <div className={`toast-header text-black ${bgColor}`}>
        <strong className="mr-auto text-black">{msg.title}</strong>
        <button className=" toast-close ml-2 mb-1 close text-black" data-dismiss="toast" onClick={handleShow}>
          &times;
        </button>
      </div>
      <div className="toast-body">{msg.body}</div>
    </div>
  );
};

export default Toast;
