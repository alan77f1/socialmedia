import './Home.css';

Home.propTypes = {};

function Home(props) {
    return (
        <div>
            <div className='container'>
                <div className='homePage'>
                    <div className='cLeft'>SideBar</div>
                    <div className='cMiddle'>Feed</div>
                    <div className='cRight'>RightBar</div>
                </div>
            </div>
        </div>
    );
}

export default Home;
