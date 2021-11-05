import './Profile.css';

Profile.propTypes = {};

function Profile(props) {
    return (
        <div className='profile'>
            <div className='profileTopBg1'></div>
            <div className='profileTopBg2'></div>

            <div className='profileTop'>
                <img src='' alt='' className='profileTopCoverImg' />
                <div className='profileTopWrap'>
                    <div className='profileTopAvatar'>
                        <img src='' alt='' className='profileTopAvatarImg' />
                        <div className='profileTopChangeAvatarBtn'>
                            <div
                                className='profileTopAvatarIcon'
                                style={{
                                    backgroundImage: `url(./assets/profile/1.png)`,
                                    backgroundPosition: '0px -452px',
                                }}
                            ></div>
                        </div>
                    </div>
                    <div className='profileTopInfo'>
                        <div className='profileTopInfoName'>profile</div>
                        <div className='profileTopInfoDesc'>(xxx-xxx-xxx)</div>
                    </div>
                    <hr className='profileTopHr' />
                </div>
            </div>
            <div className='profileMain'>
                <div className='profileMainLeft'>
                    <div className='mainIntroduce'>
                        <div className='mainIntroduceTitle'>Giới thiệu</div>
                        <ul className='mainIntroduceList'>
                            <li className='mainIntroduceItem'>
                                <img
                                    src='./assets/profile/bagIcon.png'
                                    alt=''
                                    className='mainIntroduceItemBadge'
                                />
                                <div className='mainIntroduceItemText'>
                                    Đã tốt nghiệp tại THPT Sơn Thịnh
                                </div>
                            </li>
                            <li className='mainIntroduceItem'>
                                <img
                                    src='./assets/profile/bagIcon.png'
                                    alt=''
                                    className='mainIntroduceItemBadge'
                                />
                                <div className='mainIntroduceItemText'>
                                    sinh viên tại Đại học Bách khoa Hà Nội - Hanoi University of
                                    Science and Technology
                                </div>
                            </li>
                            <li className='mainIntroduceItem'>
                                <img
                                    src='./assets/profile/homeIcon.png'
                                    alt=''
                                    className='mainIntroduceItemBadge'
                                />
                                <div className='mainIntroduceItemText'>Sống tại Yên Bái</div>
                            </li>
                            <li className='mainIntroduceItem'>
                                <img
                                    src='./assets/profile/heartIcon.png'
                                    alt=''
                                    className='mainIntroduceItemBadge'
                                />
                                <div className='mainIntroduceItemText'>Hẹn hò</div>
                            </li>
                            <li className='mainIntroduceItem'>
                                <img
                                    src='./assets/profile/clockIcon.png'
                                    alt=''
                                    className='mainIntroduceItemBadge'
                                />
                                <div className='mainIntroduceItemText'>
                                    Tham gia vào Tháng 6 năm 2016
                                </div>
                            </li>
                        </ul>
                        <div className='mainIntroduceBtn'>Chỉnh sửa chi tiết</div>
                    </div>
                </div>
                <div className='profileMainRight'>profileMainRight</div>
            </div>
        </div>
    );
}

export default Profile;
