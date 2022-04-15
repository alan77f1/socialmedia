import React, { useEffect, useState } from 'react';

import Info from 'components/layout/profile/Info';
import Posts from 'components/layout/profile/Posts';
import Saved from 'components/layout/profile/Saved';

import { useSelector, useDispatch } from 'react-redux';
import LoadIcon from 'assets/images/loading.gif';
import { getProfileUsers } from 'redux/actions/profileAction';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { profile, auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const { id } = useParams();
  const [saveTab, setSaveTab] = useState(false);

  useEffect(() => {
    if (profile.ids.every((item) => item !== id)) {
      dispatch(getProfileUsers({ id, auth }));
    }
  }, [id, auth, dispatch, profile.ids]);

  return (
    <div className="profile">
      <Info auth={auth} profile={profile} dispatch={dispatch} id={id} />

      {auth.user._id === id && (
        <div className="profile_tab">
          <button className={saveTab ? '' : 'active'} onClick={() => setSaveTab(false)}>
            Bài viết
          </button>
          <button className={saveTab ? 'active' : ''} onClick={() => setSaveTab(true)}>
            Đã lưu
          </button>
        </div>
      )}

      {profile.loading ? (
        <img className="d-block mx-auto" src={LoadIcon} alt="loading" />
      ) : (
        <>
          {saveTab ? (
            <Saved auth={auth} dispatch={dispatch} />
          ) : (
            <Posts auth={auth} profile={profile} dispatch={dispatch} id={id} />
          )}
        </>
      )}
    </div>
  );
};

export default Profile;
