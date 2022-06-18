import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import LogoUTC2 from '../assets/images/uct2.png';
import Helmet from '../components/Helmet';
import { GLOBALTYPES } from '../redux/actions/globalTypes';
import { postDataAPI } from '../utils/fetchData';
import validReset from '../utils/validreset';

function ResetPassword() {
  const { token } = useParams();
  const { auth, alert } = useSelector((state) => state);
  // const dispatch = useDispatch();
  const history = useHistory();
  const initialState = {
    password: '',
    cf_password: '',
  };

  const [typePass, setTypePass] = useState(false);
  const [typeCfPass, setTypeCfPass] = useState(false);

  const [data, setData] = useState(initialState);

  const { password, cf_password } = data;
  useEffect(() => {
    if (auth.token) history.push('/');
  }, [auth.token, history]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value, err: '', success: '' });
  };
  const handleSubmit = async (dispatch) => {
    // e.preventDefault();
    const check = validReset(data);
    if (check.errLength > 0) return dispatch({ type: GLOBALTYPES.ALERT, payload: check.errMsg });
    try {
      const res = await postDataAPI('reset', data, token);
      setData({ ...data });
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          success: res.data.msg,
        },
      });
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: err.response.data.msg,
        },
      });
    }

    // dispatch(resetPassword(data, token));
  };

  return (
    <Helmet title="Đặt lại mật khẩu">
      <div className="auth_page">
        <div className="auth_page-title">
          UTC2 Media <h5>UTC2 Media giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.</h5>
        </div>
        <form onSubmit={handleSubmit}>
          <h3 className="text-uppercase text-center mb-4" style={{ color: '#002F77' }}>
            UTC2 Media
          </h3>
          <img src={LogoUTC2}></img>
          <div className="form-group">
            <h5 className="text-uppercase text-center mb-4">Đặt lại mật khẩu</h5>

            <div className="pass">
              <input
                type={typePass ? 'text' : 'password'}
                className="form-control"
                id="exampleInputPassword1"
                onChange={handleChangeInput}
                value={password}
                name="password"
                style={{ background: `${alert.password ? '#fd2d6a14' : ''}` }}
                placeholder="Mật khẩu mới..."
              />

              <small onClick={() => setTypePass(!typePass)}>{typePass ? 'Hide' : 'Show'}</small>
            </div>

            <small className="form-text text-danger">{alert.password ? alert.password : ''}</small>
          </div>

          <div className="form-group">
            <div className="pass">
              <input
                type={typeCfPass ? 'text' : 'password'}
                className="form-control"
                id="cf_password"
                onChange={handleChangeInput}
                value={cf_password}
                name="cf_password"
                style={{ background: `${alert.cf_password ? '#fd2d6a14' : ''}` }}
                placeholder="Nhập lại mật khẩu..."
              />

              <small onClick={() => setTypeCfPass(!typeCfPass)}>{typeCfPass ? 'Hide' : 'Show'}</small>
            </div>

            <small className="form-text text-danger">{alert.cf_password ? alert.cf_password : ''}</small>
          </div>
          <button type="submit" className="btn btn-success w-100">
            Xác nhận
          </button>
        </form>
      </div>
    </Helmet>
  );
}

export default ResetPassword;
