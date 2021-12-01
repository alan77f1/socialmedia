import React, { useContext, useRef } from 'react';
import './Login.css';
import { loginCall } from '../../context/useAuth';
import { AuthContext } from '../../context/AuthProvider';

Login.propTypes = {};

function Login(props) {
  const email = useRef();
  const password = useRef();

  const { user, isFetching, dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    loginCall({ email: email.current.value, password: password.current.value }, dispatch);
  };

  console.log(user);
  return (
    <div className="login">
      <div className="loginWrap">
        <div className="loginLeft">
          <img src="./assets/loginLogo.svg" alt="" className="loginLeftLogo" />
          <h3 className="loginLeftDesc">
            Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.
          </h3>
        </div>
        <div className="loginRight">
          <form className="loginRightForm" onSubmit={handleLogin}>
            <div className="loginRightFormInput">
              <input type="text" placeholder="Email" ref={email} />
            </div>
            <div className="loginRightFormInput">
              <input type="password" placeholder="Mật khẩu" ref={password} />
            </div>

            {isFetching ? (
              <button type="submit" className="loginRightFormBtnSubmit disabled" disabled>
                <div className="lds-ring">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </button>
            ) : (
              <button type="submit" className="loginRightFormBtnSubmit">
                Đăng nhập
              </button>
            )}

            <div className="loginRightFormForgotPassword">Quên mật khẩu?</div>
            <hr className="loginRightFormHr" />
            <div className="loginRightFormNav">Tạo tài khoản mới</div>
          </form>
        </div>
      </div>
      {/* Register */}
    </div>
  );
}

export default Login;
