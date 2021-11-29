// import React, { useContext, useRef, useState } from 'react';
// import './Login.css';
// import { loginCall, registerCall } from '../../context/useAuth';
// import { AuthContext } from '../../context/AuthProvider';

// Login.propTypes = {};

// function Login(props) {
//   const [openRegister, setOpenRegister] = useState(false);

//   const yyyy = new Date().getFullYear();

//   const email = useRef();
//   const password = useRef();
//   const firstName = useRef();
//   const lastName = useRef();
//   const dayOfBirth = useRef();
//   const monthOfBirth = useRef();
//   const yearOfBirth = useRef();
//   const sex = useRef();

//   const { user, isFetching, dispatch } = useContext(AuthContext);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     loginCall({ email: email.current.value, password: password.current.value }, dispatch);
//   };

//     registerCall(newUser, dispatch);
//     window.location.reload();
//   };

//   console.log(user);
//   return (
//     <div className="login">
//       <div className="loginWrap">
//         <div className="loginLeft">
//           <img src="./assets/loginLogo.svg" alt="" className="loginLeftLogo" />
//           <h3 className="loginLeftDesc">
//             Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.
//           </h3>
//         </div>
//         <div className="loginRight">
//           <form className="loginRightForm" onSubmit={handleLogin}>
//             <div className="loginRightFormInput">
//               <input type="text" placeholder="Email" ref={email} />
//             </div>
//             <div className="loginRightFormInput">
//               <input type="password" placeholder="Mật khẩu" ref={password} />
//             </div>

//             {isFetching ? (
//               <button type="submit" className="loginRightFormBtnSubmit disabled" disabled>
//                 <div className="lds-ring">
//                   <div></div>
//                   <div></div>
//                   <div></div>
//                   <div></div>
//                 </div>
//               </button>
//             ) : (
//               <button type="submit" className="loginRightFormBtnSubmit">
//                 Đăng nhập
//               </button>
//             )}

//             <div className="loginRightFormForgotPassword">Quên mật khẩu?</div>
//             <hr className="loginRightFormHr" />
//             <div className="loginRightFormNav" onClick={() => setOpenRegister(true)}>
//               Tạo tài khoản mới
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

import { useContext, useRef } from 'react';
import './login.css';
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
import { CircularProgress } from '@material-ui/core';

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall({ email: email.current.value, password: password.current.value }, dispatch);
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input placeholder="Email" type="email" required className="loginInput" ref={email} />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? <CircularProgress color="white" size="20px" /> : 'Log In'}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              {isFetching ? <CircularProgress color="white" size="20px" /> : 'Create a New Account'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
