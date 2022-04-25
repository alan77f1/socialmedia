import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GLOBALTYPES } from '../../redux/actions/globalTypes';
import { createPost, updatePost } from '../../redux/actions/postAction';
import Icons from './Icons';
import { imageShow, videoShow } from '../../utils/mediaShow';

const NoteModal = () => {
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

  useEffect(() => {
    if (status.onEdit) {
      setContent(status.content);
      setImages(status.images);
    }
  }, [status]);

  return <div className="status_modal">kaka</div>;
};

export default NoteModal;
