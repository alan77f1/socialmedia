import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { login } from '../redux/actions/authAction';
import { useDispatch, useSelector } from 'react-redux';
import LogoUTC2 from '../assets/images/uct2.png';
import Helmet from '../components/Helmet';

const Login = () => {
  const initialState = { email: '', password: '' };
  const [userData, setUserData] = useState(initialState);
  const { email, password } = userData;

  const [typePass, setTypePass] = useState(false);

  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (auth.token) history.push('/');
  }, [auth.token, history]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(userData));
  };

  return (
    <Helmet title="Đăng nhập">
      <div className="auth_page">
        <div className="auth_page-title">
          UTC2 News <h5>UTC2 News giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.</h5>
        </div>
        <form onSubmit={handleSubmit}>
          <h3 className="text-uppercase text-center mb-4">UTC2 News</h3>
          <img src={LogoUTC2}></img>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              aria-describedby="emailHelp"
              onChange={handleChangeInput}
              value={email}
              style={{ borderRadius: '50px' }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Mật Khẩu</label>

            <div className="pass">
              <input
                type={typePass ? 'text' : 'password'}
                className="form-control"
                id="exampleInputPassword1"
                onChange={handleChangeInput}
                value={password}
                name="password"
                style={{ borderRadius: '50px' }}
              />

              <small onClick={() => setTypePass(!typePass)}>{typePass ? 'Ẩn' : 'Hiện'}</small>
            </div>
          </div>

          <button type="submit" className="btn btn-warning w-100" disabled={email && password ? false : true}>
            Đăng Nhập
          </button>

          <Link to="/forgot_password" style={{ color: '#0075FF' }}>
            Quên Mật Khẩu?
          </Link>

          <p className="my-2">
            Chưa có tài khoản?{' '}
            <Link to="/register" style={{ color: '#0075FF' }}>
              Đăng Ký
            </Link>
          </p>
        </form>
      </div>
    </Helmet>
  );
};

export default Login;
