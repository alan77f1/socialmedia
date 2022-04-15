import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { login } from '../redux/actions/authAction';
import { useDispatch, useSelector } from 'react-redux';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

const Login = () => {
  // const login = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const loginData = await loginUser(loginForm);
  //     if (!loginData.success) {
  //       setAlert({ message: loginData.message });
  //       setTimeout(() => setAlert(null), 5000);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
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
    <div className="auth_page">
      <form onSubmit={handleSubmit}>
        <h2 className="text-center mb-4">Instagram</h2>

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

          <small id="emailHelp" className="form-text text-muted">
            Chúng tôi sẽ không chia sẻ thông tin của bạn cho bất kỳ ai.
          </small>
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
            />

            <small onClick={() => setTypePass(!typePass)}>{typePass ? 'Hide' : 'Show'}</small>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={email && password ? false : true}
        >
          Đăng Nhập
        </button>

        <Link to="/forgot_password" style={{ color: 'crimson' }}>
          Quên Mật Khẩu?
        </Link>

        <p className="my-2">
          Bạn chưa có tài khoản?{' '}
          <Link to="/register" style={{ color: 'crimson' }}>
            Hãy Đăng Ký
          </Link>
        </p>

        <div className="container-btn-api">
          {/* <GoogleLogin
            clientId="455854470240-d6stpuonh3g1jh4ob8m6mn4bssg7uc48.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="button-api-login"
              >
                <img src={IconGG} alt="" style={{ width: 36, height: 36 }} />
              </button>
            )}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
          <FacebookLogin
            appId="459560505029470"
            fields="name,email,picture"
            textButton=""
            cssClass="button-api-login"
            icon={<img src={IconFB} alt="" style={{ width: 42, height: 42 }} />}
            callback={responseFacebook}
          /> */}
        </div>
      </form>
    </div>
  );
};

export default Login;

// import Loading from 'components/common/Loading';
// import Modal from 'components/common/Modal';
// import React from 'react';
// import { Link } from 'react-router-dom';
// import facebookIcon from '../assets/images/facebook.svg';
// import githubIcon from '../assets/images/github.svg';
// import googleIcon from '../assets/images/google.svg';

// function Login() {
//   return (
//     <>
//       <div className="auth">
//         <div className="wrapper">
//           <div className="auth-heading">
//             <h3>Sign in</h3>
//           </div>
//           <form className="auth-form">
//             <div>
//               <label htmlFor="email">Email</label>
//               <input id="email" type="text" placeholder="Email" />
//             </div>
//             <div>
//               <label htmlFor="password">Password</label>
//               <input id="password" type="password" placeholder="Password" />
//             </div>
//             <div className="auth-form-submit">
//               <button type="submit">Sign in </button>
//             </div>
//           </form>
//           <div className="devider">
//             <span>or continue with</span>
//           </div>
//           <div className="auth-social">
//             <div className="auth-social-item">
//               <img src={googleIcon} alt="" />
//               <span>Continue with Google</span>
//             </div>
//             <div className="auth-social-item">
//               <img src={facebookIcon} alt="" />
//               <span>Continue with Facebook</span>
//             </div>
//             <div className="auth-social-item">
//               <img src={githubIcon} alt="" />
//               <span>Continue with Github</span>
//             </div>
//           </div>
//           <div className="auth-footer">
//             <span>Don't have an account? </span>
//             <Link to="/register" className="auth-footer-link">
//               Register for free
//             </Link>
//           </div>
//         </div>
//       </div>

//       <Modal>
//         <Loading />
//       </Modal>
//     </>
//   );
// }

// export default Login;
