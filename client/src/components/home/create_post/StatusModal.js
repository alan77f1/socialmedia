import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GLOBALTYPES } from '../../../redux/actions/globalTypes';
import { createPost, updatePost } from '../../../redux/actions/postAction';
import Icons from '../../Icons';
import { imageShow, videoShow } from '../../../utils/mediaShow';

const StatusModal = () => {
  const { auth, status, socket } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);

  const [stream, setStream] = useState(false);
  const videoRef = useRef();
  const refCanvas = useRef();
  const [tracks, setTracks] = useState('');

  const handleChangeImages = (e) => {
    const files = [...e.target.files];
    let err = '';
    let newImages = [];

    files.forEach((file) => {
      if (!file) return (err = 'Tập Tin Không Tồn Tại.');

      if (file.size > 1024 * 1024 * 10) {
        return (err = 'Dung Lượng Tối Đa 10mb.');
      }

      return newImages.push(file);
    });

    if (err) dispatch({ type: GLOBALTYPES.ALERT, payload: { error: err } });
    setImages([...images, ...newImages]);
  };

  const deleteImages = (index) => {
    const newArr = [...images];
    newArr.splice(index, 1);
    setImages(newArr);
  };

  const handleStopStream = () => {
    tracks.stop();
    setStream(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (images.length === 0)
      return dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: 'Vui Lòng Thêm Ảnh Của Bạn.' },
      });

    if (status.onEdit) {
      dispatch(updatePost({ content, images, auth, status }));
    } else {
      dispatch(createPost({ content, images, auth, socket }));
    }

    setContent('');
    setImages([]);
    if (tracks) tracks.stop();
    dispatch({ type: GLOBALTYPES.STATUS, payload: false });
  };

  useEffect(() => {
    if (status.onEdit) {
      setContent(status.content);
      setImages(status.images);
    }
  }, [status]);

  return (
    <div className="status_modal">
      <form onSubmit={handleSubmit}>
        <div className="status_header">
          <h5 style={{ marginLeft: '178px' }}>Tạo bài viết mới</h5>

          <button
            className="btn  btn_close"
            onClick={() =>
              dispatch({
                type: GLOBALTYPES.STATUS,
                payload: false,
              })
            }
            style={{
              borderRadius: '50px',
              background: '#E4E6EB',
              fontWeight: 'bold',
              color: '#606770',
              fontSize: '17px',
            }}
          >
            &times;
          </button>
        </div>

        <div className="status_body">
          <div className="wrap">
            <textarea
              name="content"
              value={content}
              placeholder={`${auth.user.username} ơi, bạn đang nghĩ gì thế?`}
              onChange={(e) => setContent(e.target.value)}
            />

            <div className="d-flex">
              <div className="flex-fill"></div>
              <Icons setContent={setContent} content={content} />
            </div>
          </div>

          <div className="show_images">
            {images.map((img, index) => (
              <div key={index} id="file_img">
                {img.camera ? (
                  imageShow(img.camera)
                ) : img.url ? (
                  <>{img.url.match(/video/i) ? videoShow(img.url) : imageShow(img.url)}</>
                ) : (
                  <>
                    {img.type.match(/video/i)
                      ? videoShow(URL.createObjectURL(img))
                      : imageShow(URL.createObjectURL(img))}
                  </>
                )}
                <span onClick={() => deleteImages(index)}>&times;</span>
              </div>
            ))}
          </div>

          {stream && (
            <div className="stream position-relative">
              <video autoPlay muted ref={videoRef} width="100%" height="100%" />

              <span onClick={handleStopStream}>&times;</span>
              <canvas ref={refCanvas} style={{ display: 'none' }} />
            </div>
          )}
          <div className="status_footer">
            <div className="input_images w-50">
              {!stream && (
                <>
                  <div className="file_upload ">
                    <button
                      className="btn btn-warning w-100"
                      type="submit"
                      style={{ borderRadius: '50px', color: '#ffffff', fontSize: '17px', fontWeight: '500' }}
                    >
                      <input
                        type="file"
                        name="file"
                        id="file"
                        multiple
                        accept="image/*,video/*"
                        onChange={handleChangeImages}
                      />
                      Chọn ảnh
                    </button>
                  </div>
                </>
              )}
            </div>
            <div className="status_footer w-50">
              <button
                className="btn btn-warning w-100"
                type="submit"
                style={{ borderRadius: '50px', color: '#ffffff', fontSize: '17px', fontWeight: '500' }}
              >
                Đăng bài
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default StatusModal;
