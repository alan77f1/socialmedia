import axios from 'axios';
import { useRef, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useHistory } from 'react-router';

export default function Register() {
  const [openRegister, setOpenRegister] = useState(false);

  const yyyy = new Date().getFullYear();
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post('/auth/register', user);
        history.push('/login');
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="registerModalWrap">
      <div className="registerModal">
        <div className="registerTop">
          <div className="registerTopText">
            <div className="registerTopTextTitle">Đăng ký</div>
            <div className="registerTopTextDesc">Nhanh chóng và dễ dàng.</div>
          </div>
          <div className="registerTopIcon" onClick={() => setOpenRegister(false)}>
            <CloseIcon />
          </div>
        </div>
        <hr className="registerHr" />
        <form className="registerForm" onSubmit={handleRegister}>
          <div className="grid__row">
            <div className=" grid__col-6-12">
              <div className="grid__col">
                <div className="registerInput">
                  <input type="text" placeholder="Họ" ref={firstName} />
                </div>
              </div>
            </div>
            <div className=" grid__col-6-12">
              <div className="grid__col">
                <div className="registerInput">
                  <input type="text" placeholder="Tên" ref={lastName} />
                </div>
              </div>
            </div>
            <div className=" grid__col-12-12">
              <div className="grid__col">
                <div className="registerInput">
                  <input type="text" placeholder="Số di động hoặc email" ref={email} />
                </div>
              </div>
            </div>
            <div className=" grid__col-12-12">
              <div className="grid__col">
                <div className="registerInput">
                  <input type="text" placeholder="Mật khẩu" ref={password} />
                </div>
              </div>
            </div>
            <div className="selectWrap">
              <div className="selectWrapDesc">Ngày sinh</div>
              <div className=" grid__col-4-12">
                <div className="grid__col">
                  <div className="registerInput">
                    <select ref={dayOfBirth}>
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
                    <select ref={monthOfBirth}>
                      {Array.from(new Array(12)).map((x, index) => (
                        <option key={index} value={index + 1}>{`Tháng ${index + 1}`}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className=" grid__col-4-12">
                <div className="grid__col">
                  <div className="registerInput">
                    <select name="cars" id="cars" ref={yearOfBirth}>
                      {Array.from(new Array(120)).map((x, index) => (
                        <option key={index} value={yyyy - index}>
                          {yyyy - index}
                        </option>
                      ))}
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
                    <input type="radio" id="male" name="sex" ref={sex} value="male" />
                  </div>
                </div>
              </div>
              <div className=" grid__col-4-12">
                <div className="grid__col">
                  <div className="registerInput">
                    <label htmlFor="female">Nam</label>
                    <input type="radio" id="female" name="sex" ref={sex} value="female" />
                  </div>
                </div>
              </div>
              <div className=" grid__col-4-12">
                <div className="grid__col">
                  <div className="registerInput">
                    <label htmlFor="orther">Khác</label>
                    <input type="radio" id="orther" name="sex" ref={sex} value="orther" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="registerBtn">
            Đăng ký
          </button>
        </form>
      </div>
    </div>
  );
}
