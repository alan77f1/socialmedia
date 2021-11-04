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
       {/* Register */}
       {openRegister && (
                <div className="registerModalWrap">
                    <div className="registerModal">
                        <div className="registerTop">
                            <div className="registerTopText">
                                <div className="registerTopTextTitle">Đăng ký</div>
                                <div className="registerTopTextDesc">Nhanh chóng và dễ dàng.</div>
                            </div>
                            <div className="registerTopIcon" />
                            </div>
                        </div>
                        <hr className="registerHr" />
                        <form className="registerForm" >
                            <div className="grid__row">
                                <div className=" grid__col-6-12">
                                    <div className="grid__col">
                                        <div className="registerInput">
                                            <input type="text" placeholder="Họ" />
                                        </div>
                                    </div>
                                </div>
                                <div className=" grid__col-6-12">
                                    <div className="grid__col">
                                        <div className="registerInput">
                                            <input type="text" placeholder="Tên" />
                                        </div>
                                    </div>
                                </div>
                                <div className=" grid__col-12-12">
                                    <div className="grid__col">
                                        <div className="registerInput">
                                            <input
                                                type="text"
                                                placeholder="Số di động hoặc email"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className=" grid__col-12-12">
                                    <div className="grid__col">
                                        <div className="registerInput">
                                            <input
                                                type="text"
                                                placeholder="Mật khẩu"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="selectWrap">
                                    <div className="selectWrapDesc">Ngày sinh</div>
                                    <div className=" grid__col-4-12">
                                        <div className="grid__col">
                                            <div className="registerInput">
                                                <select >
                                                    {Array.from(new Array(31)).map((x, index) => (
                                                        <option key={index} value={index + 1}>
                                                            {index + 1}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" grid__col-4-12">
                                        <div className="grid__col">
                                            <div className="registerInput">
                                                <select >
                                                    {Array.from(new Array(12)).map((x, index) => (
                                                        <option
                                                            key={index}
                                                            value={index + 1}
                                                        >{`Tháng ${index + 1}`}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className=" grid__col-4-12">
                                        <div className="grid__col">
                                            <div className="registerInput">
                                                <select name="cars" id="cars">
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="selectWrap">
                                    <div className=" grid__col-4-12">
                                        <div className="grid__col">
                                            <div className="registerInput">
                                                <label htmlFor="male">Nữ</label>
                                                <input
                                                    type="radio"
                                                    id="male"
                                                    name="sex"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" grid__col-4-12">
                                        <div className="grid__col">
                                            <div className="registerInput">
                                                <label htmlFor="female">Nam</label>
                                                <input
                                                    type="radio"
                                                    id="female"
                                                    name="sex"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" grid__col-4-12">
                                        <div className="grid__col">
                                            <div className="registerInput">
                                                <label htmlFor="orther">Khác</label>
                                                <input
                                                    type="radio"
                                                    id="orther"
                                                    name="sex"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="registerBtn">
                                Đăng ký
                            </button>
                        </form>
             
            );
            </div> 
    );
}

export default Login;
