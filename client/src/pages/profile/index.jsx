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
        </div>
    );
}

export default Profile;
