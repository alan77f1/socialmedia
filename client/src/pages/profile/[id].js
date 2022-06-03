import React, { useEffect, useState } from 'react';

import Info from '../../components/profile/Info';
import Posts from '../../components/profile/Posts';
import Saved from '../../components/profile/Saved';

import { useSelector, useDispatch } from 'react-redux';
import { getProfileUsers } from '../../redux/actions/profileAction';
import { useParams } from 'react-router-dom';
import Helmet from '../../components/Helmet';
import LoadData from '../../components/alert/LoadData';

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
    <Helmet title="Trang cá nhân">
      <div className="main">
        <div className="profile">
          <Info auth={auth} profile={profile} dispatch={dispatch} id={id} />

          <div style={{ marginLeft: '42%', fontSize: '23px', fontWeight: '700', marginBottom: '5px' }}>
            Quản lý bài viết
          </div>
          {auth.user._id === id && (
            <div className="profile_tab">
              <button className={saveTab ? '' : 'active'} onClick={() => setSaveTab(false)}>
                Tất cả bài viết
              </button>
              <button className={saveTab ? 'active' : ''} onClick={() => setSaveTab(true)}>
                Bài viết đã lưu
              </button>
            </div>
          )}

          {profile.loading ? (
            <LoadData />
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
      </div>
    </Helmet>
  );
};

export default Profile;
