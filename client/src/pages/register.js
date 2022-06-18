import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import LogoUTC2 from '../assets/images/uct2.png';
import Helmet from '../components/Helmet';
import { register } from '../redux/actions/authAction';

const Register = () => {
  const { auth, alert } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const initialState = {
    fullname: '',
    username: '',
    email: '',
    password: '',
    cf_password: '',
    gender: 'male',
  };
  const [userData, setUserData] = useState(initialState);
  const { fullname, username, email, password, cf_password } = userData;

  const [typePass, setTypePass] = useState(false);
  const [typeCfPass, setTypeCfPass] = useState(false);

  useEffect(() => {
    if (auth.token) history.push('/');
  }, [auth.token, history]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(userData));
  };

  return (
    <Helmet title="Đăng ký">
      <div className="auth_page">
        <div className="auth_page-title">
          UTC2 Media <h5>UTC2 Media giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.</h5>
        </div>
        <form onSubmit={handleSubmit}>
          <h3 className="text-uppercase text-center mb-1" style={{ color: '#002F77' }}>
            UTC2 Media
          </h3>
          <img src={LogoUTC2}></img>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="fullname"
              name="fullname"
              onChange={handleChangeInput}
              value={fullname}
              style={{ background: `${alert.fullname ? '#fd2d6a14' : ''}`, borderRadius: '50px' }}
              placeholder="Họ và tên..."
            />

            <small className="form-text text-danger">{alert.fullname ? alert.fullname : ''}</small>
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              onChange={handleChangeInput}
              value={username.toLowerCase().replace(/ /g, '')}
              style={{ background: `${alert.username ? '#fd2d6a14' : ''}`, borderRadius: '50px' }}
              placeholder="Tên tài khoản..."
            />

            <small className="form-text text-danger">{alert.username ? alert.username : ''}</small>
          </div>

          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              onChange={handleChangeInput}
              value={email}
              style={{ background: `${alert.email ? '#fd2d6a14' : ''}`, borderRadius: '50px' }}
              placeholder="Email..."
            />

            <small className="form-text text-danger">{alert.email ? alert.email : ''}</small>
          </div>

          <div className="form-group">
            <div className="pass">
              <input
                type={typePass ? 'text' : 'password'}
                className="form-control"
                id="exampleInputPassword1"
                onChange={handleChangeInput}
                value={password}
                name="password"
                style={{ background: `${alert.password ? '#fd2d6a14' : ''}`, borderRadius: '50px' }}
                placeholder="Mật khẩu..."
              />

              <small onClick={() => setTypePass(!typePass)}>{typePass ? 'Ẩn' : 'Hiện'}</small>
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
                style={{
                  background: `${alert.cf_password ? '#fd2d6a14' : ''}`,
                  borderRadius: '50px',
                }}
                placeholder="Nhập lại mật khẩu..."
              />

              <small onClick={() => setTypeCfPass(!typeCfPass)}>{typeCfPass ? 'Ẩn' : 'Hiện'}</small>
            </div>

            <small className="form-text text-danger">{alert.cf_password ? alert.cf_password : ''}</small>
          </div>

          <div className="row justify-content-between mx-0 mb-1">
            <span htmlFor="username">Giới tính:</span>
            <label htmlFor="male">
              Nam{' '}
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                defaultChecked
                onChange={handleChangeInput}
                style={{ cursor: 'pointer' }}
              />
            </label>

            <label htmlFor="female">
              Nữ{' '}
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                onChange={handleChangeInput}
                style={{ cursor: 'pointer' }}
              />
            </label>

            <label htmlFor="other">
              Khác{' '}
              <input
                type="radio"
                id="other"
                name="gender"
                value="other"
                onChange={handleChangeInput}
                style={{ cursor: 'pointer' }}
              />
            </label>
          </div>

          <button type="submit" className="btn btn-warning w-100" style={{ borderRadius: '50px' }}>
            Đăng Ký
          </button>

          <p className="my-2">
            <Link to="/" style={{ color: '#0075FF' }}>
              Bạn đã có tài khoản
            </Link>
          </p>
        </form>
      </div>
    </Helmet>
  );
};

export default Register;
