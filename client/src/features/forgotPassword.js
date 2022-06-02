import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { forgotPassword } from '../redux/actions/authAction';
import LogoUTC2 from '../assets/images/uct2.png';
import Helmet from '../components/Helmet';
const ForgotPassword = () => {
  const { auth, alert } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const initialState = {
    email: '',
  };

  const [data, setData] = useState(initialState);

  const { email } = data;
  useEffect(() => {
    if (auth.token) history.push('/');
  }, [auth.token, history]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // setData({ ...data });
    dispatch(forgotPassword(data));
  };

  return (
    <Helmet title="Quên mật khẩu">
      <div className="auth_page">
        <form onSubmit={handleSubmit}>
          <h3 className="text-uppercase text-center mb-4">UTC2 News</h3>
          <img src={LogoUTC2}></img>
          <div className="form-group">
            <h5 className="text-uppercase text-center mb-4" style={{ margin: '10px' }}>
              Quên mật khẩu ?
            </h5>

            <label htmlFor="exampleInputEmail1">Email</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              onChange={handleChangeInput}
              value={email}
              style={{ background: `${alert.email ? '#fd2d6a14' : ''}`, borderRadius: '50px' }}
            />

            <small className="form-text text-danger">{alert.email ? alert.email : ''}</small>
          </div>
          <button type="submit" className="btn btn-warning w-100" style={{ borderRadius: '50px' }}>
            Xác Thực Email
          </button>
        </form>
      </div>
    </Helmet>
  );
};

export default ForgotPassword;
