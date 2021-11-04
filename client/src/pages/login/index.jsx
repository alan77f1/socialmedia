Login.propTypes = {};

function Login(props) {
  return (
    <div className='login'>
      <div className='loginWrap'>
        <div className='loginLeft'>
          <img src='./assets/loginLogo.svg' alt='' className='loginLeftLogo' />
          <h3 className='loginLeftDesc'>
            Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống
            của bạn.
          </h3>
        </div>
        <div className='loginRight'>
          <form className='loginRightForm'>
            <div className='loginRightFormInput'>
              <input type='text' placeholder='Email' />
            </div>
            <div className='loginRightFormInput'>
              <input type='password' placeholder='Mật khẩu' />
            </div>

            <div className='loginRightFormForgotPassword'>Quên mật khẩu?</div>
            <hr className='loginRightFormHr' />
            <div className='loginRightFormNav'>Tạo tài khoản mới</div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
