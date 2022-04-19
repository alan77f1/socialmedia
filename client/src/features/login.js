import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { login } from '../redux/actions/authAction';
import { useDispatch, useSelector } from 'react-redux';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import facebookIcon from '../assets/images/facebook.svg';
import googleIcon from '../assets/images/google.svg';

const Login = () => {
  const initialState = { email: '', password: '' };
  const [userData, setUserData] = useState(initialState);
  const { email, password } = userData;

  const [typePass, setTypePass] = useState(false);

  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  // const responseGoogle = async (response) => {
  //   if (!response.profileObj) return;
  //   try {
  //     const registerData = await registerUser(response.profileObj);
  //     if (!registerData.success) setAlert(registerData.message);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const responseFacebook = async (response) => {
  //   const loginFB = {
  //     email: response.email ? response.email : response.userID,
  //   };
  //   if (!response.email) return;
  //   try {
  //     const registerData = await registerUser(loginFB);
  //     if (!registerData.success) setAlert(registerData.message);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
    <div className="auth_page">
      <form onSubmit={handleSubmit}>
        <h3 className="text-uppercase text-center mb-4">Instagram</h3>

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
          />

          <small id="emailHelp" className="form-text text-muted"></small>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Mật khẩu</label>

          <div className="pass">
            <input
              type={typePass ? 'text' : 'password'}
              className="form-control"
              id="exampleInputPassword1"
              onChange={handleChangeInput}
              value={password}
              name="password"
            />

            <small onClick={() => setTypePass(!typePass)}>{typePass ? 'Hide' : 'Show'}</small>
          </div>
        </div>

        <div className="auth-social">
          <button
            className="auth-social-item"
            type="submit"
            disabled={email && password ? false : true}
          >
            Đăng Nhập
          </button>
          <div className="auth-social-item">
            <img src={googleIcon} alt="" />
            <span>Continue with Google</span>
          </div>
          <div className="auth-social-item">
            <img src={facebookIcon} alt="" />
            <span>Continue with Facebook</span>
          </div>
        </div>

        <Link to="/forgot_password" style={{ color: 'crimson' }}>
          Quên Mật Khẩu?
        </Link>

        <p className="my-2">
          Bạn chưa có tài khoản?{' '}
          <Link to="/register" style={{ color: 'crimson' }}>
            Hãy Đăng Ký
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
